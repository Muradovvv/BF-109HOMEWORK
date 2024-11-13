const textElement = document.getElementById("text");
const increaseFontButton = document.getElementById("increase-font");
const decreaseFontButton = document.getElementById("decrease-font");
const colorPicker = document.getElementById("color-picker");
const applyColorButton = document.getElementById("apply-color");

increaseFontButton.addEventListener("click", () => {
  const currentSize = parseFloat(window.getComputedStyle(textElement).fontSize);
  textElement.style.fontSize = `${currentSize + 3}px`;
});

decreaseFontButton.addEventListener("click", () => {
  const currentSize = parseFloat(window.getComputedStyle(textElement).fontSize);
  textElement.style.fontSize = `${Math.max(currentSize - 3, 12)}px`;
});

applyColorButton.addEventListener("click", () => {
  const selectedColor = colorPicker.value;
  textElement.style.color = selectedColor;
});
