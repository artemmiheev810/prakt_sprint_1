import Handlebars from "handlebars";
import "../chatArea.scss";

export const chatAreaFooter = Handlebars.compile(`
<div class='chatArea-foot'>
    <input id = 'upload' type='file' ></input>
    <label for='upload' class='chatArea-foot__clip'></label>
    <textarea placeholder='Сообщение'></textarea>  
    <div class='chatArea-foot__send'></div>
</div>
`);
