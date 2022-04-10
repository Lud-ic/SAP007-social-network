import { addPosts, getPosts } from "../../lib/firestore-firebase.js";
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
    <section id="sectionAllPost"></section>
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
      const date = new Date();
      sectionNewPost.prepend(
        gettingPosts(city.value, country.value, message.value, date)
      );
    });
  });

  const sectionPost = container.querySelector("#sectionAllPost");

  const showAllPosts = async () => {
    const allPosts = await getPosts();
    allPosts.map((item) => {
      console.log(item);
      const postElement = gettingPosts(
        item.city,
        item.country,
        item.message,
        item.date
      );
      sectionPost.appendChild(postElement);
    });
  };

  logout.addEventListener("click", (e) => {
    e.preventDefault();
    userLogout().then(function () {
      window.location.hash = "";
    });
  });

  showAllPosts();
  return container;
}
