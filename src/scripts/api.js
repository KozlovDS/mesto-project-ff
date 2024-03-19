const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-8",
  headers: {
    authorization: "ef200405-8bbd-4a02-a348-e756c5a720fe",
    "Content-Type": "application/json",
  },
};

async function getResponseData(res, textMessage) {
  if (!res.ok) {
    return await Promise.reject(`Ошибка: ${res.status}. ${textMessage}`);
  }
  return await res.json();
}

export async function getProfileData() {
  const res = await fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  });
  return getResponseData(res, "Не удалось получить данные о пользователе");
}

export async function getCards() {
  const res = await fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  });
  return getResponseData(res, "Не удалось получить карточки");
}

export async function setProfile(name, about) {
  const res = await fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  });
  return getResponseData(res, "Не удалось обновить информацию о пользователе");
}

export async function setCard(name, link) {
  const res = await fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  });
  return getResponseData(res, "Не удалось добавить карточку");
}

export async function removeCard(cardId) {
  const res = await fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  });
  return getResponseData(res, "Не удалось удалить карточку");
}

export async function addLikeCard(cardId) {
  const res = await fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  });
  return getResponseData(res, "Не удалось лайкнуть карточку");
}

export async function deleteLikeCard(cardId) {
  const res = await fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  });
  return getResponseData(res, "Не удалось удалить карточку");
}

export async function changeAvatar(link) {
  const res = await fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: link,
    }),
  });
  return getResponseData(res, "Не удалось обновить аватар");
}
