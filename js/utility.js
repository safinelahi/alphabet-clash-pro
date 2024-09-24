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

function removeKeyboardBgColor(elementId){
    const keyboardBgColor = document.getElementById(elementId)
    keyboardBgColor.classList.remove('bg-orange-500')
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId)
    const elementValueText = element.innerText
    const elementValue = parseInt(elementValueText)
    return elementValue 
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId)
    element.innerText = value
}

function getElementTextById(elementId){
    const alphabet = document.getElementById(elementId)
    const text = alphabet.innerText
    return text
}