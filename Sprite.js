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
	this.nivel = 1;
	this.color = "black";

	this.mover = function(dt){
		this.vx = this.vx + this.ax * dt;
		this.vy = this.vy + (this.ay + this.g) * dt;
		this.x = this.x + this.vx * dt;
		this.y = this.y + this.vy * dt;
	}

	this.desenhar = function(ctx){
		if(pc.vidas > 0 && pc.nivel < 11){
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x, this.y, 10, 10);
		}
		else if(pc.vidas == 0){
				ctx.fillStyle = "orange";
				ctx.strokeStyle = "black";
				ctx.font = "2em Arial";
				var texto = "Você Perdeu!";
				ctx.fillText(texto, 100, 100);
				ctx.strokeText(texto, 100, 100);
				ctx.fillStyle = "white";
				ctx.strokeStyle = "black";
				ctx.font = "1.1em sans-serif";
				var texto = "Tecle ENTER para reiniciar";
				ctx.fillText(texto, 90, 130);
				ctx.strokeText(texto, 90, 130);
				this.vx = 0;
				this.vy = 0;
			 }else if(pc.nivel > 10){
					ctx.fillStyle = "orange";
					ctx.strokeStyle = "black";
					ctx.font = "2em Arial";
					var texto = "Você Venceu!";
					ctx.fillText(texto, 100, 100);
					ctx.strokeText(texto, 100, 100);
					ctx.fillStyle = "white";
					ctx.strokeStyle = "black";
					ctx.font = "1.1em sans-serif";
					var texto = "Tecle ENTER para reiniciar";
					ctx.fillText(texto, 90, 130);
					ctx.strokeText(texto, 90, 130);
					this.vx = 0;
					this.vy = 0;
				   }
	}
	
	this.desenhaFPS = function(){
		if(pc.nivel < 11 && pc.vidas > 0){
			ctx.strokeStyle = "black";
			ctx.font = "1em Arial Black";
			ctx.strokeText("Fps: " + Math.floor(1 / dt), 160, 20);
		}
	}
	
	this.desenhaVidas = function(){
		if(pc.nivel < 11 && pc.vidas > 0){
			ctx.fillStyle = "yellow";
			ctx.strokeStyle = "red";
			ctx.font = "1em Arial Black";
			ctx.fillText("Vidas: " + pc.vidas, 10, 20);
			ctx.strokeText("Vidas: " + pc.vidas, 10, 20);
		}
	}

	this.desenhaNivel = function(){
		if(pc.nivel < 11 && pc.vidas > 0){
			ctx.fillStyle = "yellow";
			ctx.strokeStyle = "black";
			ctx.font = "1em Arial Black";
			var texto = "Nível: " + this.nivel;
			ctx.fillText(texto, 320, 20);
			ctx.strokeText(texto, 320, 20);
		}
	}

	this.colidiuComBase = function(alvo){
		if(this.y+10 < alvo.y) return false;
    	if(this.y > alvo.y+10) return false;
    	if(this.x+10 < alvo.x) return false;
    	if(this.x > alvo.x+10) return false;    
    	return true;
	}

	this.colidiuComLimites = function(alvo){
		return (this.x < 0 || this.x+10 > alvo.width || this.y < 0 || this.y+10 > alvo.height);
	}
}