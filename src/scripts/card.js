import { openPopup } from "./popup";

//Функция создания карточки
export function createCard(cardDetails, deleteCard, likeCard, openImage) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = cardDetails.link;
  cardImage.alt = cardDetails.name;
  cardElement.querySelector(".card__title").textContent = cardDetails.name;

  cardElement.querySelector(".card__delete-button").addEventListener("click", deleteCard);
  cardElement.querySelector(".card__like-button").addEventListener("click", likeCard);
  cardElement.querySelector(".card__image").addEventListener("click", openImage);

  return cardElement;
}

// Функция удаления карточки
export function deleteCard(evt) {
  evt.target.closest(".card").classList.add("delete-card");
  setTimeout(() => {
    evt.target.closest(".card").remove();
  }, 300);
}

//Лайк карточки
export function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

//Функция открытия изображения
export function openImage(evt) {
  if (!evt.target.classList.contains("card__delete-button")) {
    const card = evt.target.closest(".places__item");
    const cardImage = card.querySelector(".card__image");
    const cardTitle = card.querySelector(".card__title").textContent;
    const popupImage = document.querySelector(".popup_type_image");

    const popupImg = popupImage.querySelector(".popup__image");
    const popupCaption = popupImage.querySelector(".popup__caption");

    popupImg.src = cardImage.src;
    popupImg.alt = cardImage.alt;
    popupCaption.textContent = cardTitle;
    openPopup(popupImage);
  }
}
