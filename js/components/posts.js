import { deletePosts } from "../../lib/firestore-firebase.js";

export function gettingPosts(item) {
  const container = document.createElement("section");

  const templatePosts = `
      <div class="post-frame">
        <div class="post-items-organization">
          <p>${item.userEmail}</p>
          <p>${item.id}</p>
          <img id="editPost" src="assets/icon/edit.svg"/>
        </div>
        <div class="post-items-organization">
          <p>${item.city}, ${item.country}</p>
          <p>${item.date}</p>
        </div>
        <p>${item.message}</p>
        <div class="like-container">
          <img class="like-icon" src="assets/icon/no-like.svg"/>
        </div>
      </div>`;

  container.innerHTML = templatePosts;

  const editPost = container.querySelector("#editPost");

  editPost.addEventListener("click", (e) => {
    console.log(e);
    console.log(item.id);
    deletePosts();
    container.remove();
  });
  return container;
}
