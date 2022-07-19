// For values.
let statusValues = document.getElementsByClassName("status-value");
// Scores value.
statusValues[0].innerHTML = "0";
// Lives value.
statusValues[1].innerHTML = "3";

let colorContainerItems = document.getElementsByClassName("color-container's-items");
let i;
// Looping for different colors and displaying each item.
for (i = 0; i < colorContainerItems.length; i++) {
    colorContainerItems[i].style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
}

// Making random right answer.
let randomRightAnswer = Math.floor(Math.random() * 9);
i = randomRightAnswer;
let colorQuestion = document.getElementsByClassName("questions-container's-question");
colorQuestion[0].innerHTML = colorContainerItems[i].style.backgroundColor;

// Here, where you can find the answer from 0 to 8.
colorContainerItems[0].addEventListener("click", colorCheck0, false);
colorContainerItems[1].addEventListener("click", colorCheck1, false);
colorContainerItems[2].addEventListener("click", colorCheck2, false);
colorContainerItems[3].addEventListener("click", colorCheck3, false);
colorContainerItems[4].addEventListener("click", colorCheck4, false);
colorContainerItems[5].addEventListener("click", colorCheck5, false);
colorContainerItems[6].addEventListener("click", colorCheck6, false);
colorContainerItems[7].addEventListener("click", colorCheck7, false);
colorContainerItems[8].addEventListener("click", colorCheck8, false);

// Here, when your score is reached to 500, then you will receive 1 bonus live. And then the scoreGoal variable will add up to another 500, to get another bonus live.
let scoreGoal = 500;

// Get the tag value.
let theAnswerIs = document.getElementById("the-answer-is");

// Get the tag value.
let result = document.getElementById("result");

// These colorCheck0 to 8 function, is here where you will find the real answer.
function colorCheck0 () {
    // Here, it checks whetever your answer is correct or not.
    if (colorContainerItems[0].style.backgroundColor == colorQuestion[0].innerHTML) {
        // If your answer is correct, then you will get the score of 100.
        statusValues[0].innerHTML = parseInt(statusValues[0].innerHTML) + 100;
        // If your score is reached as scoreGoal variable, then you will get another bonus live.
        if (statusValues[0].innerHTML == scoreGoal) {
            statusValues[1].innerHTML++;

            // Then the scoreGoal variable will set it to bigger requirements to get another bonus live.
            scoreGoal += 500;
        }

        theAnswerIs.innerHTML = "";
        theAnswerIs.style.margin = "0% 0% 0% 0%";

        correct();

    } else {
        // If your answer is not correct, it will cost your live to 1.
        statusValues[1].innerHTML = parseInt(statusValues[1].innerHTML) - 1;

        wrong();
        // If your lives is 0 based on the condition, you will be given a Game Over message.
        if (statusValues[1].innerHTML == 0) {
            theAnswerIs.innerHTML = "";
            theAnswerIs.style.margin = "0% 0% 0% 0%";

            gameOver();
        }
    }
}

// Same process as colorCheck0 function.
function colorCheck1 () {
    if (colorContainerItems[1].style.backgroundColor == colorQuestion[0].innerHTML) {
        statusValues[0].innerHTML = parseInt(statusValues[0].innerHTML) + 100;
        if (statusValues[0].innerHTML == scoreGoal) {
            statusValues[1].innerHTML++;

            scoreGoal += 500;
        }

        theAnswerIs.innerHTML = "";
        theAnswerIs.style.margin = "0% 0% 0% 0%";

        correct();

    } else {
        statusValues[1].innerHTML = parseInt(statusValues[1].innerHTML) - 1;

        wrong();
        if (statusValues[1].innerHTML == 0) {
            theAnswerIs.innerHTML = "";
            theAnswerIs.style.margin = "0% 0% 0% 0%";

            gameOver();
        }
    }
}

// Same process as colorCheck0 function.
function colorCheck2 () {
    if (colorContainerItems[2].style.backgroundColor == colorQuestion[0].innerHTML) {
        statusValues[0].innerHTML = parseInt(statusValues[0].innerHTML) + 100;
        if (statusValues[0].innerHTML == scoreGoal) {
            statusValues[1].innerHTML++;

            scoreGoal += 500;
        }

        theAnswerIs.innerHTML = "";
        theAnswerIs.style.margin = "0% 0% 0% 0%";

        correct();

    } else {
        statusValues[1].innerHTML = parseInt(statusValues[1].innerHTML) - 1;

        wrong();
        if (statusValues[1].innerHTML == 0) {
            theAnswerIs.innerHTML = "";
            theAnswerIs.style.margin = "0% 0% 0% 0%";

            gameOver();
        }
    }
}

// Same process as colorCheck0 function.
function colorCheck3 () {
    if (colorContainerItems[3].style.backgroundColor == colorQuestion[0].innerHTML) {
        statusValues[0].innerHTML = parseInt(statusValues[0].innerHTML) + 100;
        if (statusValues[0].innerHTML == scoreGoal) {
            statusValues[1].innerHTML++;

            scoreGoal += 500;
        }

        theAnswerIs.innerHTML = "";
        theAnswerIs.style.margin = "0% 0% 0% 0%";

        correct();

    } else {
        statusValues[1].innerHTML = parseInt(statusValues[1].innerHTML) - 1;

        wrong();
        if (statusValues[1].innerHTML == 0) {
            theAnswerIs.innerHTML = "";
            theAnswerIs.style.margin = "0% 0% 0% 0%";

            gameOver();
        }
    }
}

// Same process as colorCheck0 function.
function colorCheck4 () {
    if (colorContainerItems[4].style.backgroundColor == colorQuestion[0].innerHTML) {
        statusValues[0].innerHTML = parseInt(statusValues[0].innerHTML) + 100;
        if (statusValues[0].innerHTML == scoreGoal) {
            statusValues[1].innerHTML++;

            scoreGoal += 500;
        }

        theAnswerIs.innerHTML = "";
        theAnswerIs.style.margin = "0% 0% 0% 0%";

        correct();

    } else {
        statusValues[1].innerHTML = parseInt(statusValues[1].innerHTML) - 1;

        wrong();
        if (statusValues[1].innerHTML == 0) {
            theAnswerIs.innerHTML = "";
            theAnswerIs.style.margin = "0% 0% 0% 0%";

            gameOver();
        }
    }
}

// Same process as colorCheck0 function.
function colorCheck5 () {
    if (colorContainerItems[5].style.backgroundColor == colorQuestion[0].innerHTML) {
        statusValues[0].innerHTML = parseInt(statusValues[0].innerHTML) + 100;
        if (statusValues[0].innerHTML == scoreGoal) {
            statusValues[1].innerHTML++;

            scoreGoal += 500;
        }

        theAnswerIs.innerHTML = "";
        theAnswerIs.style.margin = "0% 0% 0% 0%";

        correct();

    } else {
        statusValues[1].innerHTML = parseInt(statusValues[1].innerHTML) - 1;

        wrong();
        if (statusValues[1].innerHTML == 0) {
            theAnswerIs.innerHTML = "";
            theAnswerIs.style.margin = "0% 0% 0% 0%";

            gameOver();
        }
    }
}

// Same process as colorCheck0 function.
function colorCheck6 () {
    if (colorContainerItems[6].style.backgroundColor == colorQuestion[0].innerHTML) {
        statusValues[0].innerHTML = parseInt(statusValues[0].innerHTML) + 100;
        if (statusValues[0].innerHTML == scoreGoal) {
            statusValues[1].innerHTML++;

            scoreGoal += 500;
        }

        theAnswerIs.innerHTML = "";
        theAnswerIs.style.margin = "0% 0% 0% 0%";

        correct();

    } else {
        statusValues[1].innerHTML = parseInt(statusValues[1].innerHTML) - 1;

        wrong();
        if (statusValues[1].innerHTML == 0) {
            theAnswerIs.innerHTML = "";
            theAnswerIs.style.margin = "0% 0% 0% 0%";

            gameOver();
        }
    }
}

// Same process as colorCheck0 function.
function colorCheck7 () {
    if (colorContainerItems[7].style.backgroundColor == colorQuestion[0].innerHTML) {
        statusValues[0].innerHTML = parseInt(statusValues[0].innerHTML) + 100;
        if (statusValues[0].innerHTML == scoreGoal) {
            statusValues[1].innerHTML++;

            scoreGoal += 500;
        }

        theAnswerIs.innerHTML = "";
        theAnswerIs.style.margin = "0% 0% 0% 0%";

        correct();

    } else {
        statusValues[1].innerHTML = parseInt(statusValues[1].innerHTML) - 1;

        wrong();
        if (statusValues[1].innerHTML == 0) {
            theAnswerIs.innerHTML = "";
            theAnswerIs.style.margin = "0% 0% 0% 0%";

            gameOver();
        }
    }
}

// Same process as colorCheck0 function.
function colorCheck8 () {
    if (colorContainerItems[8].style.backgroundColor == colorQuestion[0].innerHTML) {
        statusValues[0].innerHTML = parseInt(statusValues[0].innerHTML) + 100;
        if (statusValues[0].innerHTML == scoreGoal) {
            statusValues[1].innerHTML++;

            scoreGoal += 500;
        }

        theAnswerIs.innerHTML = "";
        theAnswerIs.style.margin = "0% 0% 0% 0%";

        correct();

    } else {
        statusValues[1].innerHTML = parseInt(statusValues[1].innerHTML) - 1;

        wrong();
        if (statusValues[1].innerHTML == 0) {
            theAnswerIs.innerHTML = "";
            theAnswerIs.style.margin = "0% 0% 0% 0%";

            gameOver();
        }
    }
}

// This function will get you to the next level, if your answer is correct.
function changeLevel () {
    let colorContainer = document.getElementById("color-container");
    colorContainer.style.border = "";
    colorContainer.style.backgroundImage = "";
    colorContainer.style.backgroundRepeat = "";
    colorContainer.style.backgroundSize = "";

    // Displaying color items.
    for (let i = 0; i < colorContainerItems.length; i++) {
        colorContainerItems[i].style.display = "initial";
    }
    
    // Looping for different colors each item.
    for (i = 0; i < colorContainerItems.length; i++) {
        colorContainerItems[i].style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    }

    // Making random right answer.
    randomRightAnswer = Math.floor(Math.random() * 9);
    i = randomRightAnswer;
    colorQuestion = document.getElementsByClassName("questions-container's-question");
    colorQuestion[0].innerHTML = colorContainerItems[i].style.backgroundColor;

    // Here, where you can find the answer from 0 to 8.
    colorContainerItems[0].addEventListener("click", colorCheck0, false);
    colorContainerItems[1].addEventListener("click", colorCheck1, false);
    colorContainerItems[2].addEventListener("click", colorCheck2, false);
    colorContainerItems[3].addEventListener("click", colorCheck3, false);
    colorContainerItems[4].addEventListener("click", colorCheck4, false);
    colorContainerItems[5].addEventListener("click", colorCheck5, false);
    colorContainerItems[6].addEventListener("click", colorCheck6, false);
    colorContainerItems[7].addEventListener("click", colorCheck7, false);
    colorContainerItems[8].addEventListener("click", colorCheck8, false);

    result.innerHTML = "";
    result.setAttribute("disabled", "");
}

// If your answer is correct, it will give you the Correct message.
function correct () {
    result.innerHTML = "Correct! Click this, for the next level.";
    result.style.color = "#00ff00";
    result.style.textDecoration = "underline";
    result.style.margin = "3% 0%";
    result.addEventListener("mouseover", cursor, false);
    result.setAttribute("onclick", "changeLevel()");

    // Clearing the display of color items.
    for (let i = 0; i < colorContainerItems.length; i++) {
        colorContainerItems[i].style.display = "none";
    }

    let colorContainer = document.getElementById("color-container");
    colorContainer.style.border = "3px solid #00ff00";
    colorContainer.style.backgroundImage = "url('images/odd-eyed\ cat.jfif')";
    colorContainer.style.backgroundRepeat = "no-repeat";
    colorContainer.style.backgroundSize = "100%";
}

// If your answer is wrong, it will give you the Wrong message.
function wrong () {
    theAnswerIs.innerHTML = "Wrong!";
    theAnswerIs.style.color = "#ff0000";
    theAnswerIs.style.textAlign = "center";
    theAnswerIs.style.fontSize = "24px";
    theAnswerIs.style.margin = "6% 0% 0% 0%";
}

// If your lives is 0 then, it will give you the Game Over message.
function gameOver () {
    result.innerHTML = "Game Over! Click this, to restart the game.";
    result.style.color = "#ff0000";
    result.style.textDecoration = "underline";
    result.style.margin = "3% 1%";
    result.addEventListener("mouseover", cursor, false);
    result.setAttribute("onclick", "restartTheGame()");

    for (let i = 0; i < colorContainerItems.length; i++) {
        colorContainerItems[i].style.display = "none";
    }

    let colorContainer = document.getElementById("color-container");
    colorContainer.style.border = "3px solid #ff0000";
    colorContainer.style.backgroundImage = "url('images/crying-cat.jpg')";
    colorContainer.style.backgroundRepeat = "no-repeat";
    colorContainer.style.backgroundSize = "100%";
}

// Restart the game if your game is over.
function restartTheGame () {
    window.location.reload();
}

function cursor () {
    result.style.cursor = "pointer";
}