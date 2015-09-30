function Goal()
{
	this.init();
	this.alive = true;
}

Goal.prototype.init = function()
{
	this.x = 400;
	this.y = 300;
	this.width = 100;
	this.height = 100;
}

Goal.prototype.draw = function()
{
	game.ctx = game.canvas.getContext("2d");
	game.ctx.strokeRect(this.x,this.y,this.width,this.height);
}