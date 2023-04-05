// 16
let question = Number(prompt('Quanto voce ganha por hora\n'));
let question2 = Number(prompt('Quantas horas voce trabalha por mes\n'));

function exibirSalario(salario) {
    console.log('O seu salário bruto é de:', salario, 'R$');
}
function salario(question, question2, cb) {
    let result = question * question2;
    cb(result);
}
salario(question, question2, exibirSalario);


function exibirInss(desc) {
    console.log('O desconto do INSS é:', desc, 'R$');
}
function descInss(cb) {
    let valorSalario = question * question2;
    let inss = (valorSalario * 8) / 100;
    cb(inss);
}
descInss(exibirInss);


function exibirIR(IR) {
    console.log('O desconto do imposto de renda é:', IR, 'R$');
}
function descIR(cb) {
    let valorSalario = question * question2;
    let IR = (valorSalario * 11) / 100;
    cb(IR);
}
descIR(exibirIR);


function exibirSindicato(sindicato) {
    console.log('O desconto do sindicato é:', sindicato, 'R$');
}
function descSindicato(cb) {
    let valorSalario = question * question2;
    let sindicato = (valorSalario * 5) / 100;
    cb(sindicato);
}
descSindicato(exibirSindicato);


function exibirSalarioLiquido(salarioLiquido) {
    console.log('O seu salário líquido é:', salarioLiquido, 'R$');
}
function salarioLiquido(cb) {
    let valorSalario = question * question2;
    let sindicato = (valorSalario * 5) / 100;
    let IR = (valorSalario * 11) / 100;
    let inss = (valorSalario * 8) / 100;
    let salarioLiquido = valorSalario - sindicato - IR - inss;
    cb(salarioLiquido);
}
salarioLiquido(exibirSalarioLiquido);

