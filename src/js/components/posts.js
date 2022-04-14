export function gettingPosts(email, city, country, message, date) {
  const container = document.createElement("section");

  const templatePosts = `
      <div class="teste">

        <p>${email}</p>
        <p>${city}</p>
        <p>${country}</p>
        <p>${message}</p>
        <p>${date}</p>
      </div>`;

  container.innerHTML = templatePosts;

  return container;
}
