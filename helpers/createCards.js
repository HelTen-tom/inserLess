import { createCard } from "../createCard.js";
export function createCards(data) {
  return data.map(createCard) 
  }
