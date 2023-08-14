function Carreguei () {
    document.getElementById("log").innerHTML += "Carreguei <br>";
}

function Redimensionei () {
    document.getElementById("log").innerHTML +=
    "Redimensionei <br>";
}

window.onload = Carreguei;
window.onresize = Redimensionei;