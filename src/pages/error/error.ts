import button, { Ibutton } from "../../comp/button/button";
import Handlebars from "handlebars";
import "./error.scss";

const error = Handlebars.compile<{ error: string; errorText: string; button: Ibutton }>(`
    <div class = 'error-main'>
        <div class = 'error-content'>
           <div class = 'error-type'>{{error}}</div>  
           <div class = 'error-text'>{{errorText}}</div>
           {{{button }}}  
        </div>
    </div>
`);

export const errorPage = error;
