"use client";

import { useFrame, Canvas } from "@react-three/fiber";
import { useFBO } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MouseEffectScene() {
    return (
        <Canvas
            orthographic
            dpr={[1, 2]} 
            style={{width: "100%", height: "100%"}}
            camera={{ zoom: 1 }}
        >
            <Smoke />
        </Canvas>
    )
};

function Smoke() {
    const ref          = useRef<any>(null);
    const prevMouse    = useRef<[number, number]>([0, 0]);
    const currentMouse = useRef<[number, number]>([0, 0]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // R3Fの pointer.x / y と同じ形式 (-1 to +1) に変換
            currentMouse.current[0] = (e.clientX / window.innerWidth) * 2 - 1;
            currentMouse.current[1] = -(e.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // [0] for velocity, [1] for density
    const targets = [
        useFBO({ count: 2, type: THREE.FloatType }),
        useFBO({ count: 2, type: THREE.FloatType })
    ];
    const frameCount = useRef(0);
  
    useFrame((state) => {
        if (!ref.current) return;

        const { gl, scene, camera, clock, size } = state;

        ref.current.uniforms.uTime.value = clock.elapsedTime;

        // gl_FragCoord is in *drawing buffer* pixels, so uResolution must match
        // the actual renderbuffer size (includes devicePixelRatio).
        const dpr = gl.getPixelRatio();
        ref.current.uniforms.uResolution.value.set(
          size.width * dpr,
          size.height * dpr
        );

        const x = currentMouse.current[0];
        const y = currentMouse.current[1];
        ref.current.uniforms.uCurrentMouse.value.set(x, y);
        ref.current.uniforms.uPrevMouse.value.set(prevMouse.current[0], prevMouse.current[1]);

        // ping-pong
        const currentTarget = targets[frameCount.current % 2];
        const prevTarget    = targets[(frameCount.current + 1) % 2];

        ref.current.uniforms.uPrevVelocity.value = prevTarget.textures[0];
        ref.current.uniforms.uPrevDensity.value  = prevTarget.textures[1];

        gl.setRenderTarget(currentTarget);        
        gl.render(scene, camera);
        gl.setRenderTarget(null);

        prevMouse.current = [x, y];
        frameCount.current++;
    });

    return (
        <mesh>
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                ref={ref}
                glslVersion={THREE.GLSL3}
                uniforms={{
                    uTime: { value: 0 },
                    uResolution: { value: new THREE.Vector2() },
                    uCurrentMouse: { value: new THREE.Vector2() },
                    uPrevMouse: { value: new THREE.Vector2() },
                    uPrevVelocity: { value: null },
                    uPrevDensity: { value: null },
                }}
                transparent
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
            />
        </mesh>
    );
}

const vertexShader = `
void main() {
    gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
precision mediump float;

layout(location = 0) out vec4 pc_FragDensity;
layout(location = 1) out vec4 pc_FragVelocity;

uniform sampler2D uPrevVelocity;
uniform sampler2D uPrevDensity;
uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uCurrentMouse;
uniform vec2 uPrevMouse;

float distToSegment(vec2 p, vec2 a, vec2 b) {
    vec2 pa = p - a, ba = b - a;
    float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
    return length(pa - ba * h);
}

void main() {
    float aspect = uResolution.x / uResolution.y;
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    
    // 座標の補正
    vec2 st = uv * 2.0 - 1.0;
    st.x *= aspect;

    // current and previous mouse position
    vec2 mouseC = uCurrentMouse;
    vec2 mouseP = uPrevMouse;
    mouseC.x *= aspect;
    mouseP.x *= aspect;

    // マウスによる速度の発生
    vec2 mouseVel = mouseC - mouseP;
    if (length(mouseVel) > 1.0) mouseVel = vec2(0.0);
    float dist = distToSegment(st, mouseP, mouseC);
    float strength = smoothstep(0.1, 0.0, dist);
    strength = pow(strength, 2.0);

    // 新しい速度 = 前の速度(減衰) + マウスの動き
    vec2 prevVel = texture(uPrevVelocity, uv).xy;
    vec2 movedVel = texture(uPrevVelocity, uv - prevVel * 0.01).xy;
    vec2 nextVel = movedVel * 0.96 + mouseVel * strength;

    // 新しい密度（煙） = 前の密度(減衰) + マウスが速いほど噴射
    float mouseSpeed = length(mouseVel);
    vec4 movedDen = texture(uPrevDensity, uv + nextVel * 0.01);
    vec4 nextDen = movedDen * 0.98 + vec4(1.0) * strength * mouseSpeed * 10.0;

    // MRTに出力
    pc_FragDensity = nextDen;
    pc_FragVelocity = vec4(vec3(nextVel.x), 1.0);
}
`;
