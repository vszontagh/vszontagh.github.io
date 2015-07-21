// steps
// 1, set the board
// 2, create players/ user imput,, empty aray for the selected moves
// 3, start the game /playermoves
// 4, if playermove = player 1 true

console.log('linked');
$(document).ready(function(){


/*********** game board setup ***********/
var board = $('#gameBoard');
$('.treeBy3').on('click', function(){	
	for (var i = 0; i < 9; i++) {
		var div = $('<div class= "tictac3">');
			div.attr("id", "box"+i);
			board.append(div);
	}
});
$('.fourBy4').on('click', function (){
	console.log('four')
	for (var i = 0; i < 12; i++) {
		var div = $('<div class= "tictac4">');
			div.attr("id", "box"+i);
			board.append(div);
	}
});

$('.fiveBy5').on('click', function(){
	for (var i = 0; i < 20; i++) {
	var div = $('<div class= "tictac5">');
			div.attr("id", "box"+i);
			board.append(div);
		}
})

/********* get user name input *********/

var input = $('input');
var players = [];
var button = $('button');

button.click(function(){
var player1 = $('.player1');
var player2 = $('.player2');
//	var input = $('input');
	players.push(input.val());
	if (players[0] === undefined){
		players.push(input.val());
		player1.text('The first player is: ' + players[0]);
	}
	else if (players[1] === undefined) {
		players.push(input.val());
		player2.text('The second player is: ' + players[1]);
	}
	else {
		player = turn(); // not working, always O start
	}

	console.log(players);
});

/********* player moves **********/

var winninCombo3 = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
	];
var winninCombo4 = [
	[0,1,2,3],
	[4,5,6,7],
	[8,9,10,11],
	[12,13,14,15],
	[0,4,8,12],
	[1,5,9,13],
	[2,6,10,14],
	[3,7,11,15],
	[0,5,10,15],
	[3,6,9,12]
	];
var winninCombo5 = [
	[0,1,2,3,4],
	[5,6,7,8,9],
	[10,11,12,13,14],
	[15,16,17,18,19],
	[20,21,22,23,24],
	[0,5,10,15,,20],
	[1,6,11,16,21],
	[2,7,12,17,22],
	[3,5,13,18,23],
	[4,9,14,19,24],
	[0,6,12,18,24],
	[4,8,12,16,20]
	];

var playerXMove = [];
var playerOMove = [];


// if (playerX === true) {

// else if (player1 === true) {
// 	player1 = false
// }

// $('.box').on('click', function(){
// 	for (var i = 0; i < value.length; i++) {
// 		var div = $('#box'+i);
// 		div.text(value[i]);
// 	}
// 	console.log(div);
// })


$('.box').on('click',function (){
//	for (var i=0; i < 9; i++) {
//	var click = $('#box['+i+'] option:selected');
	var click = $('.box option:selected');
	var div = $('.box');
	if (click % 2 === 0){
		div.text('X');
	} else {
		div.text('O');
	}
//	}
	console.log(event);
})


/***** change div bg image to a picture *****/
// $('.box').on('click',function (){
// 	var click = $('.box option:selected');
// 	var div = $('.box');
// 	var imgX = ('img/ticX.png');
// 	var imgO = ('img/ticO.png');
// 	if (click % 2 === 0){
// 		div.css.backgroundImage = 'url('+imgX+');'; // the picture not changes
// 	} else {
// 		div.css.backgroundImage = 'url('+imgO+');';
// 	}
// 	console.log(event);
// })

// true or false to player move, condition to not empty arrays

// function hasWinner() {

// }
// hasWinner()

});