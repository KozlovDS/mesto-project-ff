import { removeCard, addLikeCard, deleteLikeCard } from "./api";
import { closePopup, openPopup } from "./popup";

//Функция создания карточки
export function createCard(cardDetails, profileId, cardTemplate, deleteCard, likeCard, openImage) {
  const cardElement = getCardTemplate(cardTemplate);
  const cardImage = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardLikeCounter = cardElement.querySelector(".card__like-counter");
  const cardButton = cardElement.querySelector(".card__delete-button");
  const popupConfirm = document.querySelector(".popup_type_confirm");

  cardImage.src = cardDetails.link;
  cardImage.alt = cardDetails.name;
  cardElement.querySelector(".card__title").textContent = cardDetails.name;
  cardLikeCounter.textContent = cardDetails.likes.length;

  if (cardDetails.owner._id !== profileId) {
    cardButton.style.display = "none";
  } else {
    cardElement.querySelector(".card__delete-button").addEventListener("click", (eventCardDeleteButton) => {
      openPopup(popupConfirm);
      popupConfirm.querySelector(".popup__button_confirm").addEventListener("click", (evt) => {
        removeCard(cardDetails._id)
          .then((res) => {
            deleteCard(eventCardDeleteButton);
            popupConfirm.querySelector(".popup__title").textContent = res.message;
            popupConfirm.querySelector(".popup__button").remove();
            setTimeout(() => {
              closePopup(popupConfirm);
            }, 1000);
          })
          .catch((err) => {
            popupConfirm.querySelector(".popup__title").textContent = err;
          });
      });
    });
  }

  if (cardDetails.likes.length > 0) {
    // Проверка есть ли лайки на карточке
    if (checkLikeCard(cardDetails.likes, profileId)) {
      cardLikeButton.classList.add("card__like-button_is-active"); //если карточка лайкнута мной окрашиваем ее
    }
  }

  cardLikeButton.addEventListener("click", (evt) => {
    if (checkLikeCard(cardDetails.likes, profileId)) {
      removeLikeCard(evt, cardDetails._id);
    } else {
      likeCard(evt, cardDetails._id);
    }
  });

  cardElement.querySelector(".card__image").addEventListener("click", openImage);

  return cardElement;
}

//Функция клонирования шаблона
function getCardTemplate(cardTemplate) {
  return cardTemplate.querySelector(".card").cloneNode(true);
}

// Функция удаления карточки
export function deleteCard(evt) {
  evt.target.closest(".card").classList.add("delete-card");
  setTimeout(() => {
    evt.target.closest(".card").remove();
  }, 300);
}

//Лайк карточки
export function likeCard(evt, cardId) {
  addLikeCard(cardId)
    .then((res) => {
      evt.target.nextElementSibling.textContent = res.likes.length;
      evt.target.classList.add("card__like-button_is-active");
    })
    .catch((err) => {
      console.log(err);
    });
}

// Функция проверки лайкнута ли карточка мной
function checkLikeCard(cardLikes, profileId) {
  return cardLikes.some((likes) => {
    return likes._id === profileId;
  });
}

//Удаление лайка
function removeLikeCard(evt, cardId) {
  deleteLikeCard(cardId)
    .then((res) => {
      evt.target.nextElementSibling.textContent = res.likes.length;
      evt.target.classList.remove("card__like-button_is-active");
    })
    .catch((err) => {
      console.log(err);
    });
}
