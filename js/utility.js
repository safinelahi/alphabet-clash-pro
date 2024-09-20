function hideElementById(elementId){
    const hideElement = document.getElementById(elementId)
    hideElement.classList.add('hidden')
}
function showElementById(elementId){
    const showElement = document.getElementById(elementId)
    showElement.classList.remove('hidden')
}

function getARandomAlphabet(){
    // get or create a alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')
    //console.log(alphabets)

    // create a random number between 0 - 25
    const randomNumbers = Math.round(Math.random()* 25)
    //console.log(randomNumbers)
    const alphabet = alphabets[randomNumbers]
    return alphabet
}

function setKeyboardBgColor(elementId){
    const KeyboardBgColor = document.getElementById(elementId)
    KeyboardBgColor.classList.add('bg-orange-500')
}


