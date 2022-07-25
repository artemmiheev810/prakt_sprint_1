import tmpl from "./userProfile.hbs";

import { avatar } from "./components/avatar/avatar";
import { button } from "./components/button/button";

import "./userProfile.scss";

import ava from "../../static/img/pics/3.jpg";
import back from "../../static/img/icons/sendBtn.svg";

let obj = {
  backLink: back,
  avatar: avatar(ava),
  name: "Artyom",
  data: [
    { key: "Почта", value: "pochta@rossii.ru" },
    { key: "Логин", value: "art" },
    { key: "Имя", value: "Артем" },
    { key: "Фамилия", value: "Михеев" },
    { key: "Имя в чате", value: "Artyom" },
    { key: "Телефон", value: "8 900 009 87 65" },
  ],
  actions: [
    button("Изменить пароль", "editOwnerPassword"),
    button("Изменить данные", "editOwnerData"),
    button("Выход", "dds"),
  ],
};

export const userProfile = tmpl(obj);
