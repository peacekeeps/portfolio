const headContainer = document.querySelector('.head-container')

const headContainerY = headContainer.getBoundingClientRect().height

const mainContainer = document.querySelector('.main-container')

const titleImg = document.querySelector('.title-img')

const txt = document.querySelector('#txt')

titleImg.addEventListener("error", function() {
    headContainer.innerHTML = `<h1>Arte Bianco</h1>`
})

function textAnimation() {
    txt.textContent 
}

let teste = txt.textContent

console.log(teste)

let words = ["criativo.", "profissional.", "elegante."];

let interval = 300;
let eraseInterval = 100;
let pauseInterval = 1000;

function writer(arr) {
  let i = 0;
  
  function writeWord() {
    let word = arr[i];
    let j = 0;
    
    function writeLetter() {
      if (j < word.length) {
        setTimeout(() => {
          txt.textContent = word.slice(0, j+1);
          j++;
          writeLetter();
        }, interval);
      } else {
        setTimeout(() => {
          eraseWord();
        }, pauseInterval);
      }
    }
    
    function eraseWord() {
      if (word.length > 0) {
        setTimeout(() => {
          word = word.slice(0, -1);
          txt.textContent = word;
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

// Explicação 

// Claro, vou explicar de um jeito fácil de entender. Esse código tem uma lista de palavras, e o objetivo é exibi-las uma de cada vez, letra por letra, depois apagar cada letra, e então exibir a próxima palavra.

// O código começa definindo três variáveis: "interval" que representa o tempo em milissegundos que cada letra será exibida, "eraseInterval" que representa o tempo em milissegundos que cada letra será apagada, e "pauseInterval" que é o tempo de pausa em milissegundos entre a exibição de cada palavra.

// Em seguida, temos uma função chamada "writer" que recebe a lista de palavras como argumento. Dentro dessa função, há outra função chamada "writeWord" que é responsável por exibir cada palavra.

// "writeWord" começa criando uma variável chamada "word" que é igual à palavra atual da lista na posição "i", que começa em zero. Em seguida, a função define outra variável chamada "j" que começa em zero e representa a posição da letra atual da palavra que está sendo exibida.

// Depois disso, "writeWord" chama uma função chamada "writeLetter" que é responsável por exibir cada letra da palavra atual. "writeLetter" usa um "setTimeout" para esperar o tempo definido na variável "interval" antes de exibir a próxima letra, e usa a função "slice" para pegar uma fatia da palavra que vai até a posição "j" mais um, e exibir essa fatia com "console.log". Então "j" é incrementado, e "writeLetter" chama a si mesma de novo, para exibir a próxima letra.

// Quando a função "writeLetter" termina de exibir todas as letras da palavra, ela chama a função "eraseWord" usando outro "setTimeout" que espera o tempo definido na variável "pauseInterval". "eraseWord" é responsável por apagar a palavra atual, letra por letra.

// "eraseWord" usa um "setTimeout" para esperar o tempo definido na variável "eraseInterval" antes de apagar a próxima letra da palavra atual. Ele faz isso usando a função "slice" para pegar uma fatia da palavra que vai até a posição "j", e exibe essa fatia com "console.log". Então "j" é decrementado, e "eraseLetter" chama a si mesma de novo, para apagar a próxima letra.

// Quando "eraseWord" termina de apagar todas as letras da palavra atual, ele incrementa "i" para passar para a próxima palavra na lista, e verifica se "i" é maior ou igual ao comprimento da lista. Se for, ele redefine "i" como zero, para começar de novo com a primeira palavra. Então ele chama a si mesmo de novo, para exibir a próxima palavra com "writeWord".