// steps
// 1, set the board
// 2, create players/ user imput,, empty aray for the selected moves
// 3, start the game /playermoves
// 4, if playermove = player 1 true

console.log('linked');
$(document).ready(function(){


/*********** game board setup ***********/
// all setup done in html
// var board = $('#gameBoard');

// for (var i = 0; i < 9; i++) {
// var row = $('<div class= "row">');
// 		div.attr('id', 'box'+i);

// 		board.append(row);
// }

/********* get user name input *********/

var input = $('input');
var players = [];
var button = $('button');

button.click(function(){
var player1 = $('.player1');
var player2 = $('.player2');

	if (players[0] === undefined )  {
		players.push(input.val());
		player1.text('The first player is: ' + players[0]);
	} else if (players[1] === undefined){
		players.push(input.val());
		player2.text('The second player is: ' + players[1]); // should only appear if it's defined
		input.attr("placeholder", "second player name")
		button.text('PLAY!!!!')
	} else {
		player = turn();
	}

	// players.push(input.val());
	// if (players[0] !== null  players[1] !== null) {
	// 	player1.text('The first player is: ' + players[0]);
	// 	player2.text('The second player is: ' + players[1]); // should only appear if it's defined
	// }

	console.log(input.val());
	console.log(players);
});

/********* player moves **********/

var winingCombo = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
//var winninCombo = [7,56,448,73,146,292,273,84];
var playerXMove = [];
var playerOMove = [];


function turn() {
	var message = $('.message');
	var player1 = $('.player1');
	var player2 = $('.player2');
	var random = Math.floor((Math.random()*2)+1);
	if (random === 1) {
		playerMove = 'playerX';
		message.text(player1 + ' it\'s your turn!');
	}
	else {
		playerMove = 'playerO';
		message.text(player2 + ' it\'s your turn!')
	}
	return playerMove;
}
//var player = turn();
//turn()
console.log(playerMove);

function playerMove(player) {
	var box = $('.col'); 
	box.on('click', function (event) {
		console.log(event.target);			// only select the element which have been clicked, because I used the same class for all.

		if (player === 'playerX') {
		playerXMove.push($(this).text());
			player = "whatever"				// make sure that this statement is not hit till the next player's move is complete
		}
		else {
			playerOMove.push($(this).text());
			player = "playerX"				// resets to player X to start the if else again
		}

		console.log(playerXMove);
		console.log(playerOMove);
	});
}

playerMove()
// true or false to player move, condition to not empty arrays



});