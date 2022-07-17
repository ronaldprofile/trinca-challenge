export function setLocalStorage(key: string, initialValue: any) {
  localStorage.setItem(key, JSON.stringify(initialValue));
}

export function getLocalStorage<T>(key: string) {
  const JSON_DATA = localStorage.getItem(key);

  if (!JSON_DATA) {
    return null;
  }

  const userStorage = JSON.parse(JSON_DATA) as T;
  return userStorage ?? null;
}
