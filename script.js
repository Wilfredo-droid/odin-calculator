let numberOne = "";
let numberTwo = "";
let operator;
let result;
//Populate numbers with functions and the . from the decimals with a function to reuse code later
let add = (number1 , number2) => {

    return number1 + number2;

}

let subtract = (number1 , number2) => {

    return number1 - number2;

}

let divide = (number1 , number2) => {
    return number1 / number2;
}

let multiply = (number1, number2) => {
    return number1 * number2;
}

let operate = (number1, number2, operator) => {

    switch(operator){
        case "+":
            return add(number1, number2);
      

        case "-":
            return subtract(number1, number2);
          

        case "x":
            return multiply(number1, number2);
              

        case "/":
            return divide(number1, number2);
               
        default: 
            document.write("You did not enter an operator");
            break;
    }

}

let clear = () => {
    numberOne = "";
    numberTwo = "";
    operator = null;
    result = null;
}


let calculatorBody = document.querySelector(".calculatorBody");

let operateButton = document.createElement("button");

let numberZeroButton = document.createElement("button");

let clearButton = document.createElement("button");

let decimalButton = document.createElement("button");

decimalButton.innerText = ".";

calculatorBody.appendChild(decimalButton);

clearButton.innerText = "Clear";

calculatorBody.appendChild(clearButton);

clearButton.addEventListener("click", clear);

numberZeroButton.innerText = "0";
numberZeroButton.classList.add("number");

numberZeroButton.addEventListener("click", () => {

    if(operator){
        numberTwo += numberZeroButton.innerText;
    }

    else{
        numberOne += numberZeroButton.innerText;
    }

    if(operator === "/"){
        numberOne = null;
    }

});


operateButton.innerText = "=";
calculatorBody.appendChild(numberZeroButton)

calculatorBody.appendChild(operateButton);

for(let i = 1; i <= 3; i++){

    let calculatorRow = document.createElement("div");

    calculatorRow.classList.add("row");

    //(i * 3) - 2 Is the beginning of the row I.e 1,4,7 and i * 3 is the end of the row 3,6,7 I could have used variables with names to explain better but I wanted to feel smart 

    for(let j = ((i * 3) - 2); j <= i * 3; j++){
        let calculatorNumber = document.createElement("button");
        calculatorNumber.innerText = j;
        calculatorNumber.classList.add("number");
        calculatorRow.appendChild(calculatorNumber);

        calculatorNumber.addEventListener("click", () => {

            if(operator){
                numberTwo += calculatorNumber.innerText;
            }

            else{
                numberOne += calculatorNumber.innerText;
            }

            console.log(numberOne, numberTwo);
        });

    }
  
    calculatorBody.appendChild(calculatorRow);
    

}

let signs = ["+", "-", "/", "x"];

let row =  document.createElement("div");

for(let i = 0; i < 4; i++){

    let signButton = document.createElement("button");

    signButton.innerText = signs[i];

    signButton.addEventListener("click", () => {
        operator = signButton.innerText;
    })

    row.appendChild(signButton);


}

calculatorBody.prepend(row);

operateButton.addEventListener("click", () => {

    let display = document.createElement("p");
    numberOne = +numberOne;
    numberTwo = +numberTwo;

    if(result){
        numberOne = result;
    }


    if(!numberOne || !numberTwo || !operator){

        display.innerText = "You did not select a button" ;
        
        calculatorBody.appendChild(display); 
    }

    else{
        display.innerText = operate(numberOne,numberTwo,operator);
        result = +(display.innerText);
        numberTwo = 0;

        calculatorBody.appendChild(display);
    }
//Put the result in a result variable, change numberOne variable to result if display has already a value
});




