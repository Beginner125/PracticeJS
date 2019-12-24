var GameObject = function(name, x, y, width, height, img){
	this.name = name;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.img = img;
	this.init = function(){};
	this.updatePreDraw = function(context){};
	this.update = function(){};
	this.updateAfterDraw = function(context){};
	this.destory = function(){};
}
