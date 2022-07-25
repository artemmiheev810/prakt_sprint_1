import Handlebars from "handlebars";

const tmpl = Handlebars.compile(
  `
        <button class='profile__button' id='{{id}}'>{{text}}</button=>
    `
);

export const button = (text: string, id?: string) => tmpl({ text, id });
