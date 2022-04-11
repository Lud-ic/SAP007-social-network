export function gettingPosts(city, country, message, date) {
  const container = document.createElement("section");

  const templatePosts = `
      <div class="teste">
        <p>${city}</p>
        <p>${country}</p>
        <p>${message}</p>
        <p>${date}</p>
      </div>`;

  container.innerHTML = templatePosts;

  return container;
}
