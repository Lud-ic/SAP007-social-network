import { editPosts } from "../../lib/firestore-firebase.js";

export function modalEditPost(post) {
  const container = document.createElement("div");
  const template = `
  <div id=modal class="modal">
    <div id=modalContent class="modal-content">
      <div class="message-typing-container">
      <input value="${post.city}" type="text" id="city" class="message-typing" autocomplete="on" placeholder="Cidade"/>
      <input value="${post.country}" type="text" id="country" class="message-typing" autocomplete="on" placeholder="País"/>
      <textarea name="textarea" rows="5" cols="30" id="message" class="message message-typing" placeholder="Compartilhe sua experiência aqui">${post.message}</textarea>
      </div>
        <div class="button-submit-container">
        <button id="buttonSubmit" class="button-submit-feed">Salvar</button>
      </div>
    </div>
  </div>
    `;

  container.innerHTML = template;

  const modal = container.querySelector("#modal");
  const savePost = container.querySelector("#buttonSubmit");
  const city = container.querySelector("#city");
  const country = container.querySelector("#country");
  const message = container.querySelector("#message");
  savePost.addEventListener("click", () => {
    editPosts(post.id, city.value, country.value, message.value).then(() => {

    });
    modal.classList.add("close-modal");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("close-modal");
    }
  });

  return container;
}
