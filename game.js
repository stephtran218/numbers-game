const inputElement = document.getElementById("input");
const buttonElement = document.getElementById("button");
const resultsElement = document.getElementById("results");

var luckyNumber = Math.floor((Math.random () * 24)+1);
//This generates a lucky number



function checkAnswer(){
    let userGuess = inputElement.value; 
//This function has the job of checking if the input value is correct.

    if (userGuess > luckyNumber) { //This compares if the input was higher than the correct value.
        resultsElement.innerText = "Incorrect! You guessed too high. Try again."; //This will display if the guess was too high.
        resultsElement. style.color = "red"; //The text color will change to red because it was a wrong guess.
        inputElement.value = ""; //This resets the input back to blank for a new guess.
    } else if (userGuess < luckyNumber) { //This generates a new number for the user's additonal tries.
        resultsElement.innerText = "Incorrect! You guessed too low. Try again."; //This compares if guess was too low.
        resultsElement. style.color = "red"; //The text color will change to red because it was a wrong guess.
        inputElement.value = ""; //This resets the input back to blank for a new guess.
    }else{
        resultsElement.innerText = "Correct, you got the lucky number!"; //This gives the user feedback if their guess was correct.
        resultsElement. style.color = "green"; //This will change the text to green to tell them that they got it correct
        inputElement.value = ""; //This resets the input field to blank for a new guess.
        luckyNumber = Math.floor(Math.random() * 24) + 1; //This re-generates a new number so that the user can keep playing after they got a correct guess.
    }
}

buttonElement.addEventListener("click", checkAnswer);
//When users click the button after they put in a number, this will check if their guess was correct.