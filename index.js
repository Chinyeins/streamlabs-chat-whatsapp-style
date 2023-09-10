// Please use event listeners to run functions.

let currentObj = {};
let lastObj = {};
const messageStyle = {
    "sent": "sent",
    "received": "received"
};
let isSentMessage = true;

document.addEventListener('onLoad', function (obj) {
    // obj will be empty for chat widget
    // this will fire only once when the widget loads
});

document.addEventListener('onEventReceived', function (obj) {
    currentObj = obj;
    console.log(currentObj);

    let messageId = currentObj.detail.messageId;
    let currentMessageObj = $('*[data-id="' + messageId + '"]');

    // //1. Mod and Owner messages displayed as sent
    // console.log(currentMessageObj);
    // if (currentObj.detail.payload.tags.mod === "1" || currentObj.detail.owner) {
    //     //
    // } else {
    //     currentMessageObj.toggleClass('' + messageStyle.sent + ' ' + messageStyle.received);
    // }

    //2. Only Owner message displayed as sent
    console.log(currentMessageObj);
    if (currentObj.detail.owner) {
        //
    } else {
        currentMessageObj.toggleClass('' + messageStyle.sent + ' ' + messageStyle.received);
    }

    if (!lastObj.detail) {
        lastObj = currentObj;
        return;
    }

    // //3. switch between sent and received message style, if username is different from message before...
    // if (currentObj.detail.from !== lastObj.detail.from) {
    //     isSentMessage = !isSentMessage;
    // }
    //
    // if (!isSent) {
    //     currentMessageObj.addClass('' + messageStyle.sent + '');
    // } else {
    //     currentMessageObj.addClass('' + messageStyle.received + '');
    // }

    //set last message from
    lastObj = currentObj;
});