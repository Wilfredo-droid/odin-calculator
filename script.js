let calculatorBody = document.querySelector(".calculatorBody");

for(let i = 0; i < 9; i++){

    let calculatorNumber = document.createElement("span");

    calculatorNumber.innerText = i;

    calculatorBody.appendChild(calculatorNumber);

}