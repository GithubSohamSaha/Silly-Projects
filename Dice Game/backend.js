/*
 This is my first Try, but not the final
*/

//For the first dice
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1; // 1-6
if (randomNumber1 === 1) {
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}else if (randomNumber1 === 2){
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}else if (randomNumber1 === 3){
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}else if (randomNumber1 === 4){
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}else if (randomNumber1 === 5){
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}else if (randomNumber1 === 6){
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

//For the second dice
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1; // 1-6
if (randomNumber2 === 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
  }else if (randomNumber2 === 2){
      document.querySelector(".img2").setAttribute("src", "images/dice2.png");
  }else if (randomNumber2 === 3){
      document.querySelector(".img2").setAttribute("src", "images/dice3.png");
  }else if (randomNumber2 === 4){
      document.querySelector(".img2").setAttribute("src", "images/dice4.png");
  }else if (randomNumber2 === 5){
      document.querySelector(".img2").setAttribute("src", "images/dice5.png");
  }else if (randomNumber2 === 6){
      document.querySelector(".img2").setAttribute("src", "images/dice6.png");
  }

//Alter the header  for the case of winner, loser or draw
if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"; 
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}