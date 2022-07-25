import tmpl from "./userProfilePassword.hbs";

import { avatar } from "../userProfile/components/avatar/avatar";
import { button } from "../userProfile/components/button/button";

import ava from "../../static/img/pics/3.jpg";
import back from "../../static/img/icons/sendBtn.svg";
import { input } from "./components/input/ipnut";

export const userProfilePassword = tmpl({
  backLink: back,
  avatar: avatar(ava),
  name: "Artyom",
  inputs: [
    input("password", "Введите старый пароль", ""),
    input("password", "Введите новый пароль", ""),
    input("password", "Повторите новый пароль", ""),
  ],
  actions: [button("Изменить", "saveNewProfPassword")],
});
