import button from "../button/button";
import { input } from "../input/input";
import styles from "./forms.module.scss";
import Handlebars from "handlebars";
const form = Handlebars.compile(`
<div class={{wrap}}>
  <form action="" class={{form}}>
    <div class={{title}}>Регистрация</div>
    <div class={{row}}>
      <div class={{field}}>
        {{{firstName}}}
      </div>
      <div class={{field}}>
        {{{secondName}}}
      </div>
    </div>
    <div class={{row}}>
      <div class={{field}}>
        {{{login}}}
      </div>
      <div class={{field}}>
        {{{email}}}
      </div>
    </div>
    <div class={{row}}>
      <div class={{field}}>
        {{{phone}}}
      </div>
      <div class={{field}}>
        {{{password}}}
      </div>
    </div>
    <div class={{row}}>
      <div class={{field}}>
        {{{buttonRegistr}}}
      </div>
      <div class={{field}}>
        {{{buttonAuth}}}
      </div>
    </div>

  </form>
</div>`);

export const formReg = form({
  ...styles,
  firstName: input("Имя"),
  secondName: input("Фамилия"),
  login: input("Логин"),
  email: input("E-mail"),
  password: input("Пароль"),
  phone: input("Телефон"),
  buttonRegistr: button({ title: "Зарегистрироваться", type: "dark", purpose: "enter" }),
  buttonAuth: button({ title: "Войти", type: "light", purpose: "enter" }),
});
