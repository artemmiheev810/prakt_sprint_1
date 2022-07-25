import "./button.scss";

import button_t from "./button.hbs";

export interface Ibutton {
  title: string;
  purpose?: string;
  type: "dark" | "light";
}

const button = ({ title, type, purpose }: Ibutton) => {
  let calssName = "";
  switch (type) {
    case "light":
      calssName = "button_light";
      break;
    case "dark":
    default:
      calssName = "button_dark";
  }
  return button_t({ title, purpose, class: calssName });
};
export default button;
