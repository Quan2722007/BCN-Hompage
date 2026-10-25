import { useState } from "react";
import { Container } from "../common/Container";
import { CAREER_PATHS } from "../../data/careerPaths";

export function CareerPathSection() {
    const [selectedTrack, setSelectedTrack] = useState("web");
    const trackData = CAREER_PATHS[selectedTrack];

    const tracksList = [
        { id: "web", delay: null },
        { id: "mobile", delay: "1" },
        { id: "product", delay: "2" },
        { id: "unknown", delay: "3" },
    ];

    return (
        <section id="huong-di" style={{ borderTop: "1px solid var(--border)", background: "#fff" }}>
            <Container>
                <div className="sec-head center reveal">
                    <p className="eyebrow center">Bạn tò mò về gì?</p>
                    <h2>
                        Chọn một ô thôi, <span className="text-highlight">đừng lo chọn sai.</span>
                    </h2>
                    <p className="lead center">
                        Chưa biết mình hợp cái gì cũng bình thường mà. Chọn cái nào khiến bạn tò mò nhất là được.
                    </p>
                </div>

                <div className="tracks" role="tablist" aria-label="Chọn điều bạn tò mò">
                    {tracksList.map(({ id, delay }) => {
                        const item = CAREER_PATHS[id];
                        return (
                            <button
                                key={id}
                                className="track reveal"
                                role="tab"
                                type="button"
                                aria-selected={selectedTrack === id}
                                data-d={delay}
                                onClick={() => setSelectedTrack(id)}
                            >
                                <b>{item.label}</b>
                                <span>{item.sub}</span>
                            </button>
                        );
                    })}
                </div>

                <div
                    key={selectedTrack}
                    className="track-detail fade"
                    id="trackPanel"
                    role="tabpanel"
                    aria-live="polite"
                >
                    <h3>{trackData.t}</h3>
                    <p>
                        <b>{trackData.q}</b>
                    </p>
                    <div className="skillchips">
                        {trackData.s.map((chip, index) => (
                            <span key={index} className="chip">
                                {chip}
                            </span>
                        ))}
                    </div>
                    <div className="first-step">
                        <b>👉 {trackData.first}</b>
                    </div>
                    <p style={{ marginTop: "12px" }}>{trackData.rel}</p>
                </div>
            </Container>
        </section>
    );
}
