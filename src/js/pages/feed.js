import { footer } from "../components/footer.js";
import { header } from "../components/header.js";

export default function timeLine() {
  const container = document.createElement("div");

  const template = `
  <div class="main-content">
    <p>timeLine!</p>
    <input type="email" id="email" autocomplete="on" />
    <input type="password" id="password" />
    <button id="buttonSubmit">Enviar</button>
    <button id="logout">Logout</button>
  </div>`;

  container.appendChild(header());

  container.innerHTML += template;

  container.appendChild(footer());

  return container;
}

// const buttonSubmit = document.getElementById("buttonSubmit");

// buttonSubmit.window.location();
