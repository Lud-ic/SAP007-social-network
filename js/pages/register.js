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
        <input type="password" class="password" id="password" minlength="6"required/>
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

  container.addEventListener("submit", (e) => {
    e.preventDefault();
    userCreate(email.value, password.value)
      .then(() => {
        window.location.hash = "#timeLine";
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Deu errado!");
        return errorMessage;
      });
  });
  return container;
}
