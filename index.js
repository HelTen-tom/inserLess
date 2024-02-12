import { data } from "./db.js";
import { createCards } from "./helpers/createCards.js";
import { refs } from "./refs.js";

const list = createCards(data);
refs.listEl.innerHTML = list.join("");

refs.listEl.addEventListener("click", (e) => {
  const card = e.target.closest(".list-item");
  if (!card) {
    return;
  }
  card.classList.toggle("active");
});
console.log(document.querySelector("li").dataset);
