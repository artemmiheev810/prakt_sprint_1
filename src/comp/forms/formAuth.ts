import button from "../button/button";
import { input } from "../input/input";
import styles from "./forms.module.scss";
import Handlebars from "handlebars";

const form = Handlebars.compile(`<div class={{wrap}}>
  <form action="" class={{form}}>
    <div class={{title}}>Авторизация</div>
    <div>
      <div class={{field}}>
        {{{inputLogin}}}
      </div>
      <div class={{field}}>
        {{{inputPassword}}}
      </div>
    </div>
    <div>
      <div class={{field}}>
        {{{buttonEnter}}}
      </div>
      <div>
        {{{buttonRegistr}}}
      </div>
    </div>
  </form>
</div>`);

export const formAuth = form({
  ...styles,
  inputLogin: input("login"),
  inputPassword: input("password"),
  buttonEnter: button({ title: "Вход", type: "dark", purpose: "enter" }),
  buttonRegistr: button({ title: "Создать аккаунт", type: "light", purpose: "registration" }),
});
