import Handlebars from "handlebars";
import { chatAreaHead } from "./chatAreaHead/chatAreaHead";
import { chatAreaBody } from "./chatAreaBody/chatAreaBody";
import { chatAreaFooter } from "./chatAreaFoot/chatAreaFooter";

import img1 from "../../../../static/img/pics/1.png";
import img2 from "../../../../static/img/pics/2.jpg";

import tmpl from "./chatArea.hbs";
import "./chatArea.scss";

const masges = [
  {
    date: "12.03.20",
    list: [
      {
        type: "img",
        isSelf: false,
        time: "11:56",
        imgSrc: img1,
        text: "how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? ",
      },
      {
        type: "text",
        isSelf: false,
        time: "11:56",
        text: "how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? ",
      },
      {
        type: "text",
        isSelf: false,
        time: "11:56",
        text: "how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? ",
      },
      {
        type: "text",
        isSelf: true,
        time: "11:56",
        text: "how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? ",
      },
      {
        type: "text",
        isSelf: false,
        time: "11:56",
        text: "how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? ",
      },
    ],
  },
  {
    date: "14.03.20",
    list: [
      {
        type: "img",
        imgSrc: img2,
        isSelf: true,
        time: "11:56",
        text: "how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? ",
      },
      {
        type: "text",
        isSelf: true,
        time: "11:56",
        text: "how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? ",
      },
      {
        type: "text",
        isSelf: false,
        time: "11:56",
        text: "how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? ",
      },
      {
        type: "text",
        isSelf: true,
        checked: true,
        time: "11:56",
        text: "how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? ",
      },
      {
        type: "text",
        isSelf: false,
        time: "11:56",
        text: "how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? ",
      },
      {
        type: "text",
        isSelf: false,
        time: "11:56",
        text: "how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? how u doin? ",
      },

      {
        type: "text",
        isSelf: false,
        time: "11:56",
        text: "how u doin?",
      },
      {
        type: "text",
        isSelf: true,
        time: "11:56",
        text: "nice, u?",
      },
    ],
  },
  {
    date: "30.07.24",
    list: [
      {
        type: "text",
        isSelf: true,
        time: "11:56",
        text: "why don't you answer",
      },
    ],
  },
];

type Type = "img" | "text";
interface Imes {
  data: string;
  list: {
    tipe: Type;
    isSelf: boolean;
    time: string;
    imgSrc?: string;
    text?: string;
  };
}

const plugBlock = Handlebars.compile(`<div class="chatArea__plug">{{body}}</div>`)({
  body: "Выберите чат чтобы отправить сообщение",
});

const head = chatAreaHead({ name: "name" });
const cont = chatAreaBody({ masgesList: masges });
const foot = chatAreaFooter({ text: "footer" });

export const chatArea = (plug: boolean) => tmpl({ foot, head, cont, isPlug: plug, plugBlock });
