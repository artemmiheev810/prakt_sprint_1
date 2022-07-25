import Handlebars from "handlebars";
import "./input.scss";
const tmpl = Handlebars.compile(`
<div class ='edit-input' >
    <label for='{{name}}'>{{name}}</label>
    <input type={{type}} value='{{#if value}} {{value}} {{else}}{{/if}}' id='{{name}}'/> 
</div>
`);

export const input = (type: "text" | "mail" | "password", name: string, value: string | number) =>
  tmpl({ type, name, value });
