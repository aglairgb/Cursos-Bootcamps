function submeti() {
    document.getElementById("log").innerHTML += "submeti <br>";
    return false;
}

function resetei() {
    document.getElementById("log").innerHTML += "resetei <br>";
}

function saiDoCampo() {
    document.getElementById("log").innerHTML += "Saí do campo <br>";
}

function mudei() {
    document.getElementById("log").innerHTML += "Mudei <br>"
}

function entreiNoCampo() {
    document.getElementById("log").innerHTML += "Entrei no campo <br>"
}

function selecionei(){
    document.getElementById("log").innerHTML += "Selecionei <br>"
}

function teclaPressionada(event) {
    if (event.keyCode === 40) {
        document.getElementById("log").innerHTML += "Tecla-De-Baixo <br>";
    }
    if (event.keyCode === 38) {
        document.getElementById("log").innerHTML += "Tecla-De-Cima <br>";
    }
}
    
function teclaSolta(event) {
    if (event.keyCode === 40) {
        document.getElementById("log").innerHTML += "Tecla-Baixo-Solta <br>";
    }
    if (event.keyCode === 38) {
        document.getElementById("log").innerHTML += "Tecla-Cima-Solta <br>";
    }
}

