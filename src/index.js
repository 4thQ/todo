import "./styles.css";
import { Dialog } from "./moudles/dom";
import { date } from "./moudles/date";
import { loadFromLocalStorage } from "./moudles/render";

document.addEventListener("DOMContentLoaded", () => {
  loadFromLocalStorage();
  Dialog();
  date();
});
