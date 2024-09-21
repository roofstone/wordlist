const wordElement = document.querySelector(".word");
const oldWordsElement = document.querySelector(".old-words");

let words =[];
let currentWord ="";
let previousWords = [];

fetch("words.txt")
.then(function (response) {
    return response.text();
})
.then(function (text){
    words=text.split(",");
    console.log(words);
});

function onClick() {
    currentWord=getRandomWord();
    wordElement.innerHTML=currentWord;
    if (currentWord){
        previousWords.push(currentWord);
        //console.log(previousWords);
        oldWordsElement.innerHTML=previousWords.join(', ');
    }
    //console.log(getRandomWord());
}

function getRandomNumber(maxNumber){
    return Math.floor(Math.random()*maxNumber);
}

function getRandomWord(){
    return words[getRandomNumber(words.length)];
}