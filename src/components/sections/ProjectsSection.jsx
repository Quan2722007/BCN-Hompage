import { useState } from "react";
import { Container } from "../common/Container";
import { PROJECTS, PROJECT_FILTERS } from "../../data/projects";

export function ProjectsSection() {
    const [currentFilter, setCurrentFilter] = useState("all");
    const [openSolutions, setOpenSolutions] = useState({});

    const toggleSolution = (id) => {
        setOpenSolutions((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const filteredProjects = PROJECTS.filter((item) => {
        if (currentFilter === "all") return true;
        return item.categories.includes(currentFilter);
    });

    return (
        <section id="du-an" className="dark-sec">
            <Container>
                <div className="sec-head center reveal">
                    <p className="eyebrow center">Dự án</p>
                    <h2>
                        Tụi mình đã <span className="text-highlight">làm được mấy thứ này nè.</span>
                    </h2>
                    <p className="lead center">
                        Mấy thứ này là tụi mình làm thật, đang chạy thử hoặc dùng nội bộ thôi. Bấm vào từng cái để xem tụi mình đã làm như thế nào nha.
                    </p>
                </div>

                <div className="filters" role="tablist" aria-label="Lọc dự án">
                    {PROJECT_FILTERS.map((f) => (
                        <button
                            key={f.id}
                            className="pill"
                            role="tab"
                            type="button"
                            aria-selected={currentFilter === f.id}
                            onClick={() => setCurrentFilter(f.id)}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                <p className="filter-note" id="filterNote" aria-live="polite">
                    Đang hiển thị {filteredProjects.length} dự án / demo.
                </p>

                <div className="project-grid" id="projectGrid">
                    {filteredProjects.map((project) => {
                        const isOpen = !!openSolutions[project.id];
                        return (
                            <article
                                key={project.id}
                                className="card project reveal"
                                data-cat={project.categories.join(" ")}
                                data-d={project.delay}
                            >
                                <div className="mini" aria-hidden="true">
                                    <i style={{ width: project.miniWidths[0] }} />
                                    <i style={{ width: project.miniWidths[1] }} />
                                    <i style={{ width: project.miniWidths[2] }} />
                                </div>

                                <span className="status">{project.status}</span>

                                <div style={{ marginBottom: "10px" }}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="chip" style={{ marginRight: "6px" }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>

                                <button
                                    className="toggle-btn"
                                    type="button"
                                    aria-expanded={isOpen}
                                    onClick={() => toggleSolution(project.id)}
                                >
                                    {isOpen ? "Thu gọn " : "Xem tụi mình làm sao "}
                                    <span className="chev">▾</span>
                                </button>

                                <div className={`solution ${isOpen ? "open" : ""}`}>
                                    <p>{project.solution}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
