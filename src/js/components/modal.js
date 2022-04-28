import { editPosts, deletePosts } from "../../lib/firestore-firebase.js";

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
        <p id="error" class="error"></p>
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
  const errorMessage = modalContainer.querySelector("#error");

  savePost.addEventListener("click", () => {
    errorMessage.innerHTML = "";
    if (city.value.length >= "3" && country.value.length >= "3" && message.value.length >= "100") {
      editPosts(post.id, city.value, country.value, message.value).then(() => {
        const newCity = postContainer.querySelector("#city");
        const newCountry = postContainer.querySelector("#country");
        const newMessage = postContainer.querySelector("#message");
        newCity.innerHTML = city.value;
        newCountry.innerHTML = country.value;
        newMessage.innerHTML = message.value;

        modalContainer.remove();
      });
    } else if (city.value === "" && country.value === "" && message.value === "") {
      errorMessage.innerText = "Preencha todos os campos acima";
    } else if (city.value.length < "3" || country.value.length < "3") {
      errorMessage.innerText = "Preencha os campos cidade e país com mais de 3 caracteres";
    } else if (message.value.length < "100") {
      errorMessage.innerText = "Preencha a mensagem acima com mais de 100 caracteres";
    }
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modalContainer.remove();
    }
  });

  return modalContainer;
}

export function modalDeletePost(post, postContainer) {
  const modalContainer = document.createElement("div");

  const template = `
  <div id=modal class="modal">
    <div class="modal-content">
      <div class="modal-delete-container" >
        <p>Você tem certeza que deseja excluir a postagem?</p>
        <div>
          <button id="button-yes" class="button-confirm-delete">Sim</button>
          <button id="button-no" class="button-confirm-delete">Não</button>
        </div>
      </div>
    </div>
  </div>
  `;

  modalContainer.innerHTML = template;

  const modal = modalContainer.querySelector("#modal");
  const buttonYes = modalContainer.querySelector("#button-yes");
  const buttonNo = modalContainer.querySelector("#button-no");

  buttonYes.addEventListener("click", () => {
    deletePosts(post.id).then(() => {
      postContainer.remove();
    });
  });

  buttonNo.addEventListener("click", () => {
    modalContainer.remove();
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modalContainer.remove();
    }
  });

  return modalContainer;
}
