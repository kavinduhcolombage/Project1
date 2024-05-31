let num1;
let num2;

function getvalue(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
}


function sum(){
    result = num1+num2;
    document.getElementById("output").textContent = result;
  }

