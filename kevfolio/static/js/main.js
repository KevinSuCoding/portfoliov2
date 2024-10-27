// Select all section IDs and table of contents links
const sections = document.querySelectorAll("section");
const tocLinks = document.querySelectorAll(".toc ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    tocLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
