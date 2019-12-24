var Listener = function(data){
	this.data = data;
	listeners.push(this);
	this.onkeydownEvent = function(event){
		console.log(event.keyCode);
	};
}
