export function gettingPosts(city, country, message) {
  // const container2 = document.createElement("div");

  const template2 = `
      <div class="teste">
        <p>${city.value}</p>
        <p>${country.value}</p>
        <p>${message.value}</p>
      </div>`;
  return template2;
}
