
var randomNumber1=Math.floor(Math.random()*6)+1; //1-6

var randomDiceImage= "dice" + randomNumber1 + ".png"; //dicel.png - dice6.png

var randomImageSource= "images/"+ randomDiceImage; //images/dicel.png- images/dice6.png


var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + (Math.floor(Math.random()*6)+1) + ".png"); //this is another way to do it

var randomNumber2=Math.floor(Math.random()*6)+1; 

var randomImageSource2= "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if player 1 wins, player 2 wins or draw
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🏆Player 1 Wins!";
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="🏆Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}