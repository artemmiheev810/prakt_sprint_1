import tmpl from "./userProfileEdit.hbs";

import { avatar } from "../userProfile/components/avatar/avatar";
import { button } from "../userProfile/components/button/button";

import ava from "../../static/img/pics/3.jpg";
import back from "../../static/img/icons/sendBtn.svg";
import { input } from "./components/input/ipnut";

export const userProfileEdit = tmpl({
  backLink: back,
  avatar: avatar(ava),
  name: "Artyom",
  inputs: [
    input("text", "Почта", "asd"),
    input("text", "Логин", "asd"),
    input("text", "Имя", "asd"),
    input("text", "Фамилия", "asd"),
    input("text", "Имя в чате", "asd"),
    input("text", "Телефон", "asd"),
  ],
  actions: [button("Сохранить", "saveNewProfData")],
});
