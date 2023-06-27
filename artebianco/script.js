/*
==========================
Variáveis
==========================
*/

// Header
const headContainer = document.querySelector(".head-container");

const headContainerY = headContainer.getBoundingClientRect().height;

const main = document.querySelector(".main");

const imageContainer = document.querySelector(".image-container");

const menuBtn = document.querySelector(".menu-btn");

const dropdownMenu = document.querySelector(".dropdown-menu");

const links = document.querySelectorAll(".link");

// Main
const mainContainer = document.querySelector(".main-container");

const titleImg = document.querySelector(".title-img");

const txt = document.querySelector("#txt");

/*
============================
Event Listeners
============================
*/

// Mostra um texto alternativo caso a logo não apareça
titleImg.addEventListener("error", function () {
  imageContainer.innerHTML = `<h1 class='img-title-error'>Arte Bianco</h1>`;
});

// Troca o position do menu de navegação
window.addEventListener("scroll", () => {
  let windowY = window.pageYOffset;

  if (windowY > headContainerY) {
    headContainer.classList.add("fixed-nav");
  } else {
    headContainer.classList.remove("fixed-nav");
  }
});

// Menu
menuBtn.addEventListener("click", () => {
  main.classList.toggle("hidden");

  dropdownMenu.classList.toggle("show-menu");
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    if (dropdownMenu.classList.contains("show-menu")) {
      dropdownMenu.classList.remove("show-menu");
    }
    if (main.classList.contains("hidden")) {
      main.classList.remove("hidden");
    }

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    let position = element.offsetTop - (headContainerY + 50); // Meu main, que seria o parente mais próximo com posição definida, começa aonde o header termina, então ele tem -50px de altura. Quando eu rodo a tela, a posição do header passa a ser sticky, e esses 50 px a menos ficam sobrando, dai tem que somar eles aqui para dar certo

    console.log(element.offsetParent.offsetTop);

    window.scrollTo({
      top: position,
    });
  });
});

/*
============================
Funções
============================
*/

// Word Writer
let words = ["criativo.", "profissional.", "elegante."];

let interval = 300;
let eraseInterval = 100;
let pauseInterval = 1000;

function writer(arr) {
  let i = 0; //1

  function writeWord() {
    let word = arr[i]; //profissional.
    let j = 0;

    function writeLetter() {
      if (j < word.length) {
        setTimeout(() => {
          txt.textContent = word.slice(0, j + 1);
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
          word = word.slice(0, -1); //
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

/*
============================
Image Slider
============================
*/

let projectCategories = {
  "Marketing e Propaganda": [
    "imagens/marketing001-md.jpeg",
    "imagens/marketing002-md.jpeg",
    "imagens/marketing003-md.jpeg",
  ],
  "Marketing Offline": [
    "imagens/offline001-md.jpeg",
    "imagens/offline002-md.jpeg",
  ],
  "Identidade Visual": [
    "imagens/id001-md.jpeg",
    "imagens/id002-md.jpeg",
    "imagens/id003-md.jpeg",
  ],
  "Arte Vetorizada": [
    "imagens/vetor001-md.jpeg",
    "imagens/vetor002-md.jpeg",
    "imagens/vetor003-md.jpeg",
    "imagens/vetor004-md.jpeg",
  ],
};
const marketing = [
  "imagens/marketing001-md.jpeg",
  "imagens/marketing002-md.jpeg",
  "imagens/marketing003-md.jpeg",
  "imagens/offline001-md.jpeg",
  "imagens/offline002-md.jpeg"
];
const pibs = document.querySelectorAll(".pib");

let pibImage = 0

function pibGenerator(pib, arr) {

  for (let i = 1; i < pib.length; i++) {
    if(i === 1) {
      pib[i].innerHTML = `
      <div class="p-next-btn">
      <i class="fa-solid fa-caret-right"></i>
      </div>
     <img
      src=${arr[pibImage]}
      alt="marketing"
      class="pib-img"
      />
    `
    } else {
      pib[i].innerHTML = `
      <img
      src=${arr[pibImage]}
      alt="marketing"
      class="pib-img"
      />
    `
    }
    pibImage ++
  }
  pibImage = 0
  let pNextBtn = document.querySelector(".p-next-btn")
  pNextBtn.addEventListener("click", function(e) {
    for (let i = 0; i < pib.length; i++) {
      if(i === 1) {
        pib[i].innerHTML = `
        <div class="p-next-btn">
        <i class="fa-solid fa-caret-right"></i>
        </div>
        <div class="p-previous-btn">
        <i class="fa-solid fa-caret-left"></i>
      </div>
       <img
        src=${arr[pibImage]}
        alt="marketing"
        class="pib-img"
        />
      `
      } else {
        pib[i].innerHTML = `
        <img
        src=${arr[pibImage]}
        alt="marketing"
        class="pib-img"
        />
      `
      }
      pibImage ++
    }
    if (pibImage >= arr.length)
  })
}

pibGenerator(pibs, marketing);

/*
            <div class="p-next-btn">
              <i class="fa-solid fa-caret-right"></i>
            </div>
            <div class="p-previous-btn">
              <i class="fa-solid fa-caret-left"></i>
            </div>
            <img
              src="imagens/marketing001-md.jpeg"
              alt="marketing"
              class="pib-img"
*/