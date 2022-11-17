const sectionBtn = document.getElementById("new-section-btn");
const main = document.getElementById("main");

sectionBtn.addEventListener("click", () => {
    const section = document.createElement("section");
    document.body.appendChild(section);
});