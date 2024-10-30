let EvenSum = 0;
let OddSum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    EvenSum += i; //  cüt ədədlərin cəmi
  } else {
    OddSum += i; //  tek ededlerin cemi
  }
}

console.log("tək ədədlərin cəmi:", OddSum);
console.log("cüt ədədlərin cəmi:", EvenSum);
