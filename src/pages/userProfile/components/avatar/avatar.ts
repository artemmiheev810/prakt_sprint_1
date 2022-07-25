import Handlebars from "handlebars";
import "./avatar.scss";

const ava = Handlebars.compile(`
    <div style='background-image: url("{{url}}")' class='inputAvatar'>
        <input type='file' id='avatarUpload' />
    </div>
`);
export const avatar = (url: string) => ava({ url });
