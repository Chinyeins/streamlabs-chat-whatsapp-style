// Please use event listeners to run functions.

let currentObj = {};
let lastObj = {};
const messageStyle = {
    "sent": "sent",
    "received": "received"
};
let isSentMessage = true;

document.addEventListener('onLoad', function(obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});

document.addEventListener('onEventReceived', function(obj) {
    currentObj = obj;
    console.log(currentObj);

    let messageId = currentObj.detail.messageId;

    if(!lastObj.detail) {
        lastObj = currentObj;
        return;
    }

    if(currentObj.detail.from !== lastObj.detail.from) {
        isSentMessage = !isSentMessage; //flip bool
    }

    //change style
    changeMessageStyleCss(messageId, isSentMessage);

    //set last message from
    lastObj = currentObj;
});

function changeMessageStyleCss(messageId, isSent) {
    //get element by message Id
    let currentMessageObj = $('*[data-id="'+messageId+'"]');
    console.log(currentMessageObj);

    if(!isSent) {
        currentMessageObj.toggleClass(''+messageStyle.sent+' '+messageStyle.received);
    }
}