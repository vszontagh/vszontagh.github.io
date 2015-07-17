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
		input.attr('placeholder', 'Second player name');
	} else if (players[1] === undefined){
		players.push(input.val());
		player2.text('The second player is: ' + players[1]); 
		button.text('PLAY!!!!');	// set the buttom text to play, because none of the statement are met above (both player has value, no longer undefined)
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
console.log(playerMove);


//console.log(winingCombo);

function playerMove(player) {
	var box = $('.col'); 
	box.on('click', function (event) {
		console.log(event.target);			// only select the element which have been clicked, because I used the same class for all.

		if (player === 'playerX') { 		// && ($(this).text() !== allMove[i]))
	/***** change div bg image to a picture/ text *****/
			//box.css.('background-image','url(img/ticX.png);'); // the picture not changes
			if ($.isNumeric($(this).text())) {
				playerXMove.push(parseInt($(this).text()));
				$(this).text('X');
				$(this).css('color','red');
				player = "whatever";				// make sure that this statement is not hit till the next player's move is complete
				hasWinner()
			} else {
				alert('This was selected already. Choose another one!');
			}

		}
		else {
			//box.css.backgroundImage = 'url(img/ticO.png);';
			if ($.isNumeric($(this).text())) {
				playerOMove.push(parseInt($(this).text()));
				$(this).text('O');
				$(this).css('color','blue');
				player = "playerX";				// resets to player X to start the if else again
				hasWinner()
			}
			else {
				alert('This was selected already. Choose another one!');
			}
			
		}

		console.log(playerXMove);
		console.log(playerOMove);
	});
}

playerMove()

//var playerMove = playerMove();


var winingCombo = [
	[1,2,3],
	[4,5,6],
	[7,8,9],
	[1,4,7],
	[2,5,8],
	[3,6,9],
	[1,5,9],
	[3,5,7]
];

function hasWinner() {
	var winner;
	for (var i=0; i< winingCombo.length; i++) {
//console.log(i);
		for (var j= 0; j< winingCombo.length; j++) {
			debugger
//			console.log(j);
			if (playerXMove.indexOf(winingCombo[i][j]) !== -1 && playerXMove.indexOf(winingCombo[i][j+1]) !== -1 && playerOMove.indexOf(winingCombo[i][j+2]) !== -1) {
				
				winner = players[0];
				alert(winner + ' won the game!')
			}
			else if (playerOMove.indexOf(winingCombo[i][j]) !== -1 && playerXMove.indexOf(winingCombo[i][j+1]) !== -1 && playerOMove.indexOf(winingCombo[i][j+2]) !== -1) {
				winner = players[1]
				alert(winner + ' won the game!')
			}
		}
		return winner;
	}
}
//hasWinner()
// true or false to player move, condition to not empty arrays



});