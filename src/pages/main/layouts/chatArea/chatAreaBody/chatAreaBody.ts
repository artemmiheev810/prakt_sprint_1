import Handlebars from "handlebars";
import "../chatArea.scss";

Handlebars.registerHelper("isImg", function (value) {
  return value == "img";
});

export const chatAreaBody = Handlebars.compile(`
<div class='chatArea-body'>
    <div class='chatArea-body__messages'>
        {{#each masgesList}}
            <div class='chatArea-body__date'>{{date}}</div> 
            {{#each list}}
                <div class='
                    {{#if isSelf}}
                        chatArea-body__ownMessage
                    {{else}}
                        chatArea-body__notOwnMessage
                    {{/if}}'>
                    {{#if (isImg type)}}
                        <div class='chatArea-body__img'>
                            <img src="{{imgSrc}}"/>
                        </div>
                    {{/if}}
                    {{text}}
                    <div class='chatArea-body__time'>
                        <div class='{{#if checked}}checked{{/if}}'></div>
                        {{time}}
                    </div>
                </div>
            {{/each}}
        {{/each}}
    </div>
</div>
`);
