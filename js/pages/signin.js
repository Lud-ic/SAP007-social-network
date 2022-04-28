import "../../lib/config-firebase.js";
import { signinGoogle, userLogin } from "../../lib/auth-firebase.js";
import { header } from "../components/header.js";
import { footer } from "../components/footer.js";

export default function signin() {
  const container = document.createElement("section");

  const template = `
  <div class="main-content">
    <h1 class="text-form">Acesse sua conta ou cadastre-se</h1>
    <div class="container">
      <form class="form-container">
        <label class="label-email">Email</label>
        <input type="email" class="email" id="email" autocomplete="on" required/>
        <label class=label-password>Senha</label>
        <input type="password" class="password" id="password" minlength="6" required/>
        <div class="error-container">
          <p id="error" class="error"></p>
        </div>
        <button class="buttonSubmit" type="submit">Entrar</button>
        <p class="text-p">Não tem uma conta?<a href="#register"> Cadastre-se</a></p>
        <p class="text">ou</p>
        <button class="buttonGoogle" id="buttonGoogle"><img src="assets/icon/icon-google.svg" alt="logo-google"/>Acessar com o Google</button>
      </form>
    </div>
  </div>

  `;

  container.appendChild(header());

  container.innerHTML += template;

  container.appendChild(footer());

  const email = container.querySelector("#email");
  const password = container.querySelector("#password");
  const buttonGoogle = container.querySelector("#buttonGoogle");
  const errorFound = container.querySelector("#error");

  container.addEventListener("submit", (e) => {
    e.preventDefault();
    userLogin(email.value, password.value)
      .then((user) => {
        localStorage.setItem("userEmail", user.email);
        window.location.hash = "#timeLine";
      })
      .catch((error) => {
        const errorCode = error.code;
        errorFound.innerHTML = "";
        switch (errorCode) {
          case "auth/user-not-found":
            errorFound.innerHTML = "usuario não encontrado";
            break;
          case "auth/wrong-password":
            errorFound.innerHTML = "senha incorreta";
            break;
          default:
            errorFound.innerHTML = "ocorreu um erro, tente novamente";
        }
        return errorCode;
      });
  });

  buttonGoogle.addEventListener("click", (e) => {
    e.preventDefault();
    signinGoogle().then((result) => {
      localStorage.setItem("userEmail", JSON.stringify(result.user));
      window.location.hash = "#timeLine";
    }).catch((error) => {
      errorFound.innerHTML = "ocorreu um erro, tente novamente";
      return error;
    });
  });

  return container;
}