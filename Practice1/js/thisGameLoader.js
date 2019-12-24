var gameLoader = new GameLoader(background);
var gameListener = new Listener(gameLoader);
gameListener.onkeydownEvent = function(event){
	console.log(event.keyCode);
	if(event.keyCode == 83){
		this.data.stop();
	}
	if(event.keyCode == 67){
		this.data.goOn();
	}
}
$(function(){
	gameLoader.init("game");
	gameLoader.addGameObject(background2);
	gameLoader.addGameObject(dinosaur);
	gameLoader.addGameObject(Cactus);
	gameLoader.begin();
})
