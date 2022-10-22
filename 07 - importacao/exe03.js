/*Faça um programa que receba a quantidade de números e seus respectivos valores e Imprima todos os números pares.
Exemplo: Entrada:  5 1 3 9 10 12    Saída:  Números Pares: 10, 12 */

const { print, gets, tamanhoLista } = require('./funcoes-auxiliares.js');

const quantidadeNumeros = tamanhoLista();
const listaPares = [];

for (let i = 0; i < quantidadeNumeros; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        listaPares.push(numero);
    }
}

print(`Pares na lista : ${listaPares}`);