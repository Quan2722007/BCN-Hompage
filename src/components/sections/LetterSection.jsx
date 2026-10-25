import { useState, useRef, useEffect } from "react";
import { Container } from "../common/Container";

export function LetterSection() {
    const [letterOpen, setLetterOpen] = useState(false);
    const [flapOpen, setFlapOpen] = useState(false);
    const [letterUp, setLetterUp] = useState(false);
    const [letterClosing, setLetterClosing] = useState(false);

    const envBtnRef = useRef(null);
    const letterPaperRef = useRef(null);
    const timersRef = useRef([]);

    const clearAllTimers = () => {
        timersRef.current.forEach(clearTimeout);
        timersRef.current = [];
    };

    useEffect(() => {
        return () => {
            clearAllTimers();
        };
    }, []);

    const setLetterState = (open) => {
        clearAllTimers();
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        setLetterOpen(open);

        if (reduced) {
            setFlapOpen(open);
            setLetterUp(open);
            setLetterClosing(false);
            return;
        }

        if (open) {
            setLetterClosing(false);
            setFlapOpen(true);
            const t = setTimeout(() => {
                setLetterUp(true);
                // Đảm bảo bức thư không bị che khuất bởi sticky header nếu ở vị trí quá cao
                if (letterPaperRef.current) {
                    const rect = letterPaperRef.current.getBoundingClientRect();
                    if (rect.top < 80) {
                        window.scrollBy({ top: rect.top - 90, behavior: "smooth" });
                    }
                }
            }, 550);
            timersRef.current.push(t);
        } else {
            setLetterUp(false);
            setLetterClosing(true);
            const t = setTimeout(() => {
                setLetterClosing(false);
                setFlapOpen(false);
            }, 850);
            timersRef.current.push(t);
        }
    };

    const handleToggle = () => {
        setLetterState(!letterOpen);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleToggle();
        }
    };

    const handleClose = (e) => {
        if (e) e.stopPropagation();
        setLetterState(false);
        if (envBtnRef.current) {
            envBtnRef.current.focus();
        }
    };

    const envelopeClassNames = [
        "envelope",
        flapOpen ? "flap-open" : "",
        letterUp ? "letter-up" : "",
        letterClosing ? "letter-closing" : "",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <section id="noi-thang" style={{ borderTop: "1px solid var(--border)", background: "#fff" }}>
            <Container>
                <div className="sec-head center reveal">
                    <p className="eyebrow center">Nói thật với bạn</p>
                    <h2>
                        Vào đây vui, <span className="text-highlight">nhưng không nhàn đâu.</span>
                    </h2>
                    <p className="lead center">
                        Tụi mình nói trước mấy điều này để bạn khỏi bất ngờ, chứ không phải để dọa bạn đâu nha.
                    </p>
                </div>

                <div className="grid3">
                    <article className="card reveal">
                        <span className="n">01</span>
                        <h3>Sẽ tốn thời gian đó</h3>
                        <p>Học, làm bài, sửa bài — không có đường tắt đâu. Nhưng có người cùng làm nên đỡ chán hơn nhiều.</p>
                    </article>
                    <article className="card reveal" data-d="1">
                        <span className="n">02</span>
                        <h3>Có hôm sẽ bị chê</h3>
                        <p>Sản phẩm mình làm có thể bị chỉ ra nhiều điểm yếu. Nghe thì hơi buồn, nhưng sửa xong là nó tốt lên thật.</p>
                    </article>
                    <article className="card card-dark reveal" data-d="2">
                        <span className="n">03</span>
                        <h3>Nhận việc là phải báo</h3>
                        <p>Khi nào xong, khi nào kẹt thì nói sớm một tiếng. Im lặng tới phút cuối mới là thứ làm mọi người mệt.</p>
                    </article>
                </div>

                <div
                    className={`letter-stage reveal ${letterOpen ? "open" : ""}`}
                    data-revealed={letterOpen ? "true" : undefined}
                    id="letterStage"
                >
                    <p className="letter-title">Có một bức thư gửi bạn.</p>
                    <p className="letter-sub">
                        Không phải thông báo, không phải quảng cáo. Chỉ vài lời tụi mình muốn nói trước.
                    </p>

                    <div
                        ref={envBtnRef}
                        className={envelopeClassNames}
                        id="envelopeBtn"
                        role="button"
                        tabIndex={0}
                        aria-expanded={letterOpen}
                        aria-controls="letterPaper"
                        aria-label="Mở bức thư gửi bạn đang phân vân"
                        onClick={handleToggle}
                        onKeyDown={handleKeyDown}
                    >
                        <div
                            ref={letterPaperRef}
                            className="letter-paper"
                            id="letterPaper"
                            role="region"
                            aria-label="Lời nhắn gửi bạn đang phân vân"
                            onClick={(e) => {
                                if (letterOpen) {
                                    e.stopPropagation();
                                }
                            }}
                        >
                            <p className="lp-to">Chào bạn,</p>
                            <p>
                                Nếu bạn đang phân vân thì tụi mình hiểu mà. Ai mới bắt đầu cũng sợ mình không đủ giỏi, sợ vào rồi theo không kịp. Thật ra tụi mình cũng từng vậy đó.
                            </p>
                            <p>
                                Bạn cứ thử một việc nhỏ thôi. Nếu thấy hợp thì ở lại, không hợp thì cũng không sao hết. Không ai bắt bạn phải quyết định ngay hôm nay đâu.
                            </p>
                            <p className="sign">— Tụi mình ở BCN</p>
                        </div>

                        <span className="env-flap-border" aria-hidden="true" />
                        <span className="env-flap" aria-hidden="true" />
                        <span className="env-front" aria-hidden="true" />
                        <span className="env-addr">
                            <b>Gửi bạn đang phân vân</b>
                            <span>Từ Ban Công Nghệ</span>
                            <i aria-hidden="true" />
                        </span>
                        <span className="env-stamp" aria-hidden="true">
                            BCN
                        </span>
                        <span className="env-seal" aria-hidden="true">
                            B
                        </span>
                    </div>

                    <span className="env-hint" id="envHint">
                        {letterOpen
                            ? "Thư đã mở rồi nè — đọc xong thì bấm “Gấp thư lại” nha."
                            : "Bấm vào phong bì để mở thư →"}
                    </span>

                    <button
                        className="btn btn-ghost letter-close"
                        id="closeLetter"
                        type="button"
                        onClick={handleClose}
                    >
                        Gấp thư lại, bỏ vào bì
                    </button>
                </div>

                <p className="note">
                    Về bằng chứng nè: dự án ở trên đều là demo/sản phẩm thật với trạng thái thật. Còn hồ sơ thành viên thì tụi mình sẽ chỉ đăng khi có bạn đồng ý công khai thôi, không dùng hồ sơ giả đâu.
                </p>
            </Container>
        </section>
    );
}
