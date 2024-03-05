import "../pages/index.css";
import { initialCards } from "./cards.js";
import { createCard, deleteCard, likeCard } from "./card.js";
import { openPopup, closePopup } from "./popup.js";
import { enableValidation, clearValidation } from "./validation.js";
import { getProfileData } from "./api.js";

const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const cardsList = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileImage = document.querySelector(".profile__image-img");

//Модальные окна
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupAddCard = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");

const popupImg = popupImage.querySelector(".popup__image");
const popupCaption = popupImage.querySelector(".popup__caption");

//Формы
const profileEditForm = popupEditProfile.querySelector(".popup__form");
const newCardForm = popupAddCard.querySelector(".popup__form");

//Настройки валидации
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  inputErrorClassActive: "popup__input-error_active",
  errorClass: "popup__error_visible",
};

// Вывести карточки на страницу
initialCards.forEach((item) => {
  cardsList.append(createCard(item, cardTemplate, deleteCard, likeCard, openImage));
});

//Вывод информации о пользователе
getProfileData()
  .then((data) => {
    profileTitle.textContent = data.name;
    profileDescription.textContent = data.about;
    profileImage.alt = data.name;
    profileImage.src = data.avatar;
  })
  .catch((err) => {
    alert(err); // выводим ошибку
  });

//Функция открытия изображения
function openImage(evt) {
  if (!evt.target.classList.contains("card__delete-button")) {
    const card = evt.target.closest(".places__item");
    const cardImage = card.querySelector(".card__image");
    const cardTitle = card.querySelector(".card__title").textContent;

    popupImg.src = cardImage.src;
    popupImg.alt = cardImage.alt;
    popupCaption.textContent = cardTitle;
    openPopup(popupImage);
  }
}

//Функция редактирования профиля
function handleFormCreateSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = evt.target.name.value;
  profileDescription.textContent = evt.target.description.value;
  closePopup(evt.target.closest(".popup"));
}

//Функция добавления карточки через форму
function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const cardInfo = {
    name: evt.target["place-name"].value,
    link: evt.target.link.value,
  };
  cardsList.prepend(createCard(cardInfo, cardTemplate, deleteCard, likeCard, openImage));
  evt.target.closest("form").reset();
  closePopup(evt.target.closest(".popup"));
  clearValidation(newCardForm, validationConfig);
}

//Отслеживание клика по редактированию профиля
profileEditButton.addEventListener("click", () => {
  clearValidation(profileEditForm, validationConfig);
  openPopup(popupEditProfile);
  profileEditForm.name.value = profileTitle.textContent;
  profileEditForm.description.value = profileDescription.textContent;
});

//Отслеживание клика по добавлению карточки
profileAddButton.addEventListener("click", () => {
  openPopup(popupAddCard);
});

//Отслеживание отправки формы редактирования профиля
profileEditForm.addEventListener("submit", handleFormCreateSubmit);

//Отслеживание отправки формы на добавление карточки
newCardForm.addEventListener("submit", handleFormAddSubmit);

//Валидация форм

enableValidation(validationConfig);
