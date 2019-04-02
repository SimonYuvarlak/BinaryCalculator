var number = '';//That is the number which is going to be displayed.
var result = '';//That is the result that is going to be displayed.
var numbers = [];//This array will contain the numbers seperately.
var usedOperator = '';//That is operator that is used for calculation.
//This functions adds the given parameter to the res div.
function addToRes(item){
    document.getElementById('res').innerHTML = item;
}
//This is quick function to add the number to the result
function add(){
    addToRes(number);
}
//This function adds '0' to the res div(result). It is for 0 button
function clickZero(){
    number += '0';
    add();
}
//This function adds '1' to the res div(result). It is for 1 button
function clickOne(){
    number += '1';
    add();
}
//This function clears the result. It is for C button.
function clickClr(){
    number = '';
    add();
}
//This function shows the result on the res division.
function clickEql(){
    calculation();
    addToRes(result);
    number = result;
}
//This function gets the number seperately into the numbers array according to the operator that is used.
function getNumbers(operator){
    numbers = number.split(operator);
}
//This function adds the + operator to the number string.
function clickSum(){
    number += '+';
    usedOperator = '+';
    add();
}
//This function adds the - operator to the number string.
function clickSub(){
    number += '-';
    usedOperator = '-';
    add();
}
//This function adds the * operator to the number string.
function clickMul(){
    number += '*';
    usedOperator = '*';
    add();
}
//This function adds the / operator to the number string.
function clickDiv(){
    number += '/';
    usedOperator = '/';
    add();
}
//This function makes the calculation
function calculation(){
    getNumbers(usedOperator);//Getting the numbers
    let firstNumber = parseInt(numbers[0], 2);//Translating first number to an integer.
    let secondNumber = parseInt(numbers[1],2);//Translating second number to an integer.
    switch (usedOperator){
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = Math.floor(firstNumber / secondNumber);
            break;
        default:
            result = '';
    }
    result = result.toString(2);//Converting our result number to a binary number.
}





