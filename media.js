

var nota1 = parseFloat(window.prompt("Digite a nota 1:"));
var nota2 = parseFloat(window.prompt("Digite a nota 2:"));
var nota3 = parseFloat(window.prompt("Digite a nota 3:"));

let media = (nota1 + nota2 + nota3)/3

if (media >= 6.0){
    console.log("Aluno aprovado")
    console.log("Notas: " + nota1 + ", " + nota2 + ", " + nota3)
}
else {
    console.log("Aluno reprovado")
    console.log("Notas: " + nota1 + ", " + nota2 + ", " + nota3)
}