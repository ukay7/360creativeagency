(function () {
    try {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-bs-theme", "dark");
    } catch (e) {
        document.documentElement.setAttribute("data-bs-theme", "dark");
    }
})();
