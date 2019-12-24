var Power = function(speed, force){
	this.speed = speed;
	this.force = force;
	this.forceObject = function(pos){
		this.speed += force;
		pos += this.speed;
		return pos;
	}
}
