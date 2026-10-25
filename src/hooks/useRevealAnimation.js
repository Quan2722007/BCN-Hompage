import { useEffect } from "react";

export function useRevealAnimation() {
    useEffect(() => {
        // If reduced motion is preferred, mark all reveals as in
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const reveals = document.querySelectorAll(".reveal");

        if (reduced) {
            reveals.forEach((el) => el.classList.add("in"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        reveals.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }, []);
}
