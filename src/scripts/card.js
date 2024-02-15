//Функция создания карточки
export function createCard(cardDetails, cardTemplate, deleteCard, likeCard, openImage) {
  const cardElement = getCardTemplate(cardTemplate);
  const cardImage = cardElement.querySelector(".card__image");
  cardImage.src = cardDetails.link;
  cardImage.alt = cardDetails.name;
  cardElement.querySelector(".card__title").textContent = cardDetails.name;

  cardElement.querySelector(".card__delete-button").addEventListener("click", deleteCard);
  cardElement.querySelector(".card__like-button").addEventListener("click", likeCard);
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
export function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}
