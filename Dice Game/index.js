/*
This is the final back in javascript of the dice game site.
*/

//For the first dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomImagePath1 = "images/dice" + randomNumber1 + ".png";// images/dice1.png - images/dice6.png
var image1 = document.querySelector(".img1").setAttribute("src", randomImagePath1);// Sets the src attribute of the first dice image element

//For the second dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomImagePath2 = "images/dice" + randomNumber2 + ".png";// images/dice1.png - images/dice6.png
var image2 = document.querySelector(".img2").setAttribute("src", randomImagePath2);// Sets the src attribute of the second dice image element

//Alter the header  for the case of winner, loser or draw
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"; 
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}