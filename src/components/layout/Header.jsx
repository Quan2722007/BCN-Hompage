import { useState } from "react";
import { Container } from "../common/Container";

export function Header({ activeSection }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { href: "#gioi-thieu", id: "gioi-thieu", label: "BCN là gì" },
        { href: "#huong-di", id: "huong-di", label: "Bạn tò mò gì?" },
        { href: "#du-an", id: "du-an", label: "Dự án" },
        { href: "#noi-thang", id: "noi-thang", label: "Nói thật" },
        { href: "#faq", id: "faq", label: "FAQ" },
    ];

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <a className="skip" href="#main">
                Bỏ qua điều hướng, tới nội dung chính
            </a>
            <header>
                <Container className="nav">
                    <a className="brand" href="#top">
                        <span className="brandmark">BCN</span>
                        <span>
                            Ban Công Nghệ
                            <small>CỘNG ĐỒNG SINH VIÊN CÔNG NGHỆ</small>
                        </span>
                    </a>

                    <button
                        id="menuBtn"
                        type="button"
                        aria-expanded={menuOpen}
                        aria-controls="navlinks"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        Menu
                    </button>

                    <nav
                        className={`navlinks ${menuOpen ? "open" : ""}`}
                        id="navlinks"
                        aria-label="Điều hướng chính"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                className={activeSection === item.id ? "active" : ""}
                                onClick={handleLinkClick}
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            className="btn btn-primary btn-sm"
                            href="#huong-di"
                            style={{ marginLeft: "6px" }}
                            onClick={handleLinkClick}
                        >
                            Tìm hướng của bạn
                        </a>
                    </nav>
                </Container>
            </header>
        </>
    );
}
