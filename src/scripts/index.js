import "../pages/index.css";
import { createCard, removeCardFromDOM, likeCard } from "./card.js";
import { openPopup, closePopup } from "./popup.js";
import { enableValidation, clearValidation } from "./validation.js";
import { getProfileData, getCards, setProfile, setCard, changeAvatar, removeCard } from "./api.js";

const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const changeAvatarButton = document.querySelector(".profile__image");
const cardsList = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileImage = document.querySelector(".profile__image-img");
const popupConfirmButton = document.querySelector(".popup__button_confirm");
let idCardForDelete = "";
let cardForDelete = "";

//Модальные окна
const popupEditProfile = document.querySelector(".popup_type_edit");
const popupAddCard = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");
const popupAvatar = document.querySelector(".popup_type_change_avatar");
const popupConfirm = document.querySelector(".popup_type_confirm");
const popupError = document.querySelector(".popup_type_error");

const popupErrorTitle = popupError.querySelector(".popup__title");
const popupImg = popupImage.querySelector(".popup__image");
const popupCaption = popupImage.querySelector(".popup__caption");

//Формы
const profileEditForm = popupEditProfile.querySelector(".popup__form");
const newCardForm = popupAddCard.querySelector(".popup__form");
const popupAvatarForm = popupAvatar.querySelector(".popup__form");

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

//Вывод карточки и информации о пользователе
Promise.all([getProfileData(), getCards()])
  .then(([profile, cards]) => {
    profileTitle.textContent = profile.name;
    profileDescription.textContent = profile.about;
    profileImage.alt = profile.name;
    profileImage.src = profile.avatar;

    cards.forEach((card) => {
      cardsList.append(createCard(card, profile._id, cardTemplate, deleteCard, likeCard, openImage));
    });
  })
  .catch((error) => {
    openPopup(popupError);
    popupErrorTitle.textContent = error;
  });

// Функция процесса сохранения
function renderLoading(isLoading, button) {
  if (isLoading) {
    button.textContent = "Сохранение...";
  } else if (!isLoading) {
    button.textContent = "Сохранить";
  }
}

//Функция открытия изображения
function openImage(evt, cardDetails) {
  if (!evt.target.classList.contains("card__delete-button")) {
    popupImg.src = cardDetails.link;
    popupImg.alt = cardDetails.name;
    popupCaption.textContent = cardDetails.name;
    openPopup(popupImage);
  }
}

//Функция редактирования профиля
function handleFormCreateSubmit(evt) {
  evt.preventDefault();

  renderLoading(true, evt.submitter);
  setProfile(evt.target.name.value, evt.target.description.value)
    .then((profile) => {
      profileTitle.textContent = profile.name;
      profileDescription.textContent = profile.about;
      closePopup(evt.target.closest(".popup"));
      clearValidation(newCardForm, validationConfig);
    })
    .catch((error) => {
      openPopup(popupError);
      popupErrorTitle.textContent = error;
    })
    .finally(() => {
      renderLoading(false, evt.submitter);
    });
}

//Функция добавления карточки через форму
function handleFormAddSubmit(evt) {
  evt.preventDefault();

  renderLoading(true, evt.submitter);
  setCard(evt.target["place-name"].value, evt.target.link.value)
    .then((card) => {
      cardsList.prepend(createCard(card, card.owner._id, cardTemplate, deleteCard, likeCard, openImage));
      evt.target.closest("form").reset();
      closePopup(evt.target.closest(".popup"));
      clearValidation(newCardForm, validationConfig);
    })
    .catch((error) => {
      openPopup(popupError);
      popupErrorTitle.textContent = error;
    })
    .finally(() => {
      renderLoading(false, evt.submitter);
    });
}

//Функция редактирования аватара
function handleChangeAvatar(evt) {
  evt.preventDefault();

  renderLoading(true, evt.submitter);
  changeAvatar(evt.target.link.value)
    .then((res) => {
      profileImage.src = res.avatar;
      evt.target.closest("form").reset();
      closePopup(popupAvatar);
      clearValidation(popupAvatarForm, validationConfig);
    })
    .catch((error) => {
      openPopup(popupError);
      popupErrorTitle.textContent = error;
    })
    .finally(() => {
      renderLoading(false, evt.submitter);
    });
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

popupAvatarForm.addEventListener("submit", handleChangeAvatar);

//Отслеживание клика по редактированию аватара
changeAvatarButton.addEventListener("click", () => {
  openPopup(popupAvatar);
});

//Отслеживание клика по кнопке "Ок" в попапе ошибки
popupError.querySelector(".popup__button_error").addEventListener("click", () => {
  closePopup(popupError);
});

function deleteCard(cardDetails, evt) {
  cardForDelete = evt.target.closest(".card");
  idCardForDelete = cardDetails._id;
  openPopup(popupConfirm);
}

popupConfirmButton.addEventListener("click", () => {
  removeCard(idCardForDelete)
    .then((res) => {
      removeCardFromDOM(cardForDelete);
      closePopup(popupConfirm);
    })
    .catch((error) => {
      openPopup(popupError);
      popupErrorTitle.textContent = error;
    });
});

//Валидация форм
enableValidation(validationConfig);
