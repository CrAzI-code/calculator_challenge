
let num1 = 8
let num2 = 4
let sum = document.getElementById("sum")

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


function add(){
    let addSum = num1 + num2
    sum.textContent=addSum

}

function subtract(){
    let subtractSum = num1 - num2
    sum.textContent=subtractSum 
}

function divide(){
    let divideSum = num1 / num2
    sum.textContent=divideSum
}

function multiply(){
    let multiplyum = num1 * num2
    sum.textContent=multiplyum
}