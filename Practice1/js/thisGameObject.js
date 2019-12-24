var backgroundImg = new Image();
backgroundImg.src = "img/背景.png";
var dinosaurImg = new Image();
dinosaurImg.src = "img/小恐龙1.png";
var CactusImg = new Image();
CactusImg.src = "img/仙人掌1.png";

var canvasWidth = 500;
var canvasHeight = 80;

var runSpeed = 3;
var score = 0;
var fontX = 400;
var fontY = 10;


var background = new GameObject("background", canvasWidth, 0, canvasWidth, canvasHeight, backgroundImg);
var background2 = new GameObject("background2", 0, 0, canvasWidth, canvasHeight, backgroundImg);
var dinosaur = new GameObject("dinosaur", 0, canvasHeight/1.6, 22, 22, dinosaurImg);
var Cactus = new GameObject("Cactus", canvasWidth, canvasHeight/1.6, 22, 22, CactusImg);
var dinosaurListener = new Listener(dinosaur);

dinosaur.imgs = new Array();
dinosaur.flag = 0;
dinosaur.state = 1;//0为静止，1为跑动，2为跳跃
dinosaur.initY = dinosaur.y;
dinosaur.time = 0;
for(var i = 1; i< 3; i++){
	var img = new Image();
	var src = "img/小恐龙"+i+".png";
	img.src = src;
	dinosaur.imgs.push(img);
}

background.updatePreDraw = function(context){
	context.fillStyle = 'white';
	context.fillRect(0,0,this.width, this.height);
}

background.update = function(){
	this.x -= runSpeed;
	if(this.x < -canvasWidth){
		this.x = canvasWidth;
	}
}

background2.update = function(){
	this.x -= runSpeed;
	if(this.x < -canvasWidth){
		this.x = canvasWidth;
	}
}

dinosaur.jump = function(){
	var v0 = -4.3;
	var a = 0.1;
	this.time += 1;
	var t = this.time%43;
	if(t == 0){
		this.state = 1;
		this.time = 0;
	}
	var x0 = this.initY;
	this.y = x0 + (v0*t + a*t*t);
}

dinosaur.run = function(){
	var rap = 5;
	if(this.flag < rap){
		this.img = this.imgs[0];
		this.flag += 1;
	}
	if(this.flag >= rap && this.flag < 2*rap ){
		this.img = this.imgs[1];
		this.flag += 1;
	}
	if(this.flag >= 2*rap && this.flag < 3*rap){
		this.flag = 0;
	}
}

dinosaur.update = function(){
	if(this.state == 1){
		this.run();
	}
	if(this.state == 2){
		this.jump();
	}
}

dinosaurListener.onkeydownEvent = function(event){
	if(event.keyCode == 32){
		this.data.state = 2;
	}
}

Cactus.update = function(){
	this.x -= runSpeed;
	if(this.x == -this.width){
		this.x = canvasWidth;
		score += 1;
	}
}

Cactus.updateAfterDraw = function(context){
	context.fillStyle = 'black';
	context.fillText("You jump! I jump!",0,10);
	context.fillText("your score："+score,fontX,fontY);
}
