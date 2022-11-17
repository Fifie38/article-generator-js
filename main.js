const sectionBtn = document.getElementById("new-section-btn");
const main = document.getElementById("main");
const sectionModel = document.getElementById("section-model");
const btn = document.getElementById("btn");
const counterShow = document.getElementById("counter");
let counter = 1

counterShow.innerHTML = counter;

sectionBtn.addEventListener("click", () => {
    const section = document.createElement("section");
    section.innerHTML = sectionModel.innerHTML;
    section.setAttribute('id', counter);
    main.appendChild(section);
    btn.href = "#"+counter;
    counterShow.innerHTML = counter;
    counter ++;
});

