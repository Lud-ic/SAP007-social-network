import { addPosts, getPosts } from "../../lib/firestore-firebase.js";
import { userLogout } from "../../lib/auth-firebase.js";
import { getAuth } from "../../lib/exports.js";
import { footer } from "../components/footer.js";
import { header } from "../components/header.js";
import { gettingPosts } from "../components/posts.js";

const auth = getAuth();

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
      <p id="error" class="error"></p>
      <button id="buttonSubmit" type="submit" class="button-submit-feed">Publicar</button>
    </div>
    <div class="section-posts-container">
      <section id="sectionNewPost" class="section-post"></section>
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
  const errorMessage = container.querySelector("#error");

  buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    errorMessage.innerHTML = "";
    if (city.value.length >= "3" && country.value.length >= "3" && message.value.length >= "100") {
      addPosts(
        city.value,
        country.value,
        message.value,
        auth.currentUser.email,
      ).then((id) => {
        const date = new Date().toLocaleString("pt-br");
        const post = {
          userEmail: auth.currentUser.email,
          city: city.value,
          country: country.value,
          message: message.value,
          date,
          id,
          likes: [],
        };
        sectionNewPost.prepend(gettingPosts(post));
        city.value = "";
        country.value = "";
        message.value = "";
      });
    } else if (city.value === "" && country.value === "" && message.value === "") {
      errorMessage.innerText = "Preencha todos os campos acima";
    } else if (city.value.length < "3" || country.value.length < "3") {
      errorMessage.innerText = "Preencha os campos cidade e país com mais de 3 caracteres";
    } else if (message.value.length < "100") {
      errorMessage.innerText = "Preencha a mensagem acima com mais de 100 caracteres";
    }
  });

  const sectionPost = container.querySelector("#sectionAllPost");

  const showAllPosts = async () => {
    const allPosts = await getPosts();
    allPosts.forEach((post) => {
      const postElement = gettingPosts(post);
      sectionPost.prepend(postElement);
    });
  };

  logout.addEventListener("click", (e) => {
    e.preventDefault();
    userLogout().then(() => {
      localStorage.removeItem("userEmail");
      window.location.hash = "";
    });
  });

  showAllPosts();
  return container;
}
