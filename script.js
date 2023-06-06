let student = prompt("Qual nome do(a) aluno(a)?")
let n1 = prompt("Qual a nota da primeira prova")
let n2 = prompt("Qual a nota da segunda prova")

let average = (Number(n1) + Number(n2)) / 2

let result = average > 7

if (result){
   alert("Parabéns," + student + "! Você foi aprovado(a) no concurso:" + average.toFixed(2))
}else {
   alert("Não foi dessa vez," + student + "! tente novamente")
}
