import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
    const lenisRef = useRef<Lenis | null>(null);
    const rafIdRef = useRef<number | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.05,
            smoothWheel: true,
            autoResize: true,
            touchMultiplier: 0,
        });

        lenisRef.current = lenis;

        const raf = (time: number) => {
            lenis.raf(time);
            rafIdRef.current = requestAnimationFrame(raf);
        };

        rafIdRef.current = requestAnimationFrame(raf);

        return () => {
            if (rafIdRef.current) {
                cancelAnimationFrame(rafIdRef.current);
            }
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return lenisRef.current;
};