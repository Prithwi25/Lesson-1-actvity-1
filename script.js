const num1 = document.getElementById("myInput1").value;

const num2 = document.getElementById("myInput2").value;

function add(num1, num2) {

    var number1 = num1

    var number2 = num2

    result = num1 + num2

    document.getElementById("output").innerHTML = "Addition: " + result;

}

function mul(num1, num2) {

    var number1 = num1

    var number2 = num2

    result = num1 * num2

    document.getElementById("output").innerHTML = "Multiplication: " + result;

}