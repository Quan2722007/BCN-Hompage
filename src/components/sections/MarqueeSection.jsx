export function MarqueeSection() {
    const words = ["HỌC", "LÀM", "PHẢN HỒI", "CẢI THIỆN", "CHIA SẺ"];

    // Lặp lại cụm từ để mỗi nhóm chữ dài hơn màn hình lớn nhất (4K/ultrawide)
    // Giúp hiệu ứng chạy vô tận mượt mà, không bị hụt khoảng trống và không giật lag khi lặp lại
    const repeatedWords = Array(8).fill(words).flat();

    return (
        <div className="marquee" aria-hidden="true">
            <div className="marquee-track" id="marqueeTrack">
                <div className="marquee-group">
                    {repeatedWords.map((word, idx) => (
                        <span key={`g1-${idx}`}>
                            {word} <b>✦</b>
                        </span>
                    ))}
                </div>
                <div className="marquee-group" aria-hidden="true">
                    {repeatedWords.map((word, idx) => (
                        <span key={`g2-${idx}`}>
                            {word} <b>✦</b>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
