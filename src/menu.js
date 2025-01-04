import mCheck from "/home/nirajan/Resturant/images/check.png";

export function menu() {
  const content = document.querySelector("#content");

  const menuContent = document.createElement("div");
  menuContent.classList.add("menuContent");
  content.appendChild(menuContent);
  // header
  const menuHeader = document.createElement("div");
  menuHeader.classList.add("menuHeader");
  menuContent.appendChild(menuHeader);

  const specialMenu = document.createElement("p");
  specialMenu.classList.add("specialMenu");
  specialMenu.innerHTML = "Special Selections";

  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menuTitle");
  menuTitle.textContent = "DELICIOUS MENU";

  menuHeader.append(specialMenu, menuTitle);
  // body
  const menuBody = document.createElement("div");
  menuBody.classList.add("menuBody");
  menuContent.append(menuBody);

  const box1 = document.createElement("div");
  const checkImg = document.createElement("img");
  checkImg.src = mCheck;
  box1.classList.add("box1");
  box1.innerHTML =
    "<p1>Starters</p1>  <pre>Sukuti Chatpate               45 </pre> <pre>Dopoki                             45 </pre><pre>Pani Puri                          40 </pre> <br><br> <p1>Main</p1><pre>Traditional Momo              65 </pre> <pre>Mt Everset Thali Set         95 </pre><pre>Kathmandu Chowmein     85 </pre><pre>Sukuti                                25 </pre> <pre>Samosa Chat                    45 </pre> <pre>Chicken Curry                   75 </pre><pre>Dal, Bhat & Tarkari            95 </pre> <br> <br><button class= bookTableBtn2>Book a table</button>";

  menuBody.append(box1);
}
