import "./styles.css";
import { homepage } from "./homepage";
import { menu } from "./menu";
import { contact } from "./contact";

homepage();

const content = document.getElementById("content");
const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const contactBtn = document.querySelector(".contactBtn");

homeBtn.addEventListener("click", () => {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  homepage();
});

menuBtn.addEventListener("click", () => {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  menu();
});

contactBtn.addEventListener("click", () => {
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  contact();
});
