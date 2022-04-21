import signin from "./pages/signin.js";
import register from "./pages/register.js";
import timeLine from "./pages/feed.js";
import { checkLoggedUser } from "../lib/auth-firebase.js";

const main = document.getElementById("root");

const redirectRoutes = () => {
  main.innerHTML = "";
  const loggedIn = checkLoggedUser();
  if (loggedIn) {
    switch (window.location.hash) {
      case "#timeLine":
        main.appendChild(timeLine());
        break;
      default:
        main.appendChild(signin());
    }
  } else {
    switch (window.location.hash) {
      case "#register":
        main.appendChild(register());
        break;
      default:
        main.appendChild(signin());
    }
  }
};

window.addEventListener("hashchange", () => {
  redirectRoutes();
});

window.addEventListener("load", () => {
  redirectRoutes();
});
