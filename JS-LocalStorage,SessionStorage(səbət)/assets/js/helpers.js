export function setDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  export function getDataFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}