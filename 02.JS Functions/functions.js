// TASK 1

// 1.Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən function.

// let b = +prompt("Ededi daxil et:");
// let a = +prompt("Quvveti daxil et:");
// function power(){
//   return Math.pow(a,b);
// }
// console.log(power(a,b));

// TASK 2

// 2.Bir funksiya yazın, 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəmsal arraydakı elementin hal-hazırda olduğu 3cü hansı mövqeyə hərəkət etmək lazımdır.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirir.
// Məsələn:
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// Gözlənilən Nəticə:
// [20, 30, 10, 40, 50]

// let array = [10, 20, 30, 40, 50];
// let number = [];
// function MoveElement(array, position, moving) {
//   if (
//     position < 0 ||
//     position >= array.length ||
//     moving < 0 ||
//     moving >= array.length
//   )
//     return array;

//   let move = array[position];
//   for (i = 0; i < array.length; i++) {
//     if (i == position) {
//       move = array[i];
//     } else if (i == moving) {
//       number.push(move);
//       number.push(array[i]);
//     } else [number.push(array[i])];
//   }
//   return number;
// }
// console.log(MoveElement([10, 20, 30, 40, 50], 0, 2));

// TASK 3

// 3.Daxil edilən arraydə təkrarlanan elementi silən və yeni array qaytaran funksiya yazın.
// Məsələn:
// console.log(deleteRepeate([1, 2, 2, 3, 4, 4, 5]))
// console.log(deleteRepeate([1, 2, 3, 4, 5]))
// console.log(deleteRepeate([1, -2, -2, 3, 4, -5, -6, -5]))

// Expected Output:
// [1,2,3,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]

// let arr = [1, 2, 2, 3, 4, 4, 5];
// function deleteRepeate(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//       let found = false;
//       for (let j = 0; j < result.length; j++) {
//           if (arr[i] === result[j]) {
//               found = true;
//               break;
//           }
//       }
//       if (!found) {
//           result.push(arr[i]);
//       }
//   }
//   return result;
// }
// console.log(deleteRepeate(arr))

// TASK 4

// 4.Daxil edilən cümlənin bütün sözlərinin ilk hərfini böyük edərək qaytaran funksiya yazın.

// sentenceCapitalization("a short sentence")
// Expected Output:
// "A Short Sentence"

// function sentenceCapitalization(sentence) {
//   let result = '';
//   let word = '';

//   for (let i = 0; i < sentence.length; i++) {
//       if (sentence[i] === ' ') {
//           if (word) {
//               result += word[0].toUpperCase();
//               for (let j = 1; j < word.length; j++) {
//                   result += word[j];
//               }
//               result += ' ';
//               word = '';
//           }
//       } else {
//           word += sentence[i];
//       }
//   }

//   if (word) {
//       result += word[0].toUpperCase();
//       for (let j = 1; j < word.length; j++) {
//           result += word[j];
//       }
//   }

//   return result;
// }

// console.log(sentenceCapitalization("a short sentence"));

// TASK 5

//5. Daxil edilən iki arrayi birləşdirən funksiya yazın.
// console.log(concatArray([1,2,3,4,5],[6,7,8,9]))
// Expected Output:
// [1,2,3,4,5,6,7,8,9]

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// function concatArray(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {}
//   return [...arr1, ...arr2];
// }
// console.log(concatArray(arr1, arr2));

// TASK 6

// 6. Daxil edilmiş qaydada neçə söz olduğun tapan funksiya yazın.

// let sentence = "Murad MuradoFFF Ramil oglu ";
// let count = 0 ;
// function words (sentence){
//     for (let i = 0; i < sentence.length; i++) {
//         if(sentence[i]!== " " && i == 0 ||sentence[i-1] == " ")
//         count++
//     }
//     return count
// }
// console.log(words(sentence));

// TASK 7

// 7. Funksiya dili. Parametr qəbul etsin və bu parametr bir array (ədədlərdən ibraət massivi) olsun. Funksiya ən arrayin medianını tapsın.Median ortada dayanan ədədi bildirir. Əgər massiv uzunluğu cütdürsə onda ortadakı 2 ədədin cəminin orta median ölçüsü.

// let arr1 = [7, 8, 9, 10, 11];
// let arr1 = [1, 2, 3, 4, 5, 6];
// function findMedian(arr1) {
//   const length = arr1.length;
//   const mid = Math.floor(length / 2);
//   if (length % 2 === 0) {
//     return (arr1[mid - 1] + arr1[mid]) / 2;
//   } else {
//     return arr1[mid];
//   }
// }
// console.log(findMedian(arr1));

// // TASK 8

// Dublikatsız massivi qaytaran metod yazın.
// console.log(clearDuplicate([1, 2, 1, 2, 3])); -> [1, 2, 3]
// console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); -> ['a', 2, 'd', 14, 's', false]

// let arr = [1, 2, 2, 3, 4, 4, 5,5,9,8];
// function deleteRepeate(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//       let found = false;
//       for (let j = 0; j < result.length; j++) {
//           if (arr[i] === result[j]) {
//               found = true;
//               break;
//           }
//       }
//       if (!found) {
//           result.push(arr[i]);
//       }
//   }
//   return result;
// }
// console.log(deleteRepeate(arr))

// TASK 9

// Bir string ve bir char qebul eden bir function yazın.Əgər daxil
// olunmuş char string-də varsa char-ın yerləşdiyi indekslərin cəmini
// yoxdursa -1 return etsin. Məsələn salam və 'a' daxil olunarsa output 1+3=4 olmalıdır.

// function charIndexSum(string, char) {
//   let indexSum = 0;
//   let found = false;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === char) {
//       indexSum += i;
//       found = true;
//     }
//   }
//   return found ? indexSum : -1;
// }
// console.log(charIndexSum("javascript", 'a'));
// console.log(charIndexSum("javascript", 'l'));

// TASK 10

// // const ölkələr = ["Finlandiya", "Danimarka", "İsveç", "Norveç", "İslandiya"];

// // country array əlaqədar olaraq ilk 3 hərfini (hər bir hərf böyük olmalıdır) yeni arrayda yığın

// const countries = ["Finlandiya", "Danimarka", "İsveç", "Norveç", "İslandiya"];
// const firstthrid = [];
// for (let i = 0; i < countries.length; i++) {
//   let country = countries[i];
//   let thrid = "";
//   for (let j = 0; j < 3; j++) {
//     if (j < country.length) {
//       thrid += country[j].toUpperCase();
//     }
//   }

//   firstthrid.push(thrid);
// }

// console.log(firstthrid);

// TASK 11

// Write a JavaScript program(function) that accepts a string as input and swaps the case of each character.

// function biglow(sentence) {
//   let word= " ";
//  for(let i = 0; i < sentence.length; i++){
//   if(sentence[i] == sentence[i].toLowerCase()){
//       word += sentence[i].toUpperCase();
//   }
//   else{
//       word += sentence[i].toLowerCase();
//   }
// }
//    return word
// }
// console.log(biglow('Real Madrid are big club'));

// TASK 12

// 12.

// İki massivi müqayisə edən və eynidirsə, doğru qaytaran funksiya yazın.
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])) -> true
// console.log(isEqual([1, 2, 3, 4], [1, 2 ] , 3, 4, 5])) -> false
// console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) -> false
// console.log(isEqual() [1, 2, 3, 4, yanlış], [1, 2, 3, 4, yanlış])) -> doğrudur

// function isEqual(arr1, arr2){
//   if(arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if(arr1[i]!==arr2[i])
//       return false;
//   }
//     return true;
//   }
//   console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4]));
//   console.log(isEqual([1, 2, 3, 4], [1, 2] , 3, 4, 5));
//   console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false]));
//   console.log(isEqual([1, 2, 3, 4, "murad"], [1, 2, 3, 4, "murad"]));
