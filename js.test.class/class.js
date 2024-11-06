// 1)Rectangle adında bir class yaradın.
// Rectangle class-ına calculateArea() adlı bir metod daxil edin. Bu metod width və height dəyərlərini istifadə edərək düzbucaqlının sahəsini hesablayacaq və geri qaytaracaq.
// Rectangle class-ına calculatePerimeter() adlı başqa bir metod daxil edin.
// Bu metod width və height dəyərlərini istifadə edərək düzbucaqlının perimetrini hesablayacaq və geri qaytaracaq.
// Reactangle sinifinin instanceni yaradın və onun sahəsini və perimetrini hesablayın.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

const probRectangle = new Rectangle(10, 15);

console.log("Düzbucaqlının sahəsi:", probRectangle.calculateArea());
console.log("Düzbucaqlının perimetri:", probRectangle.calculatePerimeter());

// BankAccount Class-ı Yaratmaq:

// BankAccount adlı bir class yaradın.
// Bu class-da aşağıdakı xüsusiyyətlər olsun:
// accountNumber (hesab nömrəsi) — Hesabın nömrəsi (string).
// balance (balans) — Hesabın balansı (rəqəm, ilkin olaraq 0 olaraq təyin edilsin).
// Metodlar:

// deposit(amount): Bu metod, istifadəçiyə hesabına müəyyən məbləği əlavə etməyə imkan verəcək.
// Şərt: Əgər əlavə ediləcək məbləğ müsbət deyilsə (sıfır və ya mənfi), xəta mesajı verilməlidir.
// withdraw(amount): Bu metod, istifadəçiyə hesabından müəyyən məbləği çıxarmağa imkan verəcək.
// Şərt 1: Çıxarılacaq məbləğ müsbət olmalıdır.
// Şərt 2: Hesabda kifayət qədər vəsait yoxdursa, xəta mesajı verilməlidir.
// Şərt 3: Əgər çıxarılacaq məbləğ sıfır və ya mənfi olarsa, xəta mesajı verilməlidir.
// Nümunələrin Yaradılması:

// BankAccount class-ından iki nümunə yaradın:
// Birinci hesab üçün:
// Hesab nömrəsi: "101"
// İlkin balans: 1000
// İkinci hesab üçün:
// Hesab nömrəsi: "102"
// İlkin balans: 500
// Əməliyyatlar:

// Hesab 101 (Alice):
// 500 məbləği əlavə etsin.
// 200 məbləği çıxarsın.
// Hesab 102 (Bob):
// 100 məbləği çıxarsın.
// 700 məbləği əlavə etsin.
// Əməliyyatların Nəticələri:

// Hər iki hesab üzrə əməliyyatları yerinə yetirəndən sonra hər birinin balansını çap edin.
// Əgər əməliyyat düzgün yerinə yetirilməyibsə, müvafiq xəta mesajını göstərmək vacibdir.

class BankAccount {
  constructor(accountNumber, balance = 0) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  // hesaba pul elave etmek

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(
        `${amount} hesaba pulu əlavə et ${this.accountNumber}. Yeni balans: ${this.balance}`
      );
    } else {
      console.log("Error: Deposit müsbət olmalıdır!!!");
    }
  }

//   hesabdan pul cixarilmasi

  withdraw(amount){
    if (amount > 0) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`${amount} Hesabdan çıxarılıb ${this.accountNumber}. Yeni balans: ${this.balance}`);
        } else {
            console.log("Error: Kifayət qədər vəsait yoxdur!!!");
        }
    } else {
        console.log("Error: Çıxarma məbləği mənfi ola bilməz!!!");
    }
  }
}

const account1 = new BankAccount("Alice",1000);
const account2 = new BankAccount("Bobb",500);


// alice əməliyyatları

const aliceDeposit = account1.deposit(500);
const aliceWithdraw = account1.withdraw(200);

// Bobbun əməliyyatları

const bobbDeposit = account2.deposit(700);
const bobbWithdraw = account2.withdraw(100);


// console.log(aliceDeposit);
// console.log(aliceWithdraw);
// console.log(bobbDeposit);
// console.log(bobbWithdraw);


