function maiuscula() {
    let letra = document.getElementById("texto").value;
    letra = letra.toUpperCase();
    document.getElementById("texto").value = letra;
}

window.onload = function() {
    document.getElementById("texto").value = "";
};
