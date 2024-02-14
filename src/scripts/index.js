import "../pages/index.css";
import { initialCards } from "./cards.js";
import { createCard, deleteCard, likeCard, openImage } from "./card.js";
import { openPopup, handleFormAddSubmit, handleFormCreateSubmit } from "./popup.js";

//Кнопки открытия модальных окон
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const cardsList = document.querySelector(".places__list");

//Модальные окна
const editPopup = document.querySelector(".popup_type_edit");
const addCardPopup = document.querySelector(".popup_type_new-card");

//Формы
const profileEditForm = editPopup.querySelector(".popup__form");
const newCardForm = addCardPopup.querySelector(".popup__form");

// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
  cardsList.append(createCard(item, deleteCard, likeCard, openImage));
});

//Отслеживание клика по редактированию профиля
profileEditButton.addEventListener("click", () => {
  openPopup(editPopup);
  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");
  profileEditForm.name.value = profileTitle.textContent;
  profileEditForm.description.value = profileDescription.textContent;
});

//Отслеживание клика по добавлению карточки
profileAddButton.addEventListener("click", () => {
  openPopup(addCardPopup);
});

//Отслеживание отправки формы редактирования профиля
profileEditForm.addEventListener("submit", handleFormCreateSubmit);

//Отслеживание отправки формы на добавление карточки
newCardForm.addEventListener("submit", handleFormAddSubmit);
