var listeners = new Array();
document.onkeydown = function(){
	var oEvent = window.event;
	for(var i = 0; i<listeners.length; i++){
		listeners[i].onkeydownEvent(oEvent);
	}
}
