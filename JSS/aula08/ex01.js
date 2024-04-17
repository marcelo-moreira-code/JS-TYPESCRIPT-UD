/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.80 de altura e seu IMC é de 25.92
*/
let nome = "Luiz Otávio";
let sobrenome = "Miranda";
let peso = 84;
let altura = 1.82;
let idade = 25;
let imc = peso / (altura * altura); // peso / (altura * altura) 
let anoNascimento = 2024 - 30;

console.log(nome , sobrenome ,"tem", idade, "anos e pesa", peso, "kg.");
console.log("tem",altura, "de altura e seu IMC é de ",imc);
console.log("E nasceu no ano de",anoNascimento,".");
console.log("##########################################################")
console.log(`${nome} ${sobrenome} , tem ${idade} anos e pesa ${peso} kg.`);
console.log(`tem ${altura} m de altura e seu IMC é de ${imc}`);