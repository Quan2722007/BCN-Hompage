import { useState, useEffect } from "react";

const DEFAULT_SECTION_IDS = ["top", "gioi-thieu", "huong-di", "du-an", "noi-thang", "faq"];

export function useActiveSection(sectionIds = DEFAULT_SECTION_IDS) {
    const [activeSection, setActiveSection] = useState("top");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            observer.disconnect();
        };
    }, [sectionIds]);

    return activeSection;
}
