import { editPosts } from "../../lib/firestore-firebase.js";

export function modalEditPost(post, postContainer) {
  const modalContainer = document.createElement("div");
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

  modalContainer.innerHTML = template;

  const modal = modalContainer.querySelector("#modal");
  const savePost = modalContainer.querySelector("#buttonSubmit");
  const city = modalContainer.querySelector("#city");
  const country = modalContainer.querySelector("#country");
  const message = modalContainer.querySelector("#message");

  savePost.addEventListener("click", () => {
    editPosts(post.id, city.value, country.value, message.value);
    const newCity = postContainer.querySelector("#city");
    const newCountry = postContainer.querySelector("#country");
    const newMessage = postContainer.querySelector("#message");
    newCity.innerHTML = city.value;
    newCountry.innerHTML = country.value;
    newMessage.innerHTML = message.value;

    modalContainer.remove();
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modalContainer.remove();
    }
  });

  return modalContainer;
}
