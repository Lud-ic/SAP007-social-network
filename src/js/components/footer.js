export function footer() {
  const container = document.createElement("footer");
  container.classList.add("footer-container");

  const template = `
    <p class="footer-text">Desenvolvido por
    <a target="_blank" class="linkedin" href="https://www.linkedin.com/in/elizenai/"> Elizenai </a>,
    <a target="_blank" class="linkedin" href="https://www.linkedin.com/in/ludmila-magalhaes/"> Ludmila e </a>
    <a target="_blank" class="linkedin" href="www.linkedin.com/in/taila-martins"> Taila </a>
    </p>


  `;

  container.innerHTML = template;

  return container;
}
