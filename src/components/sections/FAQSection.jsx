import { useState } from "react";
import { Container } from "../common/Container";
import { FAQ_ITEMS } from "../../data/faq";

export function FAQSection() {
    const [openId, setOpenId] = useState(null);

    const toggleAccordion = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section id="faq" style={{ borderTop: "1px solid var(--border)" }}>
            <Container className="faq">
                <div className="sec-head reveal">
                    <p className="eyebrow">FAQ</p>
                    <h2>Hỏi nhanh, đáp gọn.</h2>
                </div>

                {FAQ_ITEMS.map((item) => {
                    const isOpen = openId === item.id;
                    return (
                        <div key={item.id} className={`acc reveal ${isOpen ? "open" : ""}`}>
                            <button
                                className="acc-btn"
                                type="button"
                                aria-expanded={isOpen}
                                onClick={() => toggleAccordion(item.id)}
                            >
                                {item.question}
                                <span className="plus">+</span>
                            </button>
                            <div className="acc-panel">
                                <div>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Container>
        </section>
    );
}
