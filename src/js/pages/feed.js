
import { posts } from "../../lib/firestore-firebase.js";
import { auth } from "../../lib/auth-firebase.js";
import { footer } from "../components/footer.js";
import { header } from "../components/header.js";


export default function timeLine() {
  const container = document.createElement("div");

  const template = `
  <div class="main-content">
    <p>timeLine!</p>
    <input type="text" id="city" autocomplete="on" />
    <input type="text" id="country" autocomplete="on" />
    <input type="text" id="message" autocomplete="on" />
    <button id="buttonSubmit">Enviar</button>
    <button id="logout">Logout</button>
  </div>`;
  
  container.appendChild(header());
  container.innerHTML += template;
  container.appendChild(footer());
  
  const city = container.querySelector("#city");
  const country = container.querySelector("#country");
  const message = container.querySelector("#message");

  container.querySelector("#buttonSubmit").addEventListener("click", e => {
  e.preventDefault()
  posts(city.value, country.value, message.value, auth.currentUser.email)
  })

  return container;
}

// const buttonSubmit = document.getElementById("buttonSubmit");

// buttonSubmit.window.location();
