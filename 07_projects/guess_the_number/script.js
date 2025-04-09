let randomNumber = parseInt(Math.random() * 100 + 1);

const uinput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const lowOrHi = document.querySelector('.lowOrHi')
const prevGuess = document.querySelector('.guesses')
const remGuess = document.querySelector('.lastResult')
const restart = document.querySelector('.restart')
let rem = parseInt(remGuess.innerHTML);
let prevGuesses = [10]
let playGame = true

if (playGame) {
    restart.innerHTML = ""
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(uinput.value)
        validateNum(guess)
        prevGuess.innerHTML = " "
        for (let i = 0; i < prevGuesses.length; i++) {
            prevGuess.innerHTML += prevGuesses[i] + " "
        }
        rem--
        remGuess.innerHTML = rem
        if (rem == 0) {
            playGame = false
            submit.disabled = true
            uinput.disabled = true
            restartGame();
        } else if (guess == randomNumber) {
            lowOrHi.innerHTML = "You guessed the right number!!"
            playGame = false
            submit.disabled = true
            uinput.disabled = true
            restartGame();
        } else if (guess < randomNumber) {
            lowOrHi.innerHTML = "Too loww"
        } else if (guess > randomNumber) {
            lowOrHi.innerHTML = "Too high"
        }
    })
}

function validateNum(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
        return false
    } else if (guess > 100 || guess < 0 || guess == '') {
        alert('Enter a valid guess between 0 and 100')
        return false
    } else {
        prevGuesses.push(guess)
        return true
    }
}

function restartGame() {
    restart.innerHTML = "PLAY AGAIN"
    restart.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        playGame = true
        submit.disabled = false
        uinput.disabled = false
        rem = 10
        remGuess.innerHTML = rem
        prevGuesses = []
        prevGuess.innerHTML = " "
        lowOrHi.innerHTML = " "
        submit.disabled = false;
        uinput.disabled = false;
        playGame = true;
    })
}




