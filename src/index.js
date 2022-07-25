import { main } from "./pages/main/main";
import { login } from "./pages/login/login";
import { registration } from "./pages/registr/registr";
import { errorPage } from "./pages/error/error";
import { userProfile } from "./pages/userProfile/userProfile";
import { userProfileEdit } from "./pages/userProfileEdit/userProfileEdit";
import { userProfilePassword } from "./pages/userProfilePassword/userProfilePassword";

import button from "./comp/button/button";

import "./static/style/glob.scss";

const root = document.querySelector("#root");
root.innerHTML = login;
window.location.pathname.includes("/main/dialog") ? (root.innerHTML = main(true)) : "";
const er404 = errorPage({
  error: "404",
  errorText: "такой страницы нет",
  button: button({ title: "Вернуться", type: "dark", purpose: "enter" }),
});
const er500 = errorPage({
  error: "500",
  errorText: "проблема на сервере",
  button: button({ title: "Вернуться", type: "dark", purpose: "enter" }),
});

switch (window.location.pathname) {
  case "/login":
  case "/":
    root.innerHTML = login;
    break;
  case "/reg/":
    root.innerHTML = registration;
    break;
  case "/main/":
    root.innerHTML = main(true);
    break;
  case "/main/dialog/":
    root.innerHTML = main(false);
    break;
  case "/profile/":
    root.innerHTML = userProfile;
    break;
  case "/profile/edit/":
    root.innerHTML = userProfileEdit;
    break;
  case "/profile/editPassword/":
    root.innerHTML = userProfilePassword;
    break;
  case "/500/":
    root.innerHTML = er500;
    break;
  case "/404/":
  default:
    root.innerHTML = er404;
}

//начальная навигация
let registrationButton, loginbutton;
document.querySelectorAll("button").forEach((button) => {
  let purpose = button.getAttribute("data-purpose");
  if (purpose === "enter") loginbutton = button;
  if (purpose === "registration") registrationButton = button;
});
if (registrationButton)
  registrationButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.pathname = "/reg";
  });

if (loginbutton)
  loginbutton.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.pathname = "/main";
  });
//профиль пользователя / выход из учетки
const profLink = document.querySelector("#linkToOwnProfile");
const linkToMain = document.querySelector("#linkToMain");
const logoutOwner = document.querySelector("#logoutOwner");
const editOwnerData = document.querySelector("#editOwnerData");
const editOwnerPassword = document.querySelector("#editOwnerPassword");

document.body.addEventListener("click", (e) => {
  if (e.target.id === "linkToOwnProfile") {
    window.location.pathname = "/profile";
  }
});

if (profLink)
  profLink.addEventListener("click", () => {
    window.location.pathname = "/profile";
  });
if (linkToMain)
  linkToMain.addEventListener("click", () => {
    window.location.pathname = "/main";
  });

if (logoutOwner)
  logoutOwner.addEventListener("click", () => {
    window.location.pathname = "/login";
  });
if (editOwnerData)
  editOwnerData.addEventListener("click", () => {
    window.location.pathname = "/profile/edit";
  });
if (editOwnerPassword)
  editOwnerPassword.addEventListener("click", () => {
    window.location.pathname = "/profile/editPassword";
  });
//выделение активного чата в списке
let currentСonversation = null;
const chatElements = document.querySelectorAll(".chatElem");
if (chatElements && chatElements.length > 0) {
  if (window.location.pathname === "/main/dialog") chatElements[0].classList.add("chatElem_active");

  chatElements.forEach((el, i) => {
    el.id += i;
    el.addEventListener("click", (e) => {
      window.location.pathname = "/main/dialog";

      if (e.currentTarget !== currentСonversation && currentСonversation !== null) {
        currentСonversation.classList.remove("chatElem_active");
      }
      currentСonversation = e.currentTarget;
      currentСonversation.classList.add("chatElem_active");
    });
  });
}

//автоскролл к последним сообщениям чата
let block = document.querySelector(".chatArea-body__messages");
if (block) block.scrollIntoView({ block: "end" });

//всплывашка хедера чата
let actionHead = document.querySelector(".chatArea-head__actions");

function setListen(type) {
  if (actionHead)
    actionHead.addEventListener(type, () => {
      let actMenu = actionHead.lastElementChild;
      if (type === "mouseover") actMenu.style.display = "block";
      if (type === "mouseout") actMenu.style.display = "none";
    });
}
setListen("mouseover");
setListen("mouseout");
