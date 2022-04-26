import { userCreate } from "../../lib/auth-firebase.js";
import { footer } from "../components/footer.js";
import { header } from "../components/header.js";

export default function register() {
  const container = document.createElement("section");

  const template = `
  <div class="main-content">
    <h1 class="text-form">Crie sua conta</h1>
    <div class="container">
      <form class="form-container">
        <label class="label-email">Email</label>
        <input type="email" class="email" id="email" autocomplete="on" required/>
        <label class=label-password>Senha</label>
        <input type="password" class="password" id="password" minlength="6"required/>
        <label class="label-password confirmation">Confirme sua senha</label>
        <input type="password" class="password" id="confirm-password" minlength="6"required/>
        <div class="error-container">
          <p id="error" class="error"></p>
        </div>
        <button class="buttonSubmit btn-register" type="submit">Cadastrar</button>
        <p class="text-p"> <a href="#signin">Ja tem uma conta? </a></p>
      </form>
    </div>
  </div>`;

  container.appendChild(header());

  container.innerHTML += template;

  container.appendChild(footer());

  const email = container.querySelector("#email");
  const password = container.querySelector("#password");
  const confirmPassword = container.querySelector("#confirm-password");
  const errorFound = container.querySelector("#error");

  container.addEventListener("submit", (e) => {
    e.preventDefault();
    if (password.value === confirmPassword.value) {
      userCreate(email.value, password.value).then(() => {
        window.location.hash = "#timeLine";
      })
        .catch((error) => {
          const errorCode = error.code;
          errorFound.innerHTML = "";
          switch (errorCode) {
            case "auth/email-already-in-use":
              errorFound.innerHTML = "usuário já cadastrado";
              break;
            case "auth/invalid-email":
              errorFound.innerHTML = "email inválido";
              break;
            default:
              errorFound.innerHTML = "ocorreu um erro, tente novamente";
          }
          return errorCode;
        });
    } else {
      errorFound.innerHTML = "";
      errorFound.innerHTML = "senhas incompatíveis";
    }
  });
  return container;
}
