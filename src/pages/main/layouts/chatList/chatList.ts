import "./chatList.scss";

import list from "./chatList.hbs";
import ic from "../../../../static/img/icons/plus.svg";
import arrow from "../../../../static/img/icons/arrow.svg";
import search from "../../../../static/img/icons/search.svg";
import { input } from "../../../../comp/input/input";
import { people } from "./list";

const si = `<img src = "${search}" class="iconSearch"/>`;

export const chatList = list({
  iconAdd: ic,
  profile: arrow,
  search: input("Поиск"),
  iconSearch: si,
  people,
});
