function hiddenElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden')
}

function shoeElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('hidden')
}

function setBackgroundColorId(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('bg-orange-400');
    
}

function removeBackGroundColorId(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


function getTextElementId(elementId){
    const element = document.getElementById(elementId);
    const elementTextValue =element.innerText;
    const textValue= parseInt(elementTextValue);
    return textValue;
}

function setTextId(elementId,value){
    const element =document.getElementById(elementId);
    element.innerText =value;
}

function elementTextByid(elementId){
    const element =document.getElementById(elementId);
    const text =element.innerText;
    return text;
}


function getAlphabetRandom(){
    const alphabetString ='abcdefghijklmnopqrstuvwxyz'
    const alphabets =alphabetString.split('');
    console.log(alphabets);
    // get a random index //
    const randomNumber =Math.random()*25;
    const randomIndex =Math.round(randomNumber);
    
    const alphabet =alphabets[randomIndex];
    // console.log(randomIndex, alphabet)
    return alphabet;

}