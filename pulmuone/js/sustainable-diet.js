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


    // 메인 페이지와 동일한 스크롤 페이드업 효과
    const revealTargets = document.querySelectorAll([
        ".sustainable-visual .sub-inner",
        ".sustainable-section .sustainable-heading",
        ".sustainable-benefit",
        ".sustainable-habits-section .sustainable-heading",
        ".sustainable-habit",
        ".sustainable-guidelines-section .sustainable-heading",
        ".sustainable-guide-image"
    ].join(", "));

    revealTargets.forEach((element) => element.classList.add("scroll-reveal"));

    if (!("IntersectionObserver" in window)) {
        revealTargets.forEach((element) => element.classList.add("is-visible"));
    } else {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        }, {
            threshold: 0.08,
            rootMargin: "0px 0px -48px 0px"
        });

        revealTargets.forEach((element) => revealObserver.observe(element));
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