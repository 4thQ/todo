export function date() {
  const today = new Date().toLocaleDateString();
  document.querySelector(".name-title").innerText = today;
}
