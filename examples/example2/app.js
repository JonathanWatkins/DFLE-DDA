function showText(partName) {
    let target = document.getElementById("description") 
    target.innerHTML = ""

    let textNode = document.createTextNode(partName)
    let p = document.createElement("p")
    p.appendChild(textNode)
    target.appendChild(p)
}

document.getElementById("mouth").addEventListener("click", function() {
    showText("mouth")
})

document.getElementById("lefteye").addEventListener("click", function() {
    showText("left eye")
})

document.getElementById("righteye").addEventListener("click", function() {
    showText("right eye")
})