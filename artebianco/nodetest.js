let pibObj = {
    "Marketing e Propaganda": [
      "imagens/marketing001-md.jpeg",
      "imagens/marketing002-md.jpeg",
      "imagens/marketing003-md.jpeg",
    ],
    Teste: ["imagens/vetor001-md.jpeg"],
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
  
  let pibIndex = 0; //Para iterar o array de imagens
  let firstClick = true;
  let pibCounter = 0; //Para iterar o objeto

    let keys = Object.keys(pibObj);
    let images = pibObj[keys[pibCounter]];
    
    console.log(images[6])