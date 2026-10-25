import { useScrollProgress } from "../../hooks/useScrollProgress";

export function ProgressBar() {
    const progress = useScrollProgress();

    return (
        <div
            className="progress"
            id="progress"
            style={{ width: `${progress}%` }}
            aria-hidden="true"
        />
    );
}
