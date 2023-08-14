function calcularImc() {
    document.getElementById("altura").style.borderColor = "#ffffff";
    document.getElementById("altura").style.backgroundColor = "#ffffff";
    document.getElementById("peso").style.borderColor = "#ffffff";
    document.getElementById("peso").style.backgroundColor = "#ffffff";
 
    if (document.getElementById("peso").value === "") {
        document.getElementById("log").innerHTML += "Preencha o peso <br>"
        document.getElementById("peso").style.borderColor = "red";
        document.getElementById("peso").style.backgroundColor = "#ffe5e5";
        document.getElementById("peso").focus();
      
    } 

    if (document.getElementById("altura").value === "") {
        document.getElementById("log").innerHTML += "Preencha a altura <br>"
        document.getElementById("altura").style.borderColor = "red"; 
        document.getElementById("altura").style.backgroundColor = "#ffe5e5"; 
        document.getElementById("altura").focus(); 
     return false;
    }


    let peso = parseFloat(document.getElementById("peso").value);

    let altura = parseFloat(document.getElementById("altura").value);

    let resultado = (peso/(altura*altura)).toFixed(2);

    document.getElementById("log").innerHTML += " Seu IMC É " + resultado + "<br>" 
    return false;
}





