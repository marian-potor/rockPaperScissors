var gameStartThree = document.getElementById("gameStartThree");
var gameStartFive = document.getElementById("gameStartFive");
var resetThreeWays = document.getElementById("resetThreeWays");
var resetFiveWays = document.getElementById("resetFiveWays");
var randomPickThree = document.getElementById('computerPickThreeWays');
var randomPickFive = document.getElementById('computerPickFiveWays');
var userScoreThreeWays = document.getElementById('yourScoreThree');
var computerScoreThreeWays = document.getElementById('computerScoreThree');
var userScoreFiveWays = document.getElementById('yourScoreFive');
var computerScoreFiveWays = document.getElementById('computerScoreFive');
gameStartThree.addEventListener("click", determineThree);
gameStartFive.addEventListener("click", determineFive);
resetThreeWays.addEventListener("click", resetThree);
resetFiveWays.addEventListener("click", resetFive);

function randomNumber(a){
    let random = Math.floor(Math.random()*Math.floor(a));
    return random;
}

function inspectRadio(radio){
    let value = '';
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked == true){
            value = radio[i].value;
        }
    }
    return value;
}

function convertNumbers(num){
    let value = '';
    switch (num) {
        case 0:
            value = 'rock';
            break;
        case 1:
            value = 'paper';
            break;
        case 2:
            value = 'scissors';
            break;
        case 3:
            value = 'lizard';
            break;
        case 4:
            value = 'Spock';
            break;
        default:
            break;
    }
    return value
}

function determineThree(){
    let result = '';
    let allButtons = document.getElementsByClassName('threeChoices');
    let userInput = inspectRadio(allButtons);
    let computerPick = convertNumbers(randomNumber(3));
    if (userInput == computerPick) {
        result = 'Same pick';
    }
    else{
        if ((userInput == 'rock' && computerPick == 'paper') || (userInput == 'paper' && computerPick == 'scissors') ||(userInput == 'scissors' && computerPick == 'rock')) {
            result = 'You lose!';
            computerScoreThreeWays.innerHTML = parseInt(computerScoreThreeWays.innerHTML) + 1;
        }
        else {
            result = 'You win!';
            userScoreThreeWays.innerHTML = parseInt(userScoreThreeWays.innerHTML) + 1;
        }
    }
    randomPickThree.innerHTML = ' ' + computerPick + ' / ' + result;
    // console.log(result);
    // console.log(userInput);
    // console.log(computerPick);
}

function determineFive(){
    let result = '';
    let allButtons = document.getElementsByClassName('fiveChoices');
    let userInput = inspectRadio(allButtons);
    let computerPick = convertNumbers(randomNumber(5));
    if (userInput == computerPick) {
        result = 'Same pick';
    }
    else{
        if ((userInput == 'rock' && (computerPick == 'paper' || computerPick == 'Spock')) || 
           (userInput == 'paper' && (computerPick == 'scissors' || computerPick == 'lizard')) ||
           (userInput == 'scissors' && (computerPick == 'rock' || computerPick == 'Spock')) ||
           (userInput == 'lizard' && (computerPick == 'rock' || computerPick == 'scissors')) ||
           (userInput == 'Spock' && (computerPick == 'paper' || computerPick == 'lizard'))){
            result = 'You lose!';
            computerScoreFiveWays.innerHTML = parseInt(computerScoreFiveWays.innerHTML) + 1;
        }
        else {
            result = 'You win!';
            userScoreFiveWays.innerHTML = parseInt(userScoreFiveWays.innerHTML) + 1;
        }
    }
    randomPickFive.innerHTML = ' ' + computerPick + ' / ' + result;
    // console.log(result);
    // console.log(userInput);
    // console.log(computerPick);
}

function resetThree(){
    userScoreThreeWays.innerHTML = "0";
    computerScoreThreeWays.innerHTML = "0";
    randomPickThree.innerHTML = "";
}

function resetFive(){
    userScoreFiveWays.innerHTML = "0";
    computerScoreFiveWays.innerHTML = "0";
    randomPickFive.innerHTML = "";
}



