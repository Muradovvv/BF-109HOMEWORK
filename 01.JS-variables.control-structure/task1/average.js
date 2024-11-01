let a = +prompt("a = ");

let b = 0;
let sum = 0;
let mult = 1;

if (a >= 100 && a <= 999) {
  while (a > 0) {
    b = a % 10;
    sum += a % 10;
    mult *= a % 10;
    a = (a - (a % 10)) / 10;
  }
  console.log("Ededler cemi = " + sum);
  console.log("Ededler hasili = " + mult);
  console.log("Cemin ededi ortasi = " + sum / 3);
} else {
  console.log("Eded 3 reqemli ve ya musbet deyil");
}
