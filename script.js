// add two numbers
const display = document.querySelector(".display");
function appendToDisplay(input){
    display.textContent += input;
}

function getDisplayContent(){
    let content = display.textContent;
    return content;
}

function clearDisplay(){
    display.textContent = ""
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a/b;
}

let num1, num2, opt;
let operators = "+-*/"

function operate(operators, num1, num2){
    let value = getDisplayContent();
    if (value.includes("+")){
        let x = value.split("+");
        num1 = parseInt(x[0]);
        num2 = parseInt(x[1]);

        let ans = add(num1, num2);
        display.textContent = ans;
    }
    if (value.includes("*")){
        let x = value.split("*");
        num1 = parseInt(x[0]);
        num2 = parseInt(x[1]);

        let ans = multiply(num1, num2);
        display.textContent = ans;
    } 
    if (value.includes("-")){
        let x = value.split("-");
        num1 = parseInt(x[0]);
        num2 = parseInt(x[1]);

        let ans = subtract(num1, num2);
        display.textContent = ans;
    } 
    if (value.includes("/")){
        let x = value.split("/");
        num1 = parseInt(x[0]);
        num2 = parseInt(x[1]);

        let ans = divide(num1, num2);
        display.textContent = ans;
    }      
};

const evall = document.querySelector("#eval");
evall.addEventListener("click", operate())