var GameLoader = function(background){
	this.background = background;
	this.gameObjects = new Array();
	this.context = null;
	this.timer = null;
	this.rap = 16;
	this.draw = function(gameObject){
		if(gameObject.img != null){
			this.context.drawImage(gameObject.img, gameObject.x, gameObject.y, gameObject.width, gameObject.height);
		}
	};
	this.clearAllDraw = function(){
		this.draw(this.background);
	};
	this.init = function(canvasId){
		var canvas = document.getElementById(canvasId);
		var width = document.getElementById(canvasId).getAttribute("width");
		var height = document.getElementById(canvasId).getAttribute("height");
		this.context = canvas.getContext("2d");
		this.context.strokeRect(0, 0, 500, height);
	};
	this.addGameObject = function(gameObject){
		this.gameObjects.push(gameObject);
	};
	this.destoryGameObject = function(gameObject){
		for(var i = 0; i<this.gameObjects.length; i++){
			if(this.gameObjects[i].name == gameObject){
				this.gameObjects[i].destory();
				this.gameObjects[i].splice(i, 1);
			}
		}
	};
	this.loopProcess = function(obj){
		obj.background.update();
		for(var i = 0; i<obj.gameObjects.length; i++){
			obj.gameObjects[i].update();
		}
		obj.background.updatePreDraw(obj.context);
		obj.clearAllDraw();
		obj.background.updateAfterDraw(obj.context);
		for(var i = 0; i<obj.gameObjects.length; i++){
			obj.gameObjects[i].updatePreDraw(obj.context);
		}
		for(var i = 0; i<obj.gameObjects.length; i++){
			obj.draw(obj.gameObjects[i]);
		}
		for(var i = 0; i<obj.gameObjects.length; i++){
			obj.gameObjects[i].updateAfterDraw(obj.context);
		}
	};
	this.begin = function(){
		this.background.init();
		for(var i = 0; i<this.gameObjects.length; i++){
			this.gameObjects[i].init();
		}
		this.background.updatePreDraw(this.context);
		this.clearAllDraw();
		this.background.updateAfterDraw(this.context);
		for(var i = 0; i<this.gameObjects.length; i++){
			this.gameObjects[i].updatePreDraw(this.context);
		}
		for(var i = 0; i<this.gameObjects.length; i++){
			this.draw(this.gameObjects[i]);
		}
		for(var i = 0; i<this.gameObjects.length; i++){
			this.gameObjects[i].updateAfterDraw(this.context);
		}
		var obj = this; 
		var loopProcess = this.loopProcess;
		var loop = function(){
			loopProcess(obj);
		}
		this.timer = window.setInterval(loop, this.rap);
	};
	this.stop = function(){
		window.clearInterval(this.timer);
	};
	this.goOn = function(){
		window.clearInterval(this.timer);
		var obj = this; 
		var loopProcess = this.loopProcess;
		var loop = function(){
			loopProcess(obj);
		}
		this.timer = window.setInterval(loop, this.rap);
	};
	this.restart = function(){
		
	};
}

