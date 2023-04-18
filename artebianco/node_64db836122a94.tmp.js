let words = ["criativo.", "profissional.", "elegante."];

let interval = 500;
let eraseInterval = 200;
let pauseInterval = 1000;

function writer(arr) {
  let i = 0;
  
  function writeWord() {
    let word = arr[i];
    let j = 0;
    
    function writeLetter() {
      if (j < word.length) {
        setTimeout(() => {
          console.log(word.slice(0, j+1));
          j++;
          writeLetter();
        }, interval);
      } else {
        setTimeout(() => {
          eraseWord();
        }, pauseInterval);
      }
    }
    
    function eraseLetter() {
      if (j >= 0) {
        setTimeout(() => {
          console.log(word.slice(0, j));
          j--;
          eraseLetter();
        }, eraseInterval);
      } else {
        setTimeout(() => {
          writeWord();
        }, pauseInterval);
      }
    }
    
    function eraseWord() {
      if (word.length > 0) {
        setTimeout(() => {
          word = word.slice(0, -1);
          console.log(word);
          eraseWord();
        }, eraseInterval);
      } else {
        i++;
        if (i >= arr.length) {
          i = 0;
        }
        setTimeout(() => {
          writeWord();
        }, pauseInterval);
      }
    }
    
    writeLetter();
  }
  
  writeWord();
}

writer(words);