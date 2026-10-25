export function SectionRail({ activeSection }) {
    const rails = [
        { id: "top", label: "01" },
        { id: "gioi-thieu", label: "02" },
        { id: "huong-di", label: "03" },
        { id: "du-an", label: "04" },
        { id: "noi-thang", label: "05" },
        { id: "faq", label: "06" },
    ];

    return (
        <nav className="rail" aria-label="Các phần của trang">
            {rails.map((item) => (
                <a
                    key={item.id}
                    href={`#${item.id}`}
                    data-rail={item.id}
                    className={activeSection === item.id ? "active" : ""}
                >
                    <i />
                    {item.label}
                </a>
            ))}
        </nav>
    );
}
