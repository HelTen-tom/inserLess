import { data } from "./db.js";
import { createCards } from "./helpers/createCards.js";
import { refs } from "./refs.js";

const list = createCards(data);
refs.listEl.innerHTML = list.join("");

const listsEl=refs.listEl.querySelectorAll('.list-item');
console.log(listsEl);
// listsEl.forEach((e)=>{
//   e.addEventListener('click',()=>e.classList.add('actve'))
// })