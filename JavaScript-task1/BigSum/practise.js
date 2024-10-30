// // task1
// let a = + prompt("Enter a:");
// let b = + prompt("Enter b:");
// let c = + prompt("Enter c:");
// let first, second;
// if (a >= b && a >= c) {
//   first = a;
//   if (b >= c) {
//     second = b;
//   } else {
//     second = c;
//   }
// } else if (b >= a && b >= c) {
//   first = b;
//   if (a >= c) {
//     second = a;
//   } else {
//     second = c;
//   }
// } else {
//   first = c;
//   if (a >= b) {
//     second = a;
//   } else {
//     second = b;
//   }
// }
// console.log(`big sum result ${second},and ${first}`);


// // task2
// let a = prompt("Birinci ədədi daxil edin:");
// let b = prompt("İkinci ədədi daxil edin:");
// let c = prompt("Üçüncü ədədi daxil edin:");

// // boyuku tapmag
// let number;
// if (a >= b && a >= c) {
//     number = a;
//     if (b >= c) {
//         number += b + c;
//     } else {
//         number += c + b;
//     }
// } else if (b >= a && b >= c) {
//     number = b;
//     if (a >= c) {
//         number += a + c;
//     } else {
//         number += c + a;
//     }
// } else {
//     number = c;
//     if (a >= b) {
//         number += a + b;
//     } else {
//         number += b + a;
//     }
// }

// // kiciyi tapmaq
// let number2;
// if (a <= b && a <= c) {
//     number2 = a;
//     if (b <= c) {
//         number2 += b + c;
//     } else {
//         number2 += c + b;
//     }
// } else if (b <= a && b <= c) {
//     number2 = b;
//     if (a <= c) {
//         number2 += a + c;
//     } else {
//         number2 += c + a;
//     }
// } else {
//     number2 = c;
//     if (a <= b) {
//         number2 += a + b;
//     } else {
//         number2 += b + a;
//     }
// }


// console.log("Big number:", number);
// console.log("Little number:", number2);

// // task3
// let katet1 = +prompt("Birinci kateti daxil edin:")
// let katet2 = +prompt("ikinci kateti daxil edin:")
// let hipotenuz = +prompt("Hipotenuzu daxil edin:")
// if(hipotenuz * hipotenuz === katet1 * katet1 + katet2 * katet2){
//   console.log(`Result:düzbucaqlı üçbucaqdır`);
// } else{
//   console.log(`Result:düzbcaqlı üçbucaq deyil`);
  
// }

// // task4

// let a = +prompt("Enter number: ");

// let n1 = 0;
// let n2 = 0;
// let n3 = 0;

// n3 = a % 10;
// a = Math.floor(a / 10);
// n2 = a % 10;
// a = Math.floor(a / 10);
// n1 = a;
//  console.log(n1 + ", " + n2 + ", " + n3);

// // task5
// let month = prompt("Ayın adını daxil edin:");
// switch (month) {
//     case "january":
//         console.log("january has 31 days.");
//         break;
//     case "february":
//         console.log("February has 28 days .");
//         break;
//     case "mart":
//         console.log("Mart has 31 days.");
//         break;
//     case "april":
//         console.log("April has 30 days.");
//         break;
//     case "may":
//         console.log("May has 31 days.");
//         break;
//     case "Iyun":
//         console.log("Iyun has 30 days.");
//         break;
//     case "iyul":
//         console.log("Iyul has 31 days.");
//         break;
//     case "august":
//         console.log("August has 31 days.");
//         break;
//     case "september":
//         console.log("September has 30 days.");
//         break;
//     case "oktyabr":
//         console.log("Oktyabr has 31 days.");
//         break;
//     case "nowember":
//         console.log("Nowember has 30 days.");
//         break;
//     case "december":
//         console.log("December has 31 days.");
//         break;
//     default:
//         console.log("Zehmet olmasa ay adını daxil edin ;");
// }