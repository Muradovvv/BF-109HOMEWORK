for (let num = 2; num <= 100; num++) {
    let simple = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            simple = false;   
            break;
        }
    }

    // eger sadedirse ededi cap Et 
    if (simple) {
        console.log(num);
    }
}
let isPrime = true;
for (let i = 2; i < Math.sqrt(n); i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}

