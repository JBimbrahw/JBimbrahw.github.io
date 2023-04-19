
let words = {
    "ਦਿਵਸ":"day",
    "ਪਰਖਣ ਲਈ":"to test",
    "ਸ਼ਰਧਾਲੂ":"devotees",
    "ਤੰਬੂ":"the tent",
    "ਲਹਿਰਾਉਂਦੇ ਹੋਏ":"waving/brandishing",
    "ਵਿਅਕਤੀਆਂ":"the persons",
    "ਬਲੀ ਦਿੱਤਾ":"sacrificed",
    "ਪਰੀਖਿਆ":"the test",
    "ਪ੍ਰਚਾਰ":"propaganda",
    "ਹਦਾਇਤ ਕੀਤੀ":"instructed",
    "ਰੂਹ":"the soul",
    "ਰੂਪ":"form",
    "ਸਰਕਾਰੀ":"official",
    "ਵਿਚਾਲੇ":"between",
    "ਨੁਕਸਾਨ":"damage",
    "ਜੰਗ":"war",
    "ਜ਼ਮਾਨੇ":"times",
    "ਘਰੇਲੂ":"domestic",
    "ਉਤਸ਼ਾਹ":"enthusiasm",
    "ਤਰਾਸ-ਤਰਾਸ ਕਰਨਾ":"to regret"
};

let TO_ENGLISH = 0;
let TO_PUNJABI = 1;

let number = 0;
let translationOrder = TO_ENGLISH;
let punjabiWords = [];
let englishWords = [];

let numCardsSeen = 0;

for(let key in words) {
    punjabiWords.push(key);
    englishWords.push(words[key]);
}

// let indexes = [];
// let N = Object.keys(words).length;//not sure this is the correct syntax
// for (let i = 0; i < N; i++) {
//    indexes.push(i);
// }

function ShowFlashCard() {
    document.getElementById("answerWord").innerHTML = "";
    if(translationOrder == TO_ENGLISH)
        document.getElementById("questionWord").innerHTML = punjabiWords[number];
    else
        document.getElementById("questionWord").innerHTML = englishWords[number];

    numCardsSeen++;
    document.getElementById("count").innerHTML = "Number of flashcards seen: " + numCardsSeen;
}

function ShowAnswer(){
    if(translationOrder == TO_ENGLISH)
        document.getElementById("answerWord").innerHTML = englishWords[number];
    else
        document.getElementById("answerWord").innerHTML = punjabiWords[number];
}

function Back(){
    number--;
    ShowFlashCard();
}

function Next(){
    number++;
    ShowFlashCard();
}

function ReverseTranslate() {
    if(translationOrder == TO_PUNJABI)
        translationOrder = TO_ENGLISH;
    else
        translationOrder = TO_PUNJABI

    ShowFlashCard();
}

function GoToCardNumber(){
    let maxCardNumber = punjabiWords.length;
    let num = prompt("What card number would you like to go to? Pick a number between 1 and " + maxCardNumber + ":")
    number = num - 1;
    ShowFlashCard();
}

ShowFlashCard();