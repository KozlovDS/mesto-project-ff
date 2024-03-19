import { addLikeCard, deleteLikeCard } from "./api";

//Функция создания карточки
export function createCard(cardDetails, profileId, cardTemplate, deleteCard, likeCard, openImage) {
  const cardElement = getCardTemplate(cardTemplate);
  const cardImage = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardLikeCounter = cardElement.querySelector(".card__like-counter");
  const cardButton = cardElement.querySelector(".card__delete-button");

  cardImage.src = cardDetails.link;
  cardImage.alt = cardDetails.name;
  cardElement.querySelector(".card__title").textContent = cardDetails.name;
  cardLikeCounter.textContent = cardDetails.likes.length;

  if (cardDetails.owner._id !== profileId) {
    cardButton.remove();
  } else {
    cardElement.querySelector(".card__delete-button").addEventListener("click", (evt) => {
      deleteCard(cardDetails, evt);
    });
  }

  if (cardDetails.likes.length > 0) {
    // Проверка есть ли лайки на карточке
    if (checkLikeCard(cardDetails.likes, profileId)) {
      cardLikeButton.classList.add("card__like-button_is-active"); //если карточка лайкнута мной окрашиваем ее
    }
  }

  cardLikeButton.addEventListener("click", (evt) => {
    if (cardLikeButton.classList.contains("card__like-button_is-active")) {
      removeLikeCard(evt, cardDetails._id);
    } else {
      likeCard(evt, cardDetails._id);
    }
  });

  cardImage.addEventListener("click", (evt) => {
    openImage(evt, cardDetails);
  });

  return cardElement;
}

//Функция клонирования шаблона
function getCardTemplate(cardTemplate) {
  return cardTemplate.querySelector(".card").cloneNode(true);
}

// Функция удаления карточки из DOM
export function removeCardFromDOM(card) {
  card.classList.add("delete-card");
  setTimeout(() => {
    card.remove();
  }, 300);
}

//Лайк карточки
export function likeCard(evt, cardId) {
  addLikeCard(cardId)
    .then((res) => {
      evt.target.closest(".card__like").querySelector(".card__like-counter").textContent = res.likes.length;
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
      evt.target.closest(".card__like").querySelector(".card__like-counter").textContent = res.likes.length;
      evt.target.classList.remove("card__like-button_is-active");
    })
    .catch((err) => {
      console.log(err);
    });
}
