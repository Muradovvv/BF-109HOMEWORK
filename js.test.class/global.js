// // Qlobal funksiyalar.

//  TASK 1

// 1. sortUsersByUsername() - parametr massivi qəbul edir və geriyə username-ə görə AZ sort edir.

// function sortUsersByUsername(users) {
//     return [...users].sort();
//   }
//   const users = ['Murad', 'Xedice', 'Cavad', 'Aslan', 'Ayten'];

//   const sortedUsers = sortUsersByUsername(users);
//   console.log(sortedUsers);

// TASK 2

// 2. filterByBirthYear() - parametr olaraq users array-i, bir year qəbul edir və bu günə qədər böyük olan user-ləri filter edir.

// function filterByBirthYear (users, year){
//     return users.filter(user => user.birthYear > year)
// }

// const users = [
//     { name: 'John', birthYear: 2000 },
//     { name: 'Kane', birthYear: 2002 },
//     { name: 'Peter', birthYear: 2004 },
//     { name: 'Aslhey', birthYear: 2006}
//   ];
//   console.log(filterByBirthYear(users, 2004));

// TASK 3

// 3. Login() - parametr olaraq istifadəçilər array-i, bir istifadəçi adı və bir parol qəbul edir. Və əgər
// a. username-də bir istifadəçi tapılmazsa, 'istifadəçi tapılmadı!'
// b. username ve ya password yalnish olarsa, 'yanlış istifadəçi adı və ya parol'
// c. her ikisi dogru olarsa, ancaq her hansi bir user-in isLogged deyeri true olarsa, o zaman 'başqa bir istifadəçi hazırda daxil olub' geri etmelidir
// d. her ikisi dogru olarsa hemin user-in isLogged deyeri true olur ve alert('successfully logged in') verir

// function Login(users, username, password) {
//   const user = users.find((user) => user.username === username);
//   if (!user) {
//     return "İstifadəçi tapılmadı";
//   }
//   if (user.password !== password) {
//     return "İstifadəçi adı və ya parol yanlışdır";
//   }
//   if (user.isLogged) {
//     return "Başqa bir istifadəçi hal-hazırda daxil olub";
//   }
//   user.isLogged = true;
//   alert("Successfully logged in");
//   return "Successfully logged in";
// }

// let users = [
//   { username: "Kane", password: "9", isLogged: false },
//   { username: "Ronaldo", password: "7", isLogged: true },
//   { username: "Bale", password: "1111", isLogged: false },
//   { username: "Messi", password: "password123", isLogged: false },
// ];

// console.log(Login(users, 'Kane', '9' ));
// console.log(Login(users, 'Ronaldo', '7' ));
// console.log(Login(users, 'Drogba', '50' ));
// console.log(Login(users, 'Messi', '10' ));

// TASK 4

// 3. LogOut() - parametr olaraq bir users array-i ve username qebul, Eger,
// a. Daxil olunmush username-de bir user tapmazsa 'istifadəçi tapılmadı'
// b. Daxil olunmush username-de user tapsa, ancaq isLogged deyeri false olarsa o zaman, 'istifadəçi çıxış etmək üçün daxil olmayıb!'
// c. Daxil olunmush username-de user tapsa ve isLogged deyeri true olarsa o zaman, user-in isLogged deyeri false olur və 'uğurla' çıxış etdi

// function LogOut(usersArray, username){
//     const user = usersArray.find(user => user.username == username)
//     if(!user){
//         return "istifadəçi tapılmadı"
//     }
//     if(!user.isLogged) {
//         return "istifadəçi çıxış etmək üçün daxil olmayıb!"
//     }

//     user.isLogged = false;
//     return  "uğurla' çıxış etdi";
// }
// const usersArray = [
//     { username: "murad.muradoFFF", isLogged: false },
//     { username: "muradd.muradoFFF", isLogged: true }
// ];

// console.log(LogOut(usersArray, "murad.muradoFFF"));
// console.log(LogOut(usersArray, "muradd.muradoFFF"));
// console.log(LogOut(usersArray, "mrDGaming" ));

// TASK 5

// 4. CreateUser() - parametr olaraq bir array və bir User obj qebul edir və hemin user-i array -e elave edir

// function CreateUser (array, userobj) {
//     return [...array,userobj];
// }
// const array = ['HTML', 'CSS', 'JS', 'React'];
// console.log(CreateUser(array , "JAVA"));

// TASK 6

// 5. DeleteUser() - parametr olaraq bir sıra və bir istifadəçi adı qebul edir və daxil olunmush username-de user tapilarsa hemin User-i silir,
// tapmazsa o zaman 'istifadəçi tapılmadı' qaytarır.

// function DeleteUser (users, username) {
//     const index = users.findIndex(user => user === username);

//     if(index !== -1) {
//         users.splice(index , 1);
//         return users ;
//     } else{
//         return 'İstifadəçi tapılmadı';
//     }
// }
//   const users = ['Murad', 'Vusala', 'Aslan'];
//   console.log(DeleteUser(users, 'Aslan'));
//   console.log(DeleteUser(users, 'Cavad'));
