
    function getInputs() {

            var num1 = parseFloat(document.getElementById("input1").value);

    var num2 = parseFloat(document.getElementById("input2").value);

    return [num1, num2];

        }

    function add() {
            const [num1, num2] = getInputs();
    var result = num1 + num2
    document.getElementById("result").innerHTML = "Summation: " + result
        }


    function sub() {
           const [num1,num2] = getInputs()
    var result = num1 - num2
    document.getElementById("result").innerHTML = "Subtraction: " + result
        }

    function multiply() {
            const [num1, num2] = getInputs()
    var result = num1 * num2
    document.getElementById("result").innerHTML = "Multiplication: " + result
        }

    function div() {
            const [num1, num2] = getInputs()
    var result = num1 / num2
    document.getElementById("result").innerHTML = "Division: " + result
        }
