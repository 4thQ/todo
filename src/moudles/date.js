import { format } from "date-fns";

export function date() {
  const today = new Date().toLocaleDateString();

  const formatedDate = format(today, "yyyy-MM-dd");
  document.querySelector(".name-title").innerText = formatedDate;
}
