const title = document.getElementById("title");
const changeBtn = document.getElementById("changeBtn");
const themeBtn = document.getElementById("themeBtn");
const bgBtn = document.getElementById("bgBtn");
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");
const greeting = document.getElementById("greeting");

let changed = false;


changeBtn.addEventListener("click", () => {
  title.classList.toggle("red");

  if (!changed) {

    title.textContent = "Text has changed!";
    changeBtn.textContent = "Reset";

  } 
  else {

    title.textContent = "Hello, Baby!";
    changeBtn.textContent = "Change Text & Color";
  }

  changed = !changed;
});

function applyTheme(theme) {
  document.body.classList.toggle("dark-mode", theme === "dark");
}

themeBtn.addEventListener("click", () => {

  const newTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
  localStorage.setItem("theme", newTheme);

  applyTheme(newTheme);
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);
});

bgBtn.addEventListener("click", () => {

  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
  document.body.style.backgroundColor = randomColor;
});


greetBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name) {
    greeting.textContent = `Hello, ${name}! Nice to see you.`;
  } 
  else {
    greeting.textContent = "Please enter your name.";
  }
});
