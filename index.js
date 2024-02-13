import { data } from "./db.js";
import { createCards } from "./helpers/createCards.js";
import { refs } from "./refs.js";

const list = createCards(data);
console.log(list);
refs.listEl.insertAdjacentHTML("beforeend", list.join(""));

const listEl = refs.listEl.querySelectorAll(".list-item");
console.log(listEl);
refs.listEl.addEventListener("click", (e) => {
  const card = e.target.closest(".list-item");
  if (!card) {
    return;
  }
  card.classList.toggle("active");
 
});
// console.log(document.querySelector("li").dataset);
