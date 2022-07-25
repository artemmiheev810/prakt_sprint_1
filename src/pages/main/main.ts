import { chatArea } from "./layouts/chatArea/chatArea";
import { chatList } from "./layouts/chatList/chatList";
import main_t from "./main.hbs";
import "./main.scss";

const body = (tr: boolean) => main_t({ body: chatArea(tr), sider: chatList });

export const main = (plug: boolean) => body(plug);
