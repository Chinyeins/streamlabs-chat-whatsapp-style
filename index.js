// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
	// obj will be empty for chat widget
	// this will fire only once when the widget loads
});

let lastMessageFrom = "";
let messageStyle = "sent";


document.addEventListener('onEventReceived', function(obj) {
  	console.log(obj);
  	let currentFrom = obj.detail.from;	
  	let messageId = obj.detail.messageId;
  	let oldClassName = messageStyle;
    let newClassName = "";	
  
  	if(lastMessageFrom === currentFrom) {
      //is same user
      newClassName = "sent";
    } else {
      //is different user
      newClassName = "received";
    }
  	
  	//change style
  	changeMessageStyleCss(messageId, oldClassName, newClassName);
  	console.log(messageStyle)
  
  	//set last message from
	lastMessageFrom = obj.detail.from;
});

function changeMessageStyleCss(messageId, oldClassName, newClassName) {
  //get element by message Id
  let currentMessageObj = $('*[data-id="'+messageId+'"]');
  
  console.log(currentMessageObj);
  
  //set csss atribute on message element - change old style to new style
  currentMessageObj.toggleClass(''+oldClassName+' '+newClassName);
}