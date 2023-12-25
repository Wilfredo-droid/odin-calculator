let calculatorBody = document.querySelector(".calculatorBody");

for(let i = 1; i <= 3; i++){

    let calculatorRow = document.createElement("div");

    calculatorRow.classList.add("row");

    //(i * 3) - 2 Is the beginning of the row I.e 1,4,7 and i * 3 is the end of the row 3,6,7 I could have used variables with names to explain better but I wanted to feel smart 
    
    for(let j = ((i * 3) - 2); j <= i * 3; j++){
        let calculatorNumber = document.createElement("button");
        calculatorNumber.innerText = j;
        calculatorNumber.classList.add("number");
        calculatorRow.appendChild(calculatorNumber);
    }
  
    calculatorBody.appendChild(calculatorRow);
    

}