function calculate(operation) {
  const value1 = parseFloat(document.getElementById("value1").value);
  const value2 = parseFloat(document.getElementById("value2").value);
  let result = 0;

  if (isNaN(value1) || isNaN(value2)) {
    alert("Ədəd daxil edin.");
    return;
  }

  switch (operation) {
    case "add":
      result = value1 + value2;
      break;
    case "subtract":
      result = value1 - value2;
      break;
    case "multiply":
      result = value1 * value2;
      break;
    case "divide":
      if (value2 === 0) {
        alert("!ERROR! 0-a bölmək mümkün deyil.");
        return;
      }
      result = value1 / value2;
      break;
    default:
      alert("Əməliyyat düzgün deyil.");
      return;
  }
  document.getElementById("result").innerText = result;
}
function reset() {
  document.getElementById("value1").value = "";
  document.getElementById("value2").value = "";
  document.getElementById("result").innerText = "0";
}
