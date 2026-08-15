import { useEffect } from "react";

export default function ThemeRouteSync() {
    useEffect(() => {
        const html = document.documentElement;
        html.setAttribute("data-bs-theme", "dark");
        try {
            localStorage.setItem("theme", "dark");
        } catch {
            /* ignore */
        }
    }, []);

    return null;
}
