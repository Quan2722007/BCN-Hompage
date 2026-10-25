import { Container } from "../common/Container";

export function IntroductionSection() {
    return (
        <section id="gioi-thieu">
            <Container>
                <div className="sec-head center reveal">
                    <p className="eyebrow center">BCN là gì</p>
                    <h2>
                        Ở BCN, tụi mình <span className="text-highlight">học kiểu khác</span> một chút.
                    </h2>
                </div>

                <div className="grid3">
                    <article className="card reveal" data-d="1">
                        <span className="n">01</span>
                        <h3>Học để làm được việc</h3>
                        <p>Không học thuộc lòng. Học cái gì thì đem ra làm thử cái đó liền.</p>
                    </article>
                    <article className="card reveal" data-d="2">
                        <span className="n">02</span>
                        <h3>Làm rồi sửa, sửa rồi làm</h3>
                        <p>Làm chưa tốt cũng không sao, có người góp ý rồi mình sửa tiếp là được.</p>
                    </article>
                    <article className="card card-dark reveal" data-d="3">
                        <span className="n">03</span>
                        <h3>Có nhau thì đỡ nản hơn</h3>
                        <p>Chia sẻ với nhau, làm chung với nhau, tới đâu cũng có người đồng hành.</p>
                    </article>
                </div>

                <p className="reveal" style={{ color: "var(--sec)", marginTop: "20px", textAlign: "center" }}>
                    Tụi mình không phải lớp học thêm, không phải công ty, cũng không phải chỗ chỉ để chơi cho vui.
                </p>
            </Container>
        </section>
    );
}
