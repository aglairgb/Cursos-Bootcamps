function sobre() {
    document.getElementById("cores").style.backgroundColor="red";

    document.getElementById("log").innerHTML += "Mouse-Sobre-Red <br>"
}

function mouseClicado() {
    document.getElementById("cores").style.backgroundColor="blue";

    document.getElementById("log").innerHTML += "Mouse-Clicado-Blue <br>"
}

function movendo() {
    document.getElementById("cores").style.backgroundColor="green";

    document.getElementById("log").innerHTML += "Movendo-Green <br>"
}

function saindo() {
    document.getElementById("cores").style.backgroundColor="pink";

    document.getElementById("log").innerHTML += "Saindo-Pink <br>"
}

function paraCima() {
    document.getElementById("cores").style.backgroundColor="orange";

    document.getElementById("log").innerHTML += "Mouse-Desclicado-Orange <br>"

}