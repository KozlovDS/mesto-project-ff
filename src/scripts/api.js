const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-8",
  headers: {
    authorization: "ef200405-8bbd-4a02-a348-e756c5a720fe",
    "Content-Type": "application/json",
  },
};

export async function getProfileData() {
  const res = await fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  });
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(`Ошибка: ${res.status}. Не удалось получить данные о пользователе`);
}
