let myStr = "Hello"


let newStr = "Hello"
let length = newStr.length

function test(numb, str) {
    if (numb === 0) {
    return str
    } else {
        str = str.slice(0, numb - 1)
        console.log(str)
        setTimeout(function() {
            test(numb - 1, str)
        }, 500)
        
    }
}

function test2(numb, str) {
    let string = ""
    let x = string.length
    if (string.length === numb) {
        return string
    } else {
            string = str.slice(x, x+1)
            x++
            console.log(string)
            setTimeout(function() {
                test2(numb + 1, str)
            })
        }
    }

// test(length, newStr)

let firstStr = "Hello" 
let strLength = firstStr.length

test2(strLength, firstStr)

