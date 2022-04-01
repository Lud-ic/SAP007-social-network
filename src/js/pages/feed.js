import { posts } from "../../lib/firestore-firebase.js";
import { auth } from "../../lib/auth-firebase.js";
import { userLogout } from "../../lib/auth-firebase.js";
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
  const buttonSubmit = container.querySelector("#buttonSubmit");
  const logout = container.querySelector("#logout");

  buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    posts(
      city.value,
      country.value,
      message.value,
      auth.currentUser.email
    ).then(function () {
      const container2 = document.createElement("div");

      const template2 = `
      <div class="teste">
        <p>${city.value}</p>
        <p>${country.value}</p>
        <p>${message.value}</p>
      </div>`;

      container2.innerHTML += template2;
      console.log(template2);
      return container2;
    });
  });

  logout.addEventListener("click", (e) => {
    e.preventDefault();
    userLogout().then(function () {
      window.location.hash = "";
    });
  });

  // container.appendChild();

  return container;
}

// const buttonSubmit = document.getElementById("buttonSubmit");

// buttonSubmit.window.location();
