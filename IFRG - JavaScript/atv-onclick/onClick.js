/* 
- onClick: quando o elemento é clicado 1 vez

- onDblClick: quando o elemento é clicado 2 vezes (clique rápido) 

*/


function umClique() {
    document.getElementById("fechada").style.display = "none";
    document.getElementById("aberta").style.display = "inline";
    document.getElementById("log").innerHTML += "Porta aberta<br>";
}

function doisCliques() {
    document.getElementById("aberta").style.display = "none";
    document.getElementById("fechada").style.display = "inline";
    document.getElementById("log").innerHTML += "Porta fechada<br>";
}
