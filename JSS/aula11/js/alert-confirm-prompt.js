/*
    Funções / Métodos

    Quando uma função está dentro de um objeto chamamos de método.
    Se estiver fora do objeto, chamamos de função.

window.alert("");
window.confirm("");
window.prompt(""); -> retorna uma string digitada pelo usuário

alert('Com a mensagem.');
window.confirm("Deseja realmente apagar?")

*/

let num1 = prompt("Digite um número:");
let num2 = prompt("Digite um segundo número:");

// Poderia converter a string com -> parseInt(); / parseFloat(); / Number();
num1 = parseFloat(num1);
num2 = parseFloat(num2);

window.alert(`A soma dos números que você digitou deu: ${num1+num2}`);

let nasceu = prompt("Digite o ano de seu nascimento:");
nasceu = parseInt(nasceu);
alert(`Sua idade hoje é de ${2024 - nasceu} anos `);

