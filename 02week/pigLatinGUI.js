var vowels = ['a','e','i','o','u'];
var wordArray = [];
var pigLatinWord = '';

//check if word is valid
function checkWord(word) {
  if (typeof word ==='string') {
    return word.trim().toLowerCase();
  }
}

//check 1st letter for vowels
function check1stLetter (word) {
    return vowels.includes(word[0])
}

//convert word to pig latin
function pigLatin(word) {
  let newWord = checkWord(word);
  wordArray = [];
    if (check1stLetter(newWord)) {
      return newWord + 'yay'
      } else {
      for ( let i = 0; i < newWord.length; i++ ) {
        if (vowels.includes(newWord[i])) {
      return pigLatinWord + wordArray.join('') + 'ay' ;  
        } else {
          wordArray.push(newWord[i]);
          pigLatinWord= newWord.slice(i+1);
        }
      }
    }
}

function test(){
  var inWord = document.getElementById('inWord').value;
  var transWord = pigLatin(inWord)
  console.log(transWord)
  var outWord = document.getElementById('outWord');
  outWord.innerHTML = transWord;
}