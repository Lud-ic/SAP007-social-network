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
        <input type="email" class="email" id="email" autocomplete="on"/>
        <label class=label-password>Senha</label>

        <input type="password" class="password" id="password" minlength="6"/>
        <button class="buttonSubmit" id="buttonSubmit">Entrar</button>
        <p class="text-p">Não tem uma conta?<a href="#register"> Cadastre-se</a></p>
        <p class="text">ou</p>
        <button class="buttonGoogle" id="buttonGoogle"><img src="../../assets/icon/icon-google.svg" alt="logo-google"/>Acessar com o Google</button>
      </form>
    </div>
  </div>

  `;
  container.appendChild(header());

  container.innerHTML += template;

  container.appendChild(footer());

  const email = container.querySelector("#email");
  const password = container.querySelector("#password");
  const buttonSubmit = container.querySelector("#buttonSubmit");
  const buttonGoogle = container.querySelector("#buttonGoogle");

  buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    userLogin(email.value, password.value)
      .then(function () {
        window.location.hash = "#timeLine";
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Deu ruim!");
        return errorMessage;
      });
  });

  buttonGoogle.addEventListener("click", (e) => {
    e.preventDefault();
    signinGoogle()
      .then(function () {
        window.location.hash = "#timeLine";
        alert("Sucesso!!");
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("Erroooo");
        return credential;
      });
  });

  return container;
}
