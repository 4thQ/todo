export function homepage() {
  const content = document.querySelector("#content");

  const container = document.createElement("div");
  container.classList.add("container");

  const h1 = document.createElement("h1");
  h1.classList.add("title");
  h1.innerText = "Delicious Inspiring Flavors By the Mt Everest";

  const p = document.createElement("p");
  p.classList.add("sub-title");
  p.innerText = "Come with family & feel the joy of mouth watering food.";

  const bookTableBtn = document.createElement("button");
  bookTableBtn.classList.add("bookTableBtn");
  bookTableBtn.innerText = "BOOK A TABLE";

  container.append(h1, p, bookTableBtn);
  content.appendChild(container);
}
