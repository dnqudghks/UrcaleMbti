export function setLocalStorage(key, value, expirationInDays) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expirationInDays);
    localStorage.setItem(key, JSON.stringify({ value, expirationDate: expirationDate.getTime() }));
}

export function getLocalStorage(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expirationDate) {
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
}