// script.js

const body = document.querySelector("body"),
    toggle = document.querySelector(".toggle");

let getMode = localStorage.getItem("mode");
if (getMode === "dark") {
    body.classList.add("dark");
    toggle.classList.add("active");
}

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light");
    } else {
        localStorage.setItem("mode", "dark");
    }
    toggle.classList.toggle("active");
});
