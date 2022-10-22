// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.
//     Exemplo:
//         Entrada: 5 3 4 1 10 8
//         Saída: Maior número par: 10  Menor número impar: 1

const { gets, print } = require('./funcoes-auxiliares-ex2');

const quantidadeNumeros = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;

for (let i = 0; i < quantidadeNumeros; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        if (maiorNumeroPar === 0) {
            maiorNumeroPar = numero;
        } else if (maiorNumeroPar < numero) {
            maiorNumeroPar = numero;
        }
    } else {
        if (menorNumeroImpar === 0) {
            menorNumeroImpar = numero;
        } else if (menorNumeroImpar > numero) {
            menorNumeroImpar = numero;
        }
    }
}

print(`Maior número par: ${maiorNumeroPar}`);
print(`Menor número impar: ${menorNumeroImpar}`);
