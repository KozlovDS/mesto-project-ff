//Функция открытия модального окна
export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  popup.addEventListener("mousedown", clickOverlayClosePopup);
  popup.querySelector(".popup__close").addEventListener("click", clickClosePopup);
  document.addEventListener("keydown", escapeClosePopup);
}

//Функция закрытия модального окна
export function closePopup(activePopup) {
  activePopup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", escapeClosePopup);
}

//Закрытие окна при клике на оверлей
function clickOverlayClosePopup(evt) {
  if (!evt.target.closest(".popup__content")) {
    closePopup(evt.currentTarget);
  }
}

//Закрытие окна при клике на крестик
function clickClosePopup(evt) {
  closePopup(evt.target.closest(".popup_is-opened"));
}

//Закрытие окна при нажатии клавиши Esc
function escapeClosePopup(evt) {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_is-opened");
    closePopup(activePopup);
  }
}
