/*Faça um programa que receba um número e escreva a sua respectiva tabuada.
    Exemplo: Entrada: 2         Saída:  2x1 = 2     2x6 = 12
                                        2x2 = 4     2x7 = 14
                                        2x3 = 6     2x8 = 16
                                        2x4 = 8     2x9 = 18
                                        2x5 = 10    2x10 = 20            
*/

const { print } = require('./funcoes-auxiliares');

const valorTabuada = 3;

for (let i = 1; i <= 10; i++) {
   print(`${valorTabuada} x ${i} = ${valorTabuada * i}`);
}
