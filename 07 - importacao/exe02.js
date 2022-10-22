/*Faça um programa que receba a quantidade de números e seus respectivos valores e imprima o maior e o menor número deste conjunto.
Exemplo: Entrada: 4 100 150 90 200   Saída: Maior número: 200 Menor número: 90 */

const { print, gets } = require('./funcoes-auxiliares.js');

const quantidadeNumeros = gets();
let maiorNumero = 0;
let menorNumero = 0;

for (let i = 0; i < quantidadeNumeros; i++) {
    const numero = gets();
    if (maiorNumero === 0 || menorNumero === 0) {
        maiorNumero = numero;
        menorNumero = numero;
    } else if (maiorNumero < numero) {
        maiorNumero = numero;
    } else if (menorNumero > numero) {
        menorNumero = numero;
    }
}

print(`O maior é ${maiorNumero}`);
print(`O menor é ${menorNumero}`);