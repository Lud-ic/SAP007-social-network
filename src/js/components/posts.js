export function gettingPosts(email, city, country, message, date) {
  const container = document.createElement("section");

  const templatePosts = `
      <div class="post-frame">
        <div class="post-items-organization">
          <p>${email}</p>
          <img src="assets/icon/edit.svg"/>
        </div>
        <div class="post-items-organization">
          <p>${city}, ${country}</p>
          <p>${date}</p>
        </div>
        <p>${message}</p>
        <div class="like-container">
          <img class="like-icon" src="assets/icon/no-like.svg"/>
        </div>
      </div>`;

  container.innerHTML = templatePosts;

  return container;
}
