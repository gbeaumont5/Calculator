
let results = 0; //This variable changes based on the functions below

let allClear = 0; //This variable is always zero for all clear

let operations = 0; //this number will be used for operations

let operator = null; 

let addition = false;
let division = false;
let subtraction = false;
let multiplication = false; 


//All the functions below are for each button

function oneButton() {
    results = results + "1";
    document.getElementById("results").innerHTML = results;
};
function twoButton() {
    results = results + "2";
    document.getElementById("results").innerHTML = results;
};
function threeButton() {
    results = results + "3";
    document.getElementById("results").innerHTML = results;
};
function fourButton() {
    results = results + "4"; 
    document.getElementById("results").innerHTML = results;
};
function fiveButton() {
    results = results + "5";
    document.getElementById("results").innerHTML = results;
};
function sixButton() {
    results = results + "6";
    document.getElementById("results").innerHTML = results;
};
function sevenButton() {
    results = results + "7";
    document.getElementById("results").innerHTML = results;
};
function eightButton() {
    results = results + "8";
    document.getElementById("results").innerHTML = results;
};
function nineButton() {
    results = results + "9";
    document.getElementById("results").innerHTML = results;
};
function zeroButton() {
    results = results + "0";
    document.getElementById("results").innerHTML = results;
};
function ACButton() {
    results = allClear;
    document.getElementById("results").innerHTML = results;
};
function PlusMinusButton() {
    results = results * -1;
    document.getElementById("results").innerHTML = results;
};
function percentButton() {
    results = results * 0.01;
    document.getElementById("results").innerHTML = results;
};
function decimalButton() {
    results = results + ".";
    document.getElementById("results").innerHTML = results;
};
function equalButton() {
    if (addition === true) {
        results = parseInt(operations) + parseInt(results);
        document.getElementById("results").innerHTML = results;
        addition = false;
        operations = 0;
    } else if (division === true) {
        results = (parseInt(operations) / parseInt(results));
        document.getElementById("results").innerHTML = results;
        division = false;
        operations = 0;
    } else if (subtraction === true) {
        results = (parseInt(operations) - parseInt(results));
        document.getElementById("results").innerHTML = results;
        subtraction = false;
    } else if (multiplication === true) {
        results = (parseInt(operations) * parseInt(results));
        document.getElementById("results").innerHTML = results;
        multiplication = false;
    } else {
        document.getElementById("results").innerHTML = results;
    };
    
};
function minusButton() {
    operations = results;
    results = 0; 
    document.getElementById("results").innerHTML = operations;
    subtraction = true; 
};
function XButton() {
    operations = results;
    results = 0; 
    document.getElementById("results").innerHTML = operations;
    multiplication = true; 
};
function divideButton() {
    operations = results;
    results = 0; 
    document.getElementById("results").innerHTML = operations;
    division = true; 
};
function additionButton() {
    operations = results;
    results = 0; 
    document.getElementById("results").innerHTML = operations;
    addition = true; 
};

