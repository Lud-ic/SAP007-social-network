import { deletePosts } from "../../lib/firestore-firebase.js";

export function modalEditPost(post) {
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
  savePost.addEventListener("click", () => {
    modal.classList.add("close-modal");
    // postContainer.innerHTML = whatever the new html should be (like in gettingPosts)
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("close-modal");
    }
  });

  return modalContainer;
}

export function modalDeletePost(post, postContainer) {
  const modalContainer = document.createElement("div");

  const template = `
  <div id=modal class="modal">
    <div>
      <p>Você tem certeza que deseja excluir a postagem?</p>
      <div>
        <button id="button-yes" class="button-confirm-delete">Sim</button>
        <button id="button-no" class="button-confirm-delete">Não</button>
      </div>
    </div>
  </div>
  `;

  modalContainer.innerHTML = template;

  const modal = modalContainer.querySelector("#modal");
  const buttonYes = modalContainer.querySelector("#button-yes");
  const buttonNo = modalContainer.querySelector("#button-no");

  buttonYes.addEventListener("click", () => {
    deletePosts(post.id);
    postContainer.remove();
  });

  buttonNo.addEventListener("click", () => {
    modal.classList.add("close-modal");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("close-modal");
    }
  });

  return modalContainer;
}
