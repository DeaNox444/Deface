window.onload = function() {
	var champs = document.getElementsByTagName('input');
	for(var i=0;i<champs.length;i++) {	
		if(champs[i].type=='text') {
			champs[i].onkeypress = disableEnterKey;
		}
	}
}
 
function disableEnterKey(event) {
	var event = event || window.event;
	if(event.keyCode==13) {
		if (event.preventDefault) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			event.returnValue = false;
			event.cancelBubble = true;
		}		
	}
}
