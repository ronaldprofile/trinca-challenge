import { IUser } from "../types/user";

export function setUserLocalStorage(user: IUser | null) {
  localStorage.setItem("trinca-user", JSON.stringify(user));
}

export function getUserLocalStorage() {
  const JSON_DATA = localStorage.getItem("trinca-user");

  if (!JSON_DATA) {
    return null;
  }

  const userStorage = JSON.parse(JSON_DATA);
  return userStorage ?? null;
}
