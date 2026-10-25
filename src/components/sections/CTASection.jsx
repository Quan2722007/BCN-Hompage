import { Container } from "../common/Container";

export function CTASection() {
    return (
        <section className="cta">
            <Container className="reveal">
                <p className="eyebrow">Bước tiếp theo</p>
                <h2>
                    Thử một việc nhỏ <span className="text-highlight">trước đã nhé?</span>
                </h2>
                <p className="lead" style={{ marginTop: "10px" }}>
                    Không cần giỏi trước đâu. Chỉ cần tò mò một chút là đủ rồi.
                </p>
                <div className="hero-ctas" style={{ justifyContent: "flex-start" }}>
                    <a className="btn btn-primary" href="#huong-di">
                        Tìm hướng của bạn <span className="arr">→</span>
                    </a>
                    <a className="btn btn-ghost" href="#du-an">
                        Xem dự án trước
                    </a>
                </div>
            </Container>
        </section>
    );
}
