let randomNum = Math.floor((Math.random()*100)+1);


const userInput = document.querySelector(".userInput");
const checkbtn =document.querySelector("#check");
const guess= document.querySelector(".previous-guesses");
const result = document.querySelector(".result");
const lowOrHigh = document.querySelector(".lowOrHigh");
const resultBox = document.querySelector(".result-box");
const colour = document.querySelector("body").backgroundColor;
let count=1;
let resetbtn;
resetbtn= document.createElement("button");
function checkGuess(){
    const userGuess = Number(userInput.value);
    if(count===1){
        guess.textContent="Previous Guesses: ";
        
    }

    guess.textContent= `${guess.textContent} ${userGuess}`;
    
    if(count===10){
        result.textContent="Oops! you lose the game";
        result.style.backgroundColor="chocolate";
        result.style.color="white";
        lowOrHigh.textContent="";
        startNewGame();
    }

        if(userGuess===randomNum){
            result.textContent="Congratulations, You've got it!";
            result.style.backgroundColor="green";
            result.style.color="white";
            startNewGame();
        }
        else if(userGuess>randomNum){
            result.textContent="Wrong!";
            result.style.backgroundColor="red";
            result.style.color="white";
            lowOrHigh.textContent="Last Guess was too High!";
        }
        else{
            result.textContent="Wrong!";
            result.style.backgroundColor="red";
            result.style.color="white";
            lowOrHigh.textContent="Last Guess was too Low!";
        }
        count++;
        userInput.focus();
        userInput.value="";
}

function resetGame(){
    count=1;
    const resetResultBox = document.querySelectorAll(".result-box p");
    for(const para of resetResultBox){
        para.textContent="";
    }
    result.style.backgroundColor = colour;
    checkbtn.disabled = false;
    userInput.disabled=false;
    resetbtn.parentNode.removeChild(resetbtn);
    randomNum = Math.floor((Math.random()*100)+1);
    userInput.textContent="";
    userInput.focus();
}

function startNewGame(){
    resultBox.append(resetbtn);
    resetbtn.textContent="start new game!";
    resetbtn.addEventListener("click",resetGame);
    checkbtn.disabled = true;
    userInput.disabled=true;
}

checkbtn.addEventListener("click", checkGuess);

