import { auth } from "../../lib/auth-firebase.js";
import { deletePosts, like, dislike } from "../../lib/firestore-firebase.js";
import { modalEditPost } from "./modal.js";

export function gettingPosts(post) {
  const isPostOwner = post.userEmail === auth.currentUser.email;
  const container = document.createElement("section");

  const templatePosts = `
      <div class="post-frame">
        <div class="post-items-organization">
          <p>${post.userEmail}</p>
          ${isPostOwner ? `
          <div>
            <img id="editPost" src="assets/icon/edit.svg"/>
            <img id="deletePost" class="bin-trash" src="assets/icon/bin-trash.svg"/>
          </div>` : ""}
        </div>
        <div class="post-items-organization">
          <p>${post.city}, ${post.country}</p>
          <p>${post.date}</p>
        </div>
        <p>${post.message}</p>
        <div class="like-container" id="like">
          <button id="button-like" class="button-like">
            <img class="like-icon" src="assets/icon/no-like.svg"/>
          </button>
          <p id="num-likes" class="num-likes">${post.likes.length}</p>

        </div>
      </div>`;

  container.innerHTML = templatePosts;

  if (isPostOwner) {
    const deletePost = container.querySelector("#deletePost");

    deletePost.addEventListener("click", (e) => {
      e.preventDefault();
      deletePosts(post.id);
      container.remove();
    });

    const editPost = container.querySelector("#editPost");

    editPost.addEventListener("click", (e) => {
      e.preventDefault();
      const modalElement = modalEditPost(post);
      container.appendChild(modalElement);
      const elemento = modalElement.querySelector("#message").value;
      console.log(elemento, "elementooooo");
    });
  }

  const buttonLike = container.querySelector("#like");
  const countLikes = container.querySelector("#num-likes");

  buttonLike.addEventListener("click", () => {
    const postLike = post.likes;
    if (!postLike.includes(auth.currentUser.email)) {
      like(post.id, auth.currentUser.email).then(() => {
        postLike.push(auth.currentUser.email);
        const addLikeNum = Number(countLikes.innerHTML) + 1;
        countLikes.innerHTML = addLikeNum;
        console.log(countLikes);
        console.log(post, "poooooost");
      });
    } else {
      dislike(post.id, auth.currentUser.email).then(() => {
        postLike.splice(auth.currentUser.email);
        const addLikeNum = Number(countLikes.innerHTML) - 1;
        countLikes.innerHTML = addLikeNum;
        console.log(countLikes);
      });
    }
  });
  return container;
}
