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

  let categories = Object.keys(projectCategories)
  let arr = projectCategories[categories[0]]
  console.log(arr)

    if (firstClick) { //original
        for (let i = 1; i < pib.length; i++) {
          // i = 1 é para começar do pib central
          pib[0].innerHTML = ``;
          pib[i].innerHTML = `      
          <img
          src=${images[pibImage]}
          alt="marketing"
          class="pib-img"
          />
          `;
          if (i === 1 && pibCounter === 0) {
            pib[i].innerHTML += `
            <div class="p-next-btn pib-btn">
            <i class="fa-solid fa-caret-right"></i>
            </div>
            `;
          } else {
            pib[i].innerHTML += `
            <div class="p-next-btn pib-btn">
            <i class="fa-solid fa-caret-right"></i>
            </div>
            <div class="p-previous-btn pib-btn">
            <i class="fa-solid fa-caret-left"></i>
            </div>
            `;
          }
          pibImage++;
        }
      

        if (firstClick) { //novo
            for (let i = 1; i < pib.length; i++) {
              // i = 1 é para começar do pib central
              if (images[pibImage] >= 0) {
                pib[i].innerHTML = `      
                <img
                src=${images[pibImage]}
                alt="marketing"
                class="pib-img"
                />
                `;
                if (i === 1) {
                    if (pibCounter === 0) {
                    pib[i].innerHTML += `
                    <div class="p-next-btn pib-btn">
                    <i class="fa-solid fa-caret-right"></i>
                    </div>
                    `;
                    } else {
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
              }
            //   pib[0].innerHTML = ``;
              pibImage++;
            }
        }
    }