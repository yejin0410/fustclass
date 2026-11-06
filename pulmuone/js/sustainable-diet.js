/* 지속가능 식생활 페이지: 섹션 바로가기 현재 위치 및 언어 선택 표시 */
document.addEventListener("DOMContentLoaded", () => {
    const tabLinks = Array.from(document.querySelectorAll(".sustainable-tabs a"));
    const sections = tabLinks
        .map((link) => document.querySelector(link.getAttribute("href")))
        .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                tabLinks.forEach((link) => {
                    const active = link.getAttribute("href") === "#" + entry.target.id;
                    link.classList.toggle("is-active", active);
                    if (active) link.setAttribute("aria-current", "location");
                    else link.removeAttribute("aria-current");
                });
            });
        }, { rootMargin: "-25% 0px -60% 0px", threshold: 0 });
        sections.forEach((section) => sectionObserver.observe(section));
    }

    const languageButtons = document.querySelectorAll(".language-button");
    languageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            languageButtons.forEach((item) => {
                const selected = item === button;
                item.classList.toggle("current", selected);
                item.setAttribute("aria-pressed", String(selected));
            });
        });
    });
});