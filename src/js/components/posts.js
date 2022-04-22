import { auth } from "../../lib/auth-firebase.js";
import { deletePosts } from "../../lib/firestore-firebase.js";
import { modalEditPost } from "./modal.js";

export function gettingPosts(item) {
  const isPostOwner = item.userEmail === auth.currentUser.email;
  const container = document.createElement("section");

  const templatePosts = `
      <div class="post-frame">
        <div class="post-items-organization">
          <p>${item.userEmail}</p>
          ${isPostOwner ? `
          <div>
            <img id="editPost" src="assets/icon/edit.svg"/>
            <img id="deletePost" class="bin-trash" src="assets/icon/bin-trash.svg"/>
          </div>` : ""}

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

  if (isPostOwner) {
  const deletePost = container.querySelector("#deletePost");

  deletePost.addEventListener("click", (e) => {
    e.preventDefault();
    deletePosts(item.id);
    container.remove();
  });

  const editPost = container.querySelector("#editPost");

  editPost.addEventListener("click", (e) => {
    e.preventDefault();
    container.appendChild(modalEditPost());
  });

  return container;
}
