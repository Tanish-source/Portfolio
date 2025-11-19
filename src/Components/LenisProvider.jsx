// LenisProvider.jsx
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smooth: true,
            lerp: 0.1,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return children;
}
