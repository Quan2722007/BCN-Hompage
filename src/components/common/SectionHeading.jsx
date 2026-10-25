export function SectionHeading({
    eyebrow,
    title,
    lead,
    center = false,
    className = "",
    reveal = true,
}) {
    return (
        <div className={`sec-head ${center ? "center" : ""} ${reveal ? "reveal" : ""} ${className}`.trim()}>
            {eyebrow && <p className={`eyebrow ${center ? "center" : ""}`}>{eyebrow}</p>}
            <h2>{title}</h2>
            {lead && <p className={`lead ${center ? "center" : ""}`}>{lead}</p>}
        </div>
    );
}
