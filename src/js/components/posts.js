import { deletePosts } from "../../lib/firestore-firebase.js";

export function gettingPosts(item) {
  const container = document.createElement("section");

  const templatePosts = `
      <div class="post-frame">
        <div class="post-items-organization">
          <p>${item.userEmail}</p>
          <div >
            <img id="editPost" src="assets/icon/edit.svg"/>
            <img id="deletePost" class="bin-trash" src="assets/icon/bin-trash.svg"/>
          </div>
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

  const deletePost = container.querySelector("#deletePost");

  deletePost.addEventListener("click", (e) => {
    e.preventDefault();
    deletePosts(item.id);
    container.remove();
  });
  return container;
}
