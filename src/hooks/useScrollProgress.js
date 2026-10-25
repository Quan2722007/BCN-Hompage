import { useState, useEffect } from "react";

export function useScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const h = document.documentElement;
            const scrolled = h.scrollTop;
            const maxScroll = h.scrollHeight - h.clientHeight;
            const p = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
            setProgress(Math.min(100, Math.max(0, p)));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return progress;
}
