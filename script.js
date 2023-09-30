// Using Strict Mode
"use strict;"

// Game Logic
let randomNum = Math.random();
console.log(randomNum , randomNum * 20 , Math.trunc(randomNum * 20));
let secretNum = Math.trunc(randomNum * 20) + 1;
// document.querySelector(".number").textContent = secretNum;
console.log(secretNum);

let maxScore = 20;
let currentScore = maxScore;
// console.log(currentScore , typeof(currentScore));
let highestScore = 0;
let correctlyGuessed = false;

document.querySelector(".check").addEventListener("click" , function()
{
    const guessedString = document.querySelector(".guess").value;
    const guessedNum = Number(document.querySelector(".guess").value);

    // console.log(guessedString , " " , typeof(guessedString));
    // console.log(guessedNum , typeof(guessedNum));

    if(currentScore === 0)
    {
        document.querySelector(".message").textContent = "Game Over !!! Click on the Again button to play again !!!";
        let messageElement = document.querySelector(".message");
        messageElement.style.color = "#f70707";
    }
    else if(guessedString === "")
    {
        document.querySelector(".message").textContent = "No number guessed !!!";
    }
    else if(guessedNum <= 0 || guessedNum > 20)
    {
        document.querySelector(".message").textContent = "Invalid Guess !!!";
    }
    else
    {
        if(guessedNum === secretNum)
        {
            document.querySelector(".message").textContent = "Congratulations !!!";
            let messageElement = document.querySelector(".message");
            messageElement.style.color = "#65e625";
            correctlyGuessed = true;
            highestScore = currentScore;
            document.querySelector(".highestscore").textContent = highestScore;
        }
        else if(guessedNum < secretNum)
        {
            document.querySelector(".message").textContent = "Too Low !!!";
            if(correctlyGuessed === false)
            {
                currentScore -= 1;
                document.querySelector(".score").textContent = currentScore;
            }
        }
        else
        {
            document.querySelector(".message").textContent = "Too High !!!";
            if(correctlyGuessed === false)
            {
                currentScore--;
                document.querySelector(".score").textContent = String(currentScore);     
            }
        }
        if(currentScore === 0)
        {
            document.querySelector(".message").textContent = "Game Over !!! Click on the Again button to play again !!!";
            let messageElement = document.querySelector(".message");
            messageElement.style.color = "#f70707";
        }
    }
});


document.querySelector(".again").addEventListener("click" , () => {
    correctlyGuessed = false;
    currentScore = maxScore;
    document.querySelector(".score").textContent = currentScore;
    document.querySelector(".message").textContent = "Start guessing...";
    let messageElement = document.querySelector(".message");
    messageElement.style.color = "rgba(250, 234, 13, 0.914)"
    document.querySelector(".guess").value = "";
    randomNum = Math.random();
    console.log(randomNum , randomNum * 20 , Math.trunc(randomNum * 20));
    secretNum = Math.trunc(randomNum * 20) + 1;
    // document.querySelector(".number").textContent = secretNum;
    console.log(secretNum);
});