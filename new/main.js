// steps
// 1, set the board
// 2, create players/ user imput,, empty aray for the selected moves
// 3, start the game /playermoves
// 4, 

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
var submit = $('.submit');

submit.click(function(){
var player1 = $('.player1');
var player2 = $('.player2');
		

	if (players[0] === undefined )  {
		players.push(input.val());
		player1.text('The first player (o) is: ' + players[0]);
		input.attr('placeholder', 'Second player name');
	} else if (players[1] === undefined){
		players.push(input.val());
		player2.text('The second player (x) is: ' + players[1]); 
		//submit.text('Play');	// set the submit button text to play, because none of the statement are met above (both player has value, no longer undefined)
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
playerXMove = [];
playerOMove = [];



function turn() {
	var message = $('.message');
	var player1 = $('.player1');
	var player2 = $('.player2');
	var random = Math.floor((Math.random()*2)+1);
	if (random === 1) {
		playerMove = 'playerX';
		//message.text(players[1] + ' it\'s your turn! You start with \'O\'.');
	}
	else {
		playerMove = 'playerO';
		//message.text(players[0] + ' it\'s your turn! You start with \'O\'.'); /// not changed after each turn.
	}
	return playerMove;
}
console.log(playerMove);


//console.log(winningCombo);

function playerMove(player) {
	var box = $('.col');
	//var id = $('.col').
	box.on('click', function (event) {
//		console.log(event.target);			// only select the element which have been clicked, because I used the same class for all.

		if (player === 'playerX') { 

				// var board = ('.col');
				// board.

			if (!($(this).text())) {		// if the text is empty it let the player pic the position
				playerXMove.push(parseInt($(this).attr('id')));

				$(this).text('X');
				$(this).css('color','white');
				player = "whatever";				// make sure that this statement is not hit till the next player's move is complete
				hasWinner()
			}
			 else {
				alert('This was selected already. Choose another one!');
			}

		}
		else {
			//box.css.backgroundImage = 'url(img/ticO.png);';
			if (!($(this).text())) {
				playerOMove.push(parseInt($(this).attr('id')));
				//$(this).css('background-image', 'url(img/totO.png);')
				$(this).text('O');
				$(this).css('color','#4791FF');
				player = "playerX";				// resets to player X to start the if else again
				hasWinner()
			}
			else {
				alert('This was selected already. Choose another one!');
			}
			
		}

		console.log('X moves: ' + playerXMove);
		console.log('O moves: ' + playerOMove);
	});
}

playerMove()

winningCombo = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
];

var countX = 0;
var countO = 0;

function hasWinner() {
	var winner = '';
	var statX = $('.statX');
	var statO = $('.statO');
	console.log('X moves: ' + playerXMove);
	console.log('O moves: ' + playerOMove);
	for (var i=0; i<= winningCombo.length; i++) {

		for (var j= 0; j<= winningCombo.length; j++) {
			//debuger
//console.log(j);
			if (playerXMove.indexOf(winningCombo[i][j]) !== -1 && playerXMove.indexOf(winningCombo[i][j+1]) !== -1 && playerXMove.indexOf(winningCombo[i][j+2]) !== -1) {
				
				winner = players[1];
				countX++;
				console.log(countX);
				statX.text(players[1] + ' : ' + countX);
				$('.think').css('visibility', 'visible');
				$('.thinkWin').css('visibility', 'visible');
				$('.thinkWin').css('color', '#4791FF');
				$('.thinkWin').text(winner + ' won the game!');
			}
			else if (playerOMove.indexOf(winningCombo[i][j]) !== -1 && playerOMove.indexOf(winningCombo[i][j+1]) !== -1 && playerOMove.indexOf(winningCombo[i][j+2]) !== -1) {
				winner = players[0];
				countO++;
				console.log(countO);
				statO.text( players[0] + ' : ' + countO);
				$('.think').css('visibility', 'visible');
				$('.thinkWin').css('visibility', 'visible');
				$('.thinkWin').css('color', '#4791FF');
				$('.thinkWin').text(winner + ' won the game!');
				//alert(winner + ' won the game!');
			}
		}
		//return winner; // it mess up the whole function
	}
}

var reset = $('.reset');
reset.on('click', function() {
		location.reload();
});

var again = $('.again');

function playAgain() {
	again.on('click', function(){
		var board = $('.col');
		playerOMove=[];
		playerXMove=[];
		$('.think').css('visibility','hidden');
		$('.thinkWin').text('');	// remove the winning message
		board.text('');			// clear the board
	});	
}

playAgain()

// true or false to player move, condition to not empty arrays

});