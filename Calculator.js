
let results = 0; //This variable changes based on the functions below

let allClear = 0; //This variable is always zero for all clear

let operations = 0; //

let operator = null; 


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
    results = parseInt(operations) + parseInt(results);
   
    document.getElementById("results").innerHTML = results;
};
function minusButton() {
    results = results;
    document.getElementById("results").innerHTML = results;
};
function XButton() {
    results = results;
    document.getElementById("results").innerHTML = results;
};
function divideButton() {
    results = results;
    document.getElementById("results").innerHTML = results;
};
function additionButton() {
    operations = results;
    results = 0; 
    document.getElementById("results").innerHTML = operations;
};

