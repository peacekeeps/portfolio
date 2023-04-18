let words = ["criativo.", "profissional.", "elegante."];

let interval = 300;
let eraseInterval = 100;
let pauseInterval = 1000;

function writer(arr) {
  let i = 0
  writeWord()

  function writeWord() {
    let word = arr[i]
    let j = 0

    writeLetter()

    function writeLetter() {
      if (j < word.length) {
        setTimeout(() => {
          console.log(word.slice(0, j+1))
          j++
          writeLetter()
        }, interval)

      } else {
        setTimeout(() => {
          eraseLetter();
        }, pauseInterval);
      }
    }

    function eraseLetter() {
      if (j > 0) {
        setTimeout(() => {
          console.log(word.slice(0, j-1))
          j--
          eraseLetter()
        }, eraseInterval)
      } else {
        setTimeout(() => {
          i++
          if (i >= arr.length) {
            i = 0
          }
          writeWord()
        }, pauseInterval)

      }
    }


  }

}

writer(words);