import signin from "./pages/signin.js";
import register from "./pages/register.js";
import timeLine from "./pages/feed.js";

const main = document.getElementById("root");

const redirectRoutes = () => {
  switch (window.location.hash) {
    case "#register":
      main.appendChild(register());
      break;
    case "#timeLine":
      main.appendChild(timeLine());
      break;
    default:
      main.appendChild(signin());
  }
};

const init = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = "";
    redirectRoutes();
  });
};

window.addEventListener("load", () => {
  redirectRoutes();
  init();
});
