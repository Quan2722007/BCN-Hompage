export function Button({
    children,
    href,
    variant = "primary",
    size = "",
    arrow = false,
    className = "",
    onClick,
    ...props
}) {
    const classNames = [
        "btn",
        variant === "primary" ? "btn-primary" : "btn-ghost",
        size === "sm" ? "btn-sm" : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    const content = (
        <>
            {children}
            {arrow && <span className="arr">→</span>}
        </>
    );

    if (href) {
        return (
            <a href={href} className={classNames} onClick={onClick} {...props}>
                {content}
            </a>
        );
    }

    return (
        <button type="button" className={classNames} onClick={onClick} {...props}>
            {content}
        </button>
    );
}
