function continueGame(){
    // generated random alphabet
    const alphabet = getARandomAlphabet()
    console.log('Your current alphabet is :',alphabet)
    const currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText = alphabet

    // set keyboard background color according to the random alphabet
    setKeyboardBgColor(alphabet)
}

function play(){
    //console.log('hello');
    
    hideElementById('home-screen')
    showElementById('playGround-screen')
    continueGame()
}