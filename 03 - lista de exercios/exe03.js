/*calcule valor final do produto
cosidere a tabela abaixo para os calculos
    (1) - À vista no Débito , 10% de desconto;
    (2) - À vista Dinheiro ou Pix, 15% de desconto;
    (3) - Duas vezes, sem desconto;
    (4) - mais que Duas vezes, juros de 10%;
*/

const valor_produto = 100;
const tipo_pagamento = 4;

if (tipo_pagamento === 1) {
    const valor = valor_produto - (valor_produto * 0.10);
    console.log('Valor final do produto é: R$', valor.toFixed(2));
} else if (tipo_pagamento === 2) {
    const valor = valor_produto - (valor_produto * 0.15);
    console.log('Valor final do produto é: R$', valor.toFixed(2));
} else if (tipo_pagamento === 3) {
    const valor = valor_produto;
    console.log('Valor final do produto é: R$', valor.toFixed(2));
} else {
    const valor = valor_produto + (valor_produto * 0.10);
    console.log('Valor final do produto é: R$', valor.toFixed(2));
};
