import { useState } from "react";
import { Container } from "../common/Container";
import { HERO_STATES } from "../../data/heroStates";

export function HeroSection() {
    const [ctaHover, setCtaHover] = useState(false);
    const [heroState, setHeroState] = useState("problem");
    const [inputValue, setInputValue] = useState("");
    const [showToast, setShowToast] = useState(false);

    const currentState = HERO_STATES[heroState];

    const handleTabChange = (stateKey) => {
        setHeroState(stateKey);
        setShowToast(false);
    };

    const handleMockSubmit = () => {
        setShowToast(true);
    };

    return (
        <section className="hero" id="top">
            <Container>
                <p className="eyebrow center">Ban Công Nghệ · BCN</p>
                <h1>
                    Bạn thích công nghệ,
                    <br />
                    mà chưa biết <span className="text-highlight">bắt đầu từ đâu?</span>
                </h1>
                <p className="lead">
                    Không sao đâu. Ở BCN, không ai bắt bạn phải giỏi trước rồi mới được làm. Cứ thử một việc nhỏ xíu trước đã, rồi mình tính tiếp.
                </p>

                <div className="hero-ctas">
                    <a
                        className="btn btn-primary"
                        id="heroCta"
                        href="#huong-di"
                        onMouseEnter={() => setCtaHover(true)}
                        onMouseLeave={() => setCtaHover(false)}
                        onFocus={() => setCtaHover(true)}
                        onBlur={() => setCtaHover(false)}
                    >
                        <span className="btn-label">
                            {ctaHover ? "Thử đi, không mất gì đâu" : "Tìm hướng của bạn"}
                        </span>
                        <span className="arr">→</span>
                    </a>
                    <a className="btn btn-ghost" href="#du-an">
                        Xem tụi mình đã làm gì
                    </a>
                </div>

                <div className="hero-window window">
                    <div className="win-bar">
                        <i />
                        <i />
                        <i />
                        <b>BCN · nộp bài thử</b>
                    </div>

                    <div className="win-tabs" role="tablist" aria-label="Ba trạng thái của một tính năng">
                        {Object.values(HERO_STATES).map((state) => (
                            <button
                                key={state.id}
                                className="win-tab"
                                role="tab"
                                type="button"
                                aria-selected={heroState === state.id}
                                onClick={() => handleTabChange(state.id)}
                            >
                                {state.tabTitle}
                            </button>
                        ))}
                    </div>

                    <div className="win-body">
                        <div className="mock">
                            <label htmlFor="mockInput" id="mockLabel">
                                {currentState.label}
                            </label>
                            <input
                                id="mockInput"
                                type="text"
                                placeholder="VD: Bài tập tuần 1"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button
                                className={`mock-btn ${currentState.fixed ? "fixed" : ""}`}
                                id="mockBtn"
                                type="button"
                                onClick={handleMockSubmit}
                            >
                                {currentState.btn}
                            </button>
                            <p className="hint" id="mockHint">
                                {currentState.hint}
                            </p>
                        </div>
                        <div className={`toast ${showToast ? "show" : ""}`} id="mockToast" role="status">
                            {currentState.toast}
                        </div>
                    </div>

                    <p className="takeaway" id="mockTakeaway">
                        <b>{currentState.takeawayBold} </b>
                        {currentState.takeawayText}
                    </p>
                </div>
            </Container>
        </section>
    );
}
