let btn_guess = document.querySelector('.check');
let btn_again = document.querySelector('.again')
let scoretext = document.querySelector('.score')
let message = document.querySelector('.message')
let correctText = document.querySelector('.number')

let body = document.querySelector('body')
let answer= ((Math.random()*20)).toFixed(0)
let score = 20;
btn_again.addEventListener('click',handleReset)
btn_guess.addEventListener('click',handleGuess)
console.log(answer +"answer")

function handleGuess (){
    let hightScore = document.querySelector('.highscore')
    let userGuess = document.querySelector('.guess').value
    if(answer == userGuess){
        correctText.textContent = userGuess
        message.textContent = 'Correct Number!'
        body.setAttribute('style','background-color:#60b347')
        if(hightScore.textContent < score){
            hightScore.textContent = score
        }
    }
    else{
        if(answer < userGuess){
            message.textContent = 'Too High!'
            console.log(message.textContent)
            score--;
            scoretext.textContent = score
        } if(answer > userGuess){
            message.textContent = 'Too Low!'
            score--;
            scoretext.textContent = score

        }

    }
}

function handleReset(){
    answer= ((Math.random()*20)).toFixed(0)
console.log(answer +"answer")

    score = 20;
    body.setAttribute('style','background-color:#222')
    message.textContent = 'Start guessing...'
    scoretext.textContent = score
    correctText.textContent = '?'

}