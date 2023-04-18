// let myStr = "Hello"


// let newStr = "Hello"
// let length = newStr.length

// function test(numb, str) {
//     if (numb === 0) {
//     return str
//     } else {
//         str = str.slice(0, numb - 1)
//         console.log(str)
//         setTimeout(function() {
//             test(numb - 1, str)
//         }, 500)
        
//     }
// }

// function test2(numb, str) {
//     let string = ""
//     let x = string.length
//     if (string.length === numb) {
//         return string
//     } else {
//             string = str.slice(0, x+1)
//             x++
//             console.log(string)
//             setTimeout(function() {
//                 test2(numb + 1, str)
//             }, 500)
//         }
//     }

// // test(length, newStr)

// let firstStr = "Hello" 
// let strLength = firstStr.length

// test2(strLength, firstStr)

let words = [
    "Hello",
    "Goodbye",
    "Welcome"
]

let blank = false

console.log(words[0].length)

function writer(arr) {
    for (i = 0; i < arr.length; i++) {
        wordPlay(arr[i], arr[i].length)
    }
}

function wordPlay(str, strLength) {
    let string = ""

    if (blank === false) {
        if (strLength === 0) {
            blank = true
            return string
        } else {
            string = str.slice(0, strLength)
            console.log(string)
            setTimeout(function() {
                wordPlay(str, strLength - 1)
            }, 500)
        }
    } else {
        if (string.length === strLength) {
            blank = false
            return string
        } else {
            string = str.slice(0, string.length + 1)
            console.log(string)
            setTimeout(function() {
                wordPlay(str, strLength + 1)
            })
        }
    }
}

writer(words)