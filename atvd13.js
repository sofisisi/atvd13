function calcular() {
    let var1 = document.getElementById("var1").value; 
    let var2 = document.getElementById("var2").value;
    
    let nomeFuncionario = document.getElementById("nomeFuncionario").value;
    let salarioBruto = document.getElementById("salarioBruto").value;
    let taxaDesconto; 

    let resultado = ""; 

    if (var2 < var1) {
        resultado += "Diferença entre duas variavéis:" + (var1 - var2) + "<br>";
    } else {
        resultado += "Diferença entre duas variavéis:" + (var2 - var1) + "<br>";
    }
    resultado += "O dobro da primeira mais o triplo da segunda é:" + (2*var1 + 3*var2) + "<br>";
    resultado += "Multiplicação das duas variáveis é:" + (var1 * var2 ) + "<br>"

    if (var2 < var1) {
        resultado += "Em ordem decrescente:" + var2 + "," + var1 + "<br>"; 
    } else {
        resultado += "Em ordem decrescente:" + var1 + "," + var2 + "<br>";  
    }

    if (salarioBruto <= 1000){
        taxaDesconto = 0.08;
    } else if (salarioBruto > 1000 && salarioBruto <= 15000) {
        taxaDesconto = 0.05;
    } else {
        taxaDesconto = 0.09; 
    }

    let valorINSS = salarioBruto + taxaDesconto; 
    let salaLiquido = salarioBruto - valorINSS; 

    resultado += "Nome do Funcionário:" + nomeFuncionario + "<br>"; 
    resultado += "Salario Bruto do Funcionario é" + salarioBruto + "<br>"; 
    resultado += "Valor do INSS:" + valorINSS + "<br>"; 
    resultado += "Salario Liquido" + salaLiquido; 

    document.getElementById("resultados").innerHTML = resultado; 
}
