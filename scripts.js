// coding challange

var playerOneHeight = 500;
var playerOneAge = 20;

var playerTwoHeight = 500;
var playerTwoAge = 20;

var playerThreeHeight = 500;
var playerThreeAge = 20;

var playerOneResult = playerOneHeight + playerOneAge * 5;
var playerTwoResult = playerTwoHeight + playerTwoAge * 5;
var playerThreeResult = playerThreeHeight + playerThreeAge * 5;

if(playerOneResult > playerTwoResult && playerOneResult > playerThreeResult) {
    console.log('Player One Wins with ' + playerOneResult + ' points!');
}
else if(playerTwoResult > playerOneResult && playerTwoResult > playerThreeResult) {
    console.log('Player Two Wins with ' + playerTwoResult + ' points!');
}
else if(playerThreeResult > playerOneResult && playerThreeResult > playerTwoResult) {
    console.log('Player Three Wins with ' + playerThreeResult + ' points!');
}
else {
    console.log('Draw');
}
