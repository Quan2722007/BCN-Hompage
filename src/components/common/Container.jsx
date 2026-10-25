export function Container({ children, className = "" }) {
    return <div className={`wrap ${className}`.trim()}>{children}</div>;
}
