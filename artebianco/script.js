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

let pibObj = {
  "Marketing e Propaganda": [
    "imagens/marketing001-md.jpeg",
    "imagens/marketing002-md.jpeg",
    "imagens/marketing003-md.jpeg",
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

const pibs = document.querySelectorAll(".pib"); //As caixas de imagem
const pNavItem = document.querySelector(".p-nav-item") //É a categoria das imagens, ou a propriedade sendo iterada
let pibIndex = 0; //Para iterar o array de imagens da propriedade do objeto
let firstClick = true; //Para quando a imagem for a primeira do array de images
let pibCounter = 0; //Para iterar entre as propriedades do objeto

function pibGenerator(pib, obj) {
  let pibImage = pibIndex; 
  let keys = Object.keys(obj); //Cria um array com as propriedades do objeto, EX. Marketing, Arte vetorizada, etc
  let images = obj[keys[pibCounter]]; //Cria um array com as imagens (ou valores) dentro da propriedade
  
  if (pNavItem.textContent !== keys[pibCounter]) {
    pNavItem.textContent = keys[pibCounter] //Se a categoria exibida não for a categoria sendo iterada, ele atualiza
  }

  if (firstClick) {
    for (let i = 0; i < pib.length; i++) {
      
      if (i === 0) { // o pib da esquerda fica invisível nessa primeira amostragem
        pib[i].innerHTML = ``;
      } else { // do pib 1 pra frente
        if (images[pibImage] !== undefined) { // se ainda houverem imagens no array de imagens
          pib[i].innerHTML = `      
          <img
          src=${images[pibImage]}
          alt="marketing"
          class="pib-img"
          />
          `;
          if (i === 1) { // Se for a pib do centro
            if (pibCounter === 0) { // E estiver no primeiro array de imagens ou categoria
              pib[i].innerHTML += `
              <div class="p-next-btn pib-btn">
              <i class="fa-solid fa-caret-right"></i>
              </div>
              `; // adiciona somente o botão de next
            } else { // Se já não for a primeira categoria
              pib[i].innerHTML += `
                  <div class="p-next-btn pib-btn">
                  <i class="fa-solid fa-caret-right"></i>
                  </div>
                  <div class="p-previous-btn pib-btn">
                  <i class="fa-solid fa-caret-left"></i>
                  </div>
                  `; // adiciona os dois botões
            }
          }
        } else { // Se não houverem mais imagens para preencher os pibs
          pib[i].innerHTML = ``;
        }
        //   pib[0].innerHTML = ``;
        pibImage++; // Começa denovo da próxima imagem
      }
    }
  } else { // Se não for a primeira imagem do array
    for (let i = 0; i < pib.length; i++) {
      // i = 0 é para começar do pib esquerdo
      if (images[pibImage] !== undefined) {
        if (pibIndex === images.length - 2 && i >= 2) {
          pib[i].innerHTML = ``;
        } else {
          pib[i].innerHTML = `      
        <img
        src=${images[pibImage]}
        alt="marketing"
        class="pib-img"
        />
        `;
          if (i === 1) {
            pib[i].innerHTML += `
          <div class="p-next-btn pib-btn">
          <i class="fa-solid fa-caret-right"></i>
          </div>
          <div class="p-previous-btn pib-btn">
          <i class="fa-solid fa-caret-left"></i>
          </div>
          `;
          }
        }
      } else {
        pib[i].innerHTML = ``;
      }
      pibImage++;
    }
  }
  const previousBtn = document.querySelector(".p-previous-btn");
  const nextBtn = document.querySelector(".p-next-btn");
  const btns = document.querySelectorAll(".pib-btn");

  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      if (e.currentTarget === nextBtn) {
        console.log(`Pibcounter = ${pibCounter}; ${keys.length}`)
        if (pibIndex === images.length - 1 && firstClick) {
          //Para arrays com uma imagem
          pibIndex = 0;

          if (pibCounter === keys.length - 1) {
            pibCounter = 0
            pibIndex = 0
            firstClick = true
          } else {
            pibCounter++;
          }
          
          firstClick = true;
        } else if (pibIndex === images.length - 2 && !firstClick) {
          //Para arrays com duas imagens
          pibIndex = 0;

          if (pibCounter === keys.length - 1) {
            pibCounter = 0
            pibIndex = 0
            firstClick = true
          } else {
            pibCounter++;
          }
          
          firstClick = true;
        } else if (firstClick) {
          //Quando for a primeira imagem do array
          firstClick = false;
        } else {
          pibIndex++;
        }
      } else {
        if (pibIndex === 0) {
          if (firstClick === true) {
            pibCounter--;
            let myVar = obj[keys[pibCounter]].length;
            if (myVar < 2) {
              //Se ao retornar pro array anterior, e esse só tiver um item
              pibIndex = myVar - 1;
              firstClick = true;
            } else {
              pibIndex = myVar - 2;
              firstClick = false;
            }
          } else {
            firstClick = true;
          }
        } else {
          pibIndex--;
        }
      }
      // }
      pibGenerator(pibs, pibObj);
    });
  });
}

pibGenerator(pibs, pibObj);
