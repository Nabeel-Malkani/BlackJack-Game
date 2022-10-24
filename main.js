let cardpick;
let score = 0;
let CardArray = []
let canplay = true
let haveBlackjack = false

const startgame = () => {
    document.getElementById("head-el").innerText = "Choose a Card";

}

const playgame = () => {
    if(haveBlackjack === false && canplay === true)
    {
        cardpick = Math.floor(Math.random() * 10) + 2;
        score += cardpick;
        displaycard(cardpick,score);
    }
}
debugger
const displaycard = (cardpicked,score) => {
    if(haveBlackjack === false && canplay === true){
        let prev_record = " " + cardpicked + "  ";
        document.getElementById("card-el").innerText += prev_record;
        document.getElementById("score-el").innerText = "SCORE: " + score;
        
        if(score == 21){
            document.getElementById("head-el").innerText = "You got BlackJack! Congratulations!!!";
            document.getElementById("card-el").innerText;
            document.getElementById("score-el").innerText = "SCORE: " + score;
            haveBlackjack === true;
            canplay === false;
        }
        else if(score < 21){
            document.getElementById("head-el").innerText = "Keep going! Choose next!";
            canplay === true;
        }
        else{
            debugger
            document.getElementById("head-el").innerText = "And You Lost!!! Better Luck next time!";
            document.getElementById("card-el").innerText;
            document.getElementById("score-el").innerText = "SCORE: " + score;
            canplay === false;
        }
    }
}

const reset = () => {
    document.getElementById("card-el").textContent = "CARDS: ";
    document.getElementById("score-el").textContent = "SCORE: ";
    document.getElementById("head-el").textContent = "Ready to play? Let's Go!";
    score = 0;
}


