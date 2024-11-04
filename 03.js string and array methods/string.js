// TASK 1

// # Verilən bir cümlənin bütün hərflərini böyük hərflərə çevirən bir funksiya yazın.convertToUpper("Hello World");
// Nəticə: "HELLO WORLD"

// function convertToUpper (sentence){

//     return sentence.toUpperCase();
// }
// const sentence = "Hello World";
// console.log(convertToUpper(sentence));

// TASK 2

// # Daxil edilən cümlədə ən uzun sozu return edən funksiya yazın.

// function enuzunsoz (sentence) {
//     const words = sentence.split(" ");
//     let uzunsoz = "";
//     for (let i = 0; i < words.length; i++) {
//         if(words[i].length > uzunsoz.length){
//         uzunsoz = words [i];
//         }
//     }
//     return uzunsoz;
// }
// const sentence ="real madrid is the big club";
// console.log(enuzunsoz(sentence));

// TASK 3

// # Verilən bir cümlədəki sözləri tərs sıraya düzmək üçün funksiya yazın.

// reverseWordOrder("javascript öyrənmək maraqlıdır");

// function reverseWordOrder(sentence){
//     return sentence.split(' ').reverse().join(' ');
// }
// const sentence = "javascript öyrənmək maraqlıdır";
// console.log(reverseWordOrder(sentence));

// TASK 4

// # findLongestWord("javascript oyrenirik çox maraqlıdır");

// Nəticə: maraqlıdır

// function findLongestWord(sentence) {
//     const words = sentence.split(" ");
//     let Longestword = " ";
//     for (let i = 0; i < words.length; i++) {
//         if(words[i].length > Longestword.length){
//             Longestword = words[i];
//         }
        
//     }
//     return Longestword
// }
// console.log(findLongestWord("avascript oyrenirik çox maraqlıdır"));

// TASK 5

// # Cümlədəki bir hərfi başqası ilə əvəzləyən və lowerCase edilmiş şəkildə qaytaran bir funksiya yazın.

// replaceCharacter("Salam", "a", "o");

// Nəticə: "solom"

// function replaceCharacter(str, replacementChar){
//     str = str.toLowerCase();
//     let result = str.split("a").join(replacementChar);
//     return result;
// }
// console.log(replaceCharacter("Salamlar", "o"));

  