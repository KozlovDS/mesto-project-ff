import "../pages/index.css";
import { initialCards } from "./cards.js";

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");

// @todo: Функция создания карточки
function creatCard(cardDetails, deleteCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = cardDetails.link;
  cardImage.alt = cardDetails.name;
  cardElement.querySelector(".card__title").textContent = cardDetails.name;

  cardElement.querySelector(".card__delete-button").addEventListener("click", () => {
    deleteCard(cardElement);
  });

  return cardElement;
}

// @todo: Функция удаления карточки
const deleteCard = function (cardElement) {
  cardElement.remove();
};

// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
  placesList.append(creatCard(item, deleteCard));
});
