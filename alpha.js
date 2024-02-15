// ei system charao onno arek system a kora jai //

// function play(){
//     // hidden home screen //
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // show playground section //
//     const playgroundSection =document.getElementById('play-groud')
//     playgroundSection.classList.remove('hidden');
// }
function keyboardKeyupEvent(event) {
    const playerPresed = event.key;
    // console.log('player pressed', playerPresed);

    // get expected pressed //
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPresed,expectedAlphabet)

    // cheked match //
    if (playerPresed === expectedAlphabet) {
        console.log('you get point')
        removeBackGroundColorId(expectedAlphabet)
        continueGame();
        // current score //
        const currentScore = getTextElementId('current-score');
        const newScore = currentScore + 1;
        const displaytext = setTextId('current-score', newScore)
        // // get the current score //
        // const currentScoreElement =document.getElementById('current-score');
        // const currentScoreText =currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // // console.log(currentScore)
        // // increase the score //
        // const newScore =currentScore +1;
        // // updated score //
        // currentScoreElement.innerText = newScore;
    }
    else {
        console.log('you missed point');
        // life score //
        const currentLife = getTextElementId('current-life');
        const updatedLife = currentLife - 1;
        setTextId('current-life', updatedLife)

        if (updatedLife === 0) {
            gameOver();
        }
        // // get the current life //
        // const currentLifeElement =document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // get decreased current life //
        // const newLife = currentLife -1;
        // // display updated life //
        // currentLifeElement.innerText = newLife;

    }
}

document.addEventListener('keyup', keyboardKeyupEvent);


function continueGame() {
    // get random alphabet //
    const alphabet = getAlphabetRandom();
    console.log('your alphabet', alphabet)

    // random alphabet show tha display //
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set background color //
    setBackgroundColorId(alphabet);
}

function play() {
    // hide all show only play ground //
    hiddenElementById('home-screen');
    shoeElementById('play-ground')
    hiddenElementById('final-score')
    // reset life and score //
    setTextId('current-score',0);
    setTextId('current-life',5);
    continueGame();
}

function gameOver(){
    hiddenElementById('play-ground');
    shoeElementById('final-score')
    // const showFinalscore =document.getElementById('final-score');
    // showFinalscore.classList.remove('hidden')

    // updated the game over score //
    const lastscore =getTextElementId('current-score');
    setTextId('last-score',lastscore)
    // clear the last alphabet bg //
    const currentAlphabet = elementTextByid('current-alphabet');
    removeBackGroundColorId(currentAlphabet);

}


