import { addPosts } from "../../lib/firestore-firebase.js";
import { auth } from "../../lib/auth-firebase.js";
import { userLogout } from "../../lib/auth-firebase.js";
import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { gettingPosts } from "../components/posts.js";

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

    <section id="sectionNewPost"></section>
  </div>`;

  container.appendChild(header());
  container.innerHTML += template;
  container.appendChild(footer());

  const city = container.querySelector("#city");
  const country = container.querySelector("#country");
  const message = container.querySelector("#message");
  const buttonSubmit = container.querySelector("#buttonSubmit");
  const logout = container.querySelector("#logout");
  const sectionNewPost = container.querySelector("#sectionNewPost");

  buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    addPosts(
      city.value,
      country.value,
      message.value,
      auth.currentUser.email
    ).then(function () {
      const teste = gettingPosts(city, country, message);
      sectionNewPost.innerHTML = teste;
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
