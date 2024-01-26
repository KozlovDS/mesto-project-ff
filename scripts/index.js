// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");

// @todo: Функция создания карточки
function creatCard(cardDetails) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").src = cardDetails.link;
  cardElement.querySelector(".card__title").textContent = cardDetails.name;

  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", () => {
      cardElement.remove();
    });

  return cardElement;
}

// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
  placesList.append(creatCard(item));
});
