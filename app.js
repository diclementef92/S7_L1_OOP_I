const User = function (username, psw, day) {
  this.username = username;
  this.psw = psw;
  this.birthDay = day;
};
let users = [];

const userValidation = function (username) {
  if (username.length > 4 && username.length < 50 && !username.includes(" ")) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username) {
        //username già presente
        return false;
      }
    }
    //username non presente
    return true;
  }
  return false;
};

const pswValidation = function (psw) {
  if (psw.length >= 4 && psw.length < 50 && !psw.includes(" ")) {
    return true;
  }
  return false;
};

window.onload = () => {
  const tableBody = document.querySelector("table tbody");
  const errorMessage = document.querySelector(".errorMessage");

  const buttonLogin = document.querySelector("#loginButton");

  buttonLogin.onclick = function handleLogin(event) {
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const birthday = document.querySelector("#birthday");

    if (userValidation(username.value) && pswValidation(password.value)) {
      let currentUser = new User(
        username.value,
        password.value,
        birthday.value
      );
      users.push(currentUser);
      console.log(users);

      let newRow = document.createElement("tr");
      let newUser = document.createElement("td");

      newUser.textContent = currentUser.username;

      newRow.appendChild(newUser);
      tableBody.appendChild(newRow);
      errorMessage.innerHTML = "";
    } else if (!userValidation(username.value)) {
      errorMessage.innerHTML =
        "Username non valido, requisiti: lunghezza compresa tra 4 almeno 4 caratteri senza spazi <br> e deve essere diverso dagli username già presenti ";
    } else {
      errorMessage.innerHTML =
        "password non valida, almeno 4 caratteri senza spazi";
    }
  };
};
