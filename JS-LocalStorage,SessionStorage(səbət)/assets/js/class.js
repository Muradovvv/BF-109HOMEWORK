class User {
    constructor(userName, email, password) {
      this.userName = userName;
      this.email = email;
      this.password = password;
      this.isLogged = false;
      this.id = Date.now();
      this.basket = [];
      this.wishlist = [];
    }
  }

export{User}