
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
    "ਤਰਾਸ-ਤਰਾਸ ਕਰਨਾ":"to regret",
    "ਸਾਹਿਤ" : "literature",
    "ਕੁਹਾੜੀ" : "the ax",
    "ਦਾਤ " : "gift",
    "ਡੇਰੇ" : "camp",
    "ਆ ਜਾ ਰਹੇ ਸਨ" : "were coming",
    "ਜਿਆਦਾਤਰ" : "most",
    "ਅਜਿਹੇ" : "such",
    "ਜਿਨ੍ਹਾਂ ਦੇ" : "whose",
    "ਪੁੱਤਰ" : "son",
    "ਹਮੇਸ਼ਾ ਦੀ ਤਰ੍ਹਾਂ" : "as always",
    "ਖੈਰਾਤੀਆਂ" : "charities",
    "ਤਾਂਤਾ ਲੱਗਿਆ ਹੋਇਆ ਸੀ" : "was in full swing",
    "ਬਖਸ਼" : "bless",
    "ਖੜਕਿਆ" : "knocked/rang",
    "ਪਤਨੀ" : "wife",
    "ਚਿੰਤਤ" : "worried",
    "ਰਵਾਨਾ" : "depart",
    "ਰਵਾਨਾ ਹੋ ਗਏ" : "departed",
    "ਦਾਖਲਾ":"admission",
    "ਤਾਕ":"wait",
    "ਪਰਛਾਵਾਂ":"shadow",
    "ਵਾਅਦੇ":"promises",
    "ਅਫਸੋਸ":"sorry",
    "ਮੁਤਾਬਕ":"according to",
    "ਅਲੋਪ":"disappear",
    "ਖਿੜੇ":"blossom",
    "ਖਿੜੇ ਹੋਇਆ":"blooming",
    "ACTION WORDS":"...",



};


let TO_ENGLISH = 0;
let TO_PUNJABI = 1;

let number = 0;
let translationOrder = TO_ENGLISH;
let punjabiWords = [];
let englishWords = [];

for(let key in words) {
    punjabiWords.push(key);
    englishWords.push(words[key]);
}

let MAX_CARD_NUMBER = punjabiWords.length;

function ShowFlashCard() {
    document.getElementById("answerWord").innerHTML = "";
    if(translationOrder == TO_ENGLISH)
        document.getElementById("questionWord").innerHTML = punjabiWords[number];
    else
        document.getElementById("questionWord").innerHTML = englishWords[number];

    document.getElementById("cardNumber").innerHTML = number + 1;
}

function ShowAnswer(){
    if(translationOrder == TO_ENGLISH)
        document.getElementById("answerWord").innerHTML = englishWords[number];
    else
        document.getElementById("answerWord").innerHTML = punjabiWords[number];
}

function Back(){
    if(number == 0) return;
    number--;
    ShowFlashCard();
}

function Next(){
    if(number == MAX_CARD_NUMBER - 1)   return;
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
    let num = prompt("What card number would you like to go to? Pick a number between 1 and " + MAX_CARD_NUMBER + ":")
    if(num <= 0 || isNaN(num) || num >= MAX_CARD_NUMBER){
        alert("Please try again. Enter a number between 0 and " + MAX_CARD_NUMBER);
    }
    else {
        number = num - 1;
        ShowFlashCard();
    }
}

ShowFlashCard();