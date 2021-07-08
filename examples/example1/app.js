let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
let answer = num1 + num2

document.getElementById("num1").textContent = num1
document.getElementById("num2").textContent = num2

function checkAnswer() {
    let response = document.getElementById("response").value
    if (response == answer) {
        document.getElementById("result").textContent = "correct"
    } else {
        document.getElementById("result").textContent = "incorrect"
    }
}

