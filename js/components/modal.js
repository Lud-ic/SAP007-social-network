export function modalEditPost() {
  const container = document.createElement("div");

  const template = `
    <input type="text" id="city" class="message-typing" autocomplete="on" placeholder="Cidade"/>
    <input type="text" id="country" class="message-typing" autocomplete="on" placeholder="País"/>
    <textarea name="textarea" rows="5" cols="30" id="message" class="message message-typing" placeholder="Compartilhe sua experiência aqui"></textarea>
  `;

  container.innerHTML += template;
}
