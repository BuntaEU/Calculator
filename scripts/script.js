const display = document.getElementById("display");
display.value="";
const oprndDisplay = document.getElementById("operand")
oprndDisplay.value="";
const answer = document.getElementById("answer");
answer.value ="";

let operand, operator1, operator2;
let value ="", firstOperator = true;

function getClick (btn){
    if (btn ="AC") {
        btn ="";
        display.value=btn;
        oprndDisplay.value = btn;
        answer.value=btn;
        firstOperator= true;
        operator1 = 0;
        operator2 = 0;

    } else if (btn== "DEL"){
        btn ="";
        display.value = display.value.substr(0,display.value.length -1);
    }
}