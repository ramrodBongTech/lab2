//global variables
var game = null;

function main()
{ 
	game = new Game();
	game.gameLoop();

	window.addEventListener("keypress", game.update);
}

