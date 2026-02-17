import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollReset() {
    const { pathname } = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 800);
      
        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
}
