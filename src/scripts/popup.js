import { createCard, deleteCard, likeCard } from "./card";

//Функция открытия модального окна
export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  popup.addEventListener("click", clickClosePopup);
  document.addEventListener("keydown", escapeClosePopup);
}

//Функция закрытия модального окна
export function closePopup(activePopup) {
  activePopup.classList.remove("popup_is-opened");
  activePopup.removeEventListener("click", clickClosePopup);
  document.removeEventListener("keydown", escapeClosePopup);
}

//Закрытие окна при клике на крестик или оверлей
function clickClosePopup(evt) {
  if (!evt.target.closest(".popup__content") || evt.target.classList.contains("popup__close")) {
    const activePopup = document.querySelector(".popup_is-opened");
    closePopup(activePopup);
  }
}

//Закрытие окна при нажатии клавиши Esc
function escapeClosePopup(evt) {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_is-opened");
    closePopup(activePopup);
  }
}