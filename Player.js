function Player()
{
	this.init();
}

Player.prototype.init = function()
{
	this.x = 0;
	this.y = 0;
	this.width = 100;
	this.height = 100;

	this.velY = 0;
	this.velX = 0;
}

Player.prototype.update = function()
{
	this.y += this.velY;
	this.x += this.velX;

	if(this.velX > 0)
	{
		this.velX --;
	}
	else if(this.velX < 0)
	{
		this.velX++;
	}
	else
	{
		this.velX = 0;
	}
}

Player.prototype.keyboardInput = function(e)
{
	if(e.keyCode == 119)			// Pressed 'W'
	{
		this.jump();
	}
	else if(e.keyCode == 97)		// Pressed 'A'
	{
		this.moveLeft();
	}
	
	if(e.keyCode == 100)		// Pressed 'D'
	{
		this.moveRight();
	}
}

Player.prototype.moveLeft = function(e)
{
	this.velX -= 10;
}

Player.prototype.moveRight = function(e)
{
	this.velX += 10;
}

Player.prototype.jump = function(e)
{
	this.velY -= 40;
}

Player.prototype.draw = function()
{
	game.ctx = game.canvas.getContext("2d");

	game.ctx.fillStyle = rgb(Math.random()*255,Math.random()*255,Math.random()*255);
	game.ctx.fillRect(this.x,this.y,this.width,this.height);
}

//The parameter e is the object you want to check is colliding with the player.
Player.prototype.checkCollisions = function (e)
{ 
    var collides=false;
         
    //do the two bounding boxes overlap?
    if ((this.x < e.x + e.width) &&
    (this.x + this.width > e.x) &&
    (this.y + this.height > e.y) &&
    (this.y < e.y + e.height) )
    {           
        collides = true;        
    }
     
    return collides;
};