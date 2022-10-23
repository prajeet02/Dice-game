var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceimage1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDiceimage1);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceimage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceimage2);

if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player2wins 🚩"
}

else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player1wins"
}
else{
    
    document.querySelector("h1").innerHTML = "Draw";
}