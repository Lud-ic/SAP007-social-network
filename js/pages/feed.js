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
    <div class="logout-container">
      <button id="logout" class="logout">Sair</button>
    </div>
    <div class="message-typing-container">
      <input type="text" id="city" class="message-typing" autocomplete="on" placeholder="Cidade"/>
      <input type="text" id="country" class="message-typing" autocomplete="on" placeholder="País"/>
      <textarea name="textarea" rows="5" cols="30" id="message" class="message message-typing" placeholder="Compartilhe sua experiência aqui"></textarea>
    </div>
    <div class="button-submit-container">
    <button id="buttonSubmit" class="button-submit-feed">Publicar</button>
    </div>
    <div class="section-posts-container">
      <section id="sectionNewPost" class="section-post "></section>
      <section id="sectionAllPost" class="section-post"></section>
    </div>
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
    ).then(function (id) {
      const date = new Date().toLocaleString("pt-br");
      const item = {
        userEmail: auth.currentUser.email,
        city: city.value,
        country: country.value,
        message: message.value,
        date: date,
        id: id,
      };
      sectionNewPost.prepend(gettingPosts(item));
    });
  });

  const sectionPost = container.querySelector("#sectionAllPost");

  const showAllPosts = async () => {
    const allPosts = await getPosts();
    allPosts.map((item) => {
      const postElement = gettingPosts(item);
      sectionPost.prepend(postElement);
    });
  };

  logout.addEventListener("click", (e) => {
    e.preventDefault();
    userLogout().then(function () {
      //limpar localStorage
      window.location.hash = "";
    });
  });

  showAllPosts();
  return container;
}
