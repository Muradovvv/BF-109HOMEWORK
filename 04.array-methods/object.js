let arr = [
    {
      name: "test",
      key: 1,
    },
    {
      name: "task",
      key: 2,
    },
    {
      name: "tanqo",
      key: 3,
    },
    {
      name: "like",
      key: 4,
    },
    {
      name: "task",
      key: 5,
    },
    {
      name: "trust",
      key: 6,
    },
    {
      name: "test",
      key: 7,
    },
    {
      name: "last",
      key: 8,
    },
    {
      name: "tanqo",
      key: 9,
    },
    {
      name: "elephant",
      key: 10,
    },
    {
      name: "love",
      key: 11,
    },
    {
      name: "small",
      key: 12,
    },
    {
      name: "little",
      key: 13,
    },
  ];

// 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)

// const result = arr.filter((element) => element.name[0] === "t" )
// console.log(result)

// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)

// let count = 0;

// arr.forEach(item => item.name.startsWith("t") && item.name.endsWith("t") && count++);

// console.log(count);

// 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

// let sum = 0;

// arr.forEach(item => {
//   sum += (item.name.startsWith("t") && item.name.endsWith("t")) ? item.key : 0;
// });

// console.log(sum);

// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

// arr.forEach(item => {
//   item.name = (item.name.endsWith("e") ? "SuperDev" : item.name)
// });
// console.log(arr)

// 5) "name"-i en uzun olan obyekti tapin.

// let longestNameObject = arr.reduce((longest, element) => {
//     return element.name.length > longest.name.length ? element : longest;
// });
// console.log(longestNameObject);

// 6) "name"-i en uzun olan obyektin key'ni tapin.

// let longestNamekey = arr.reduce((longest, element) => {
//     return element.name.length > longest.name.length ? element : longest;
// }, arr[0] );
// console.log(longestNamekey.key);

// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin

// let longestIndex = arr.reduce((longest, current, index) => {
//     return current.name.length > arr[longest].name.length ? index : longest;
//   }, 0);

//   let elementIndex = longestIndex ** 2;

//   console.log(elementIndex);

// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)

//  const filterArray = arr.filter((element) => element.name.length === 4);
// console.log(filterArray);

// 9)  en boyuk "key" - i olan obyektin "name"-i ni tapin

// let objectWithMAxKey = arr.reduce((element, max) => {
//     return element.key > max.key ? element : max;
// })
// console.log(objectWithMAxKey.name);

// 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)i tapin.

// const result = arr.filter(element => {
//     const lcount = element.name.split('l').length - 1;
//     return lcount  === 2;
// } )
// console.log(result);

// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.

// const result = arr.filter(element => {
//     const tcount = element.name.split('t').length - 1;
//     return tcount  >= 2;
// } )
// console.log(result);

// 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq

// const filteredarr = arr.filter(element => element.key > 10 && element.name[0] === 'l');
// console.log(filteredarr);
