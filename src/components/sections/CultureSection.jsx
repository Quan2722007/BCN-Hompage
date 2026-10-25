import { useState } from "react";
import { Container } from "../common/Container";
import { CULTURE_SITUATIONS } from "../../data/culture";

export function CultureSection() {
    const [selectedId, setSelectedId] = useState("deadline");

    const currentItem = CULTURE_SITUATIONS.find((item) => item.id === selectedId) || CULTURE_SITUATIONS[0];

    return (
        <section id="van-hoa">
            <Container>
                <div className="sec-head reveal">
                    <p className="eyebrow">Cách tụi mình làm việc với nhau</p>
                    <h2>
                        Chưa giỏi thì được, <span className="text-highlight">làm ẩu thì không nha.</span>
                    </h2>
                </div>

                <div className="culture reveal" role="tablist" aria-label="Tình huống làm việc">
                    {CULTURE_SITUATIONS.map((item) => (
                        <button
                            key={item.id}
                            className="culture-btn"
                            role="tab"
                            type="button"
                            aria-selected={selectedId === item.id}
                            onClick={() => setSelectedId(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <div
                    className="culture-answer reveal"
                    id="cultureAnswer"
                    role="tabpanel"
                    aria-live="polite"
                >
                    <b>{currentItem.boldLead} </b>
                    {currentItem.desc}
                </div>
            </Container>
        </section>
    );
}
