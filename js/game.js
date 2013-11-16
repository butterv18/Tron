var canvas, ctx, sprites,
width = 960,
height = 540,
rightKey = false,
leftKey = false,
upKey = false,
downKey = false,
player1 = {
	width: 25,
	height: 25,
	x: 20,
	y: 20
},
player2 = {
	width: 25,
	height: 25,
	x: 900,
	y: 500
};

function clearCanvas() {
	ctx.clearRect(player1.x,player1.y,25,25);
}

function drawPlayers() {
	if (rightKey) {
		//Collision with East wall
		if(player1.x > 930){
			player1.x += 0;
			console.log('WALL!');
		}else{
			// If no collision continue
			ctx.fillRect(player1.x,player1.y + 12,15,3);
			player1.x += 5;
		}
	} else if (leftKey) {		
		if(player1.x < 0){
			player1.x -= 0;
			console.log('WALL!');
		}else{
			ctx.fillRect(player1.x + 15,player1.y + 12,15,3);
			player1.x -= 5;
		}
	} else if (upKey){
		if(player1.y < 0){
			player1.y -= 0;
			console.log('WALL!');
		}else{
			ctx.fillRect(player1.x + 10,player1.y + 10,3,15);
			player1.y -= 5;
		}
	}	else if (downKey){
		if(player1.y > 525){
			player1.y -= 0;
			console.log('WALL!');
		}else{
			ctx.fillRect(player1.x + 10,player1.y - 5,3,15);
			player1.y += 5;
		}
	}
	ctx.fillRect(player1.x,player1.y,player1.width,player1.height);
	ctx.fillRect(player2.x,player2.y,player2.width,player2.height);
    	
	  // Are the players touching?
	if (
		player1.x <= (player2.x + 25)
		&& player2.x <= (player1.x + 25)
		&& player1.y <= (player2.y + 25)
		&& player2.y <= (player1.y + 25)
		) {
		console.log('Player!');
	}
}

function loop() {
	clearCanvas();
	drawPlayers();
}

function keyDown(e) {
	if (e.keyCode == 39){
		rightKey = true;
		leftKey = false;
		upKey = false;
		downKey = false;
	}else if (e.keyCode == 37){
		rightKey = false;
		leftKey = true;
		upKey = false;
		downKey = false;
	}else if (e.keyCode == 38){
		rightKey = false;
		leftKey = false;
		upKey = true;
		downKey = false;
	}else if (e.keyCode == 40){
		rightKey = false;
		leftKey = false;
		upKey = false;
		downKey = true;
	}
}

// function keyUp(e) {
// 	if (e.keyCode == 39) rightKey = false;
// 	else if (e.keyCode == 37) leftKey = false;
// 	else if (e.keyCode == 38) upKey = false;
// 	else if (e.keyCode == 40) downKey = false;
// }

(function init() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	setInterval(loop, 1000/30);
	document.addEventListener('keydown', keyDown, false);
	// document.addEventListener('keyup', keyUp, false);
})();


