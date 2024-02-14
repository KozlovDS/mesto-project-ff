import { createCard, deleteCard, likeCard, openImage } from "./card";

//Функция открытия модального окна
export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  popup.addEventListener("click", clickClosePopup);
  document.addEventListener("keydown", escapeClosePopup);
}

//Функция закрытия модального окна
export function closePopup() {
  const activePopup = document.querySelector(".popup_is-opened");
  activePopup.classList.remove("popup_is-opened");
  activePopup.removeEventListener("click", clickClosePopup);
  document.removeEventListener("keydown", escapeClosePopup);
}

//Закрытие окна при клике на крестик или оверлей
function clickClosePopup(evt) {
  if (!evt.target.closest(".popup__content") || evt.target.classList.contains("popup__close")) {
    closePopup();
  }
}

//Закрытие окна при нажатии клавиши Esc
function escapeClosePopup(evt) {
  if (evt.key === "Escape") {
    closePopup();
  }
}

//Функция редактирования профиля
export function handleFormCreateSubmit(evt) {
  evt.preventDefault();
  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");
  profileTitle.textContent = evt.target.name.value;
  profileDescription.textContent = evt.target.description.value;
  closePopup();
}

//Функция добавления карточки через форму
export function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const cardInfo = {
    name: evt.target["place-name"].value,
    link: evt.target.link.value,
  };
  document.querySelector(".places__list").prepend(createCard(cardInfo, deleteCard, likeCard, openImage));
  evt.target["place-name"].value = "";
  evt.target.link.value = "";
  closePopup();
}
