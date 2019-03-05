const bts = [ 'koya', 'mang','van', 'rj']
let btChar = Math.floor(Math.random() * bts.length);
let choosenWord = bts[btChar];
let rightChar = [];
let wrongChar = [];
let underScoreChar = [];


// console.log (choosenWord);

let docUnderScore = document.getElementsByClassName('guessMe');
let docRightGuess = document.getElementsByClassName('rightBt');
let docWrongGuess = document.getElementsByClassName('wrongBt');



let generateUnderscore = () => {
for (let i = 0; i < choosenWord.length; i++ ) {
    underScoreChar.push('_');
  
}
return underScoreChar; 
}

// console.log(generateUnderscore());

document.addEventListener('keypress', (event) => {
    // let keycode = event.keyCode;
    let keyword = String.fromCharCode(event.keyCode);
    // console.log(choosenWord.indexOf(keyword));
    if (choosenWord.indexOf(keyword) > -1) {
        rightChar.push(keyword);
        underScoreChar [choosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScoreChar.join(' ');
        docRightGuess[0].innerHTML = rightChar;
        if(underScoreChar.join('') == choosenWord) {
            alert('You Guessed it right!');
        }
    }
    else {
        wrongChar.push(keyword);
        docWrongGuess[0].innerHTML = wrongChar;
        // docWrongGuess[0].innerHTML = wrongGuess.join(' ');
      alert('Wrong Letter! Try Again')
        // console.log(wrongWord);
    }
    
   
});
// generateUnderscore();
docUnderScore[0].innerHTML = generateUnderscore().join(' ');
