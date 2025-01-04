import mapApi from "/home/nirajan/Resturant/images/map.JPG";

export function contact() {
  const div = document.getElementById("content");

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contactDiv");

  div.appendChild(contactDiv);

  const rightDiv = document.createElement("div");
  rightDiv.classList.add("rightDiv");

  const leftDiv = document.createElement("div");
  leftDiv.classList.add("leftDiv");

  contactDiv.append(rightDiv, leftDiv);

  //right div

  const rightTitle = document.createElement("div");
  rightTitle.classList.add("rightTitle");
  rightTitle.innerHTML =
    "<h>Online Reservation</h> <br><p>Booking request +44 252 311711 or fill out the order form.</p>";

  const rightBody = document.createElement("div");
  rightBody.classList.add("rightBody");

  rightDiv.append(rightTitle, rightBody);

  const rightBox1 = document.createElement("div");
  rightBox1.classList.add("rightBox1");
  rightBox1.innerHTML =
    "<input placeholder = FIRSTNAME></input><input placeholder = LASTNAME></input>";

  const rightBox2 = document.createElement("div");
  rightBox2.classList.add("rightBox2");
  rightBox2.innerHTML =
    "<input placeholder = PHONENUMBER></input ><input placeholder = TIME></input><input placeholder = GUESTNO.></input>";

  const rightBox3 = document.createElement("div");
  rightBox3.classList.add("rightBox3");
  rightBox3.innerHTML = "<input placeholder = ></input>";

  const rightBox4 = document.createElement("div");
  rightBox4.classList.add("rightBox4");
  rightBox4.innerHTML = "<button>BOOK NOW</button>";

  rightBody.append(rightBox1, rightBox2, rightBox3, rightBox4);
  //left div

  const leftTop = document.createElement("div");
  leftTop.classList.add("leftTop");
  leftTop.innerHTML =
    "<br><br><h4>FIND US</h4> <br> <strong>Location </strong> <br> <p>Aldershot <br> 108 Victoria Rd, <br> GU11 1JX</p>" +
    "<br><br> <p> Lunchtime <br> Monday to Sunday <br> 11.00 am - 2.30pm </p>" +
    "<br><br><p>Dinner time <br> Monday to Sunday <br> 05.00pm - 10.00pm</p>";

  const leftBottom = document.createElement("div");
  leftBottom.classList.add("leftBottom");
  const map = document.createElement("img");
  map.classList.add("mapApi");
  map.src = mapApi;

  leftBottom.append(map);

  leftDiv.append(leftTop, leftBottom);
}
