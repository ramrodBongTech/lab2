function Game()
{
	this.canvas = document.createElement("canvas");
	this.ctx = this.canvas.getContext("2d");
	this.initCanvas();
	this.player = new Player();
	this.goal = new Goal();
	this.gravity = 5;
}

Game.prototype.test = function()
{
	console.log("test");
}

Game.prototype.update = function(e)
{
	game.player.keyboardInput(e);

	if(game.player.checkCollisions(game.goal))
	{
		game.goal.alive = false;
	}
}

Game.prototype.gameLoop = function()
{
	window.requestAnimationFrame(game.gameLoop);

	game.player.update();

	if(game.player.y >= 280)
	{
		game.player.velY = 0;
		game.player.y = 300;
	}
	else
	{
		game.player.velY += game.gravity;
	}

	game.draw();
}

Game.prototype.initCanvas = function()
{
	document.body.appendChild(this.canvas);
	this.canvas.width = window.innerWidth;
	this.canvas.height = window.innerHeight;
}

Game.prototype.draw = function()
{
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

	this.ctx.fillStyle = rgb(4,162,30);
	this.ctx.fillRect(0,400,this.canvas.width,50);

	if(this.goal.alive)
	{
		this.player.draw();
		this.goal.draw();
	}
	else
	{
		this.drawEnd();
	}
	
	//ctx.fillStyle = rgb(Math.random()*255,Math.random()*255,Math.random()*255);
	//ctx.fillRect(playerPos.x,playerPos.y,100,100);
}

Game.prototype.drawEnd = function()
{
	this.ctx.save();

	this.ctx.fillStyle = rgb(Math.random()*255,Math.random()*255,Math.random()*255);

	this.ctx.font = 'italic 40pt Calibri';

	this.ctx.textBaseline = "top";

	this.ctx.fillText("You Win!!",100,100);

	this.ctx.restore();
}

/*function for rgb for convenience*/
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

/*helper function*/
function clamp(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}