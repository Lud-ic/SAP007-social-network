import signin from "./pages/signin.js";
import register from "./pages/register.js";
import timeLine from "./pages/feed.js";
import { checkLoggerUser } from "../lib/auth-firebase.js";

const main = document.getElementById("root");

const redirectRoutes = () => {
  main.innerHTML = "";
  const user = checkLoggerUser();
  console.log(user);
  if (user) {
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
  } else {
    window.location.hash = "";
    main.appendChild(signin());
  }
};

window.addEventListener("hashchange", () => {
  redirectRoutes();
});

window.addEventListener("load", () => {
  redirectRoutes();
});
