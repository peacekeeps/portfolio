// function chunkArrayInGroups(arr, size) {
//   let arrA = [...arr]
//   let arrB = []
//   let arrC = []

//   console.log(arrA)

//   for (let i = 0; i < arr.length; i++) { //Dentro do loop, nós diminuimos o length do arrA, então talvez de problema
//     if (arrA.length >= size) {
//       for (let j = 0; j < size; j++) {
//         arrB.push(arrA[j])
//         //quando removemos o index j do arrA, todo o arrA volta um index, então o index 1 passa a ser o index 0
//       }
//       for (let j = 0; j < size; j++) {
//         arrA.shift(arrA[j])
//         //criando outro for loop, é possível remover exatamente os index que demos push
//       }
//       arrC.push(arrB)
//       console.log(arrB, arrA)
//       arrB = []
//     } else if (arrA.length > 0){
//       arrC.push(arrA)
//       return arrC
//     } else {
//       return arrC
//     }
//   }

// }

// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));

// let string = 0

// function squareDigits(num) {
//     return Number(num
//     .toString()
//     .split("")
//     .map(x => x*x)
//     .join(""))
// }

// console.log(squareDigits(string))

let num = 4

function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))) {
        sq += 1
        if (Number.isInteger(Math.sqrt(sq))) {
            return sq
        } else {
            while(!Number.isInteger(Math.sqrt(sq))) {
                sq += 1
            }
            return sq
        }
    } else {
        return -1
    }  
}

console.log(findNextSquare(4))