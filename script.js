let calculatorBody = document.querySelector(".calculatorBody");

for(let i = 1; i <= 3; i++){

    let calculatorRow = document.createElement("div");

    calculatorRow.classList.add("row");

    for(let j = 1; j <= 3; j++){
        let calculatorNumber = document.createElement("button");
        calculatorNumber.innerText = j;
        calculatorNumber.classList.add("number");
        calculatorRow.appendChild(calculatorNumber);
    }
  
    calculatorBody.appendChild(calculatorRow);

}