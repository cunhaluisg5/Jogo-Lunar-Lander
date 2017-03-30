function Sprite(){
	this.x = 0;
	this.y = 0;
	this.vx = 0;
	this.vy = 0;
	this.ax = 0;
	this.ay = 0;
	this.vm = 150;
	this.g = 30;
	this.vidas = 0;
	this.color = "black";

	this.mover = function(dt){
		this.vx = this.vx + this.ax * dt;
		this.vy = this.vy + (this.ay + this.g) * dt;
		this.x = this.x + this.vx * dt;
		this.y = this.y + this.vy * dt;
	}

	this.desenhar = function(ctx){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, 10, 10);
	}

	this.colidiuComBase = function(alvo){
		if(this.y+10 < alvo.y) return false;
    	if(this.y > alvo.y+10) return false;
    	if(this.x+10 < alvo.x) return false;
    	if(this.x > alvo.x+10) return false;    
    	return true;
	}

	this.colidiuComLimites = function(alvo){
		return (this.x < 0 || this.x > alvo.width || this.y < 0 || this.y > alvo.height);
	}
}