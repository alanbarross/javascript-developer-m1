/*calcule valor final do produto
cosidere a tabela abaixo para os calculos
    (1) - À vista no Débito , 10% de desconto;
    (2) - À vista Dinheiro ou Pix, 15% de desconto;
    (3) - Duas vezes, sem desconto;
    (4) - mais que Duas vezes, juros de 10%;
*/

function calcular_juros(valor, porcentagem) {
    return (valor + (valor * (porcentagem / 100)));
}

function calcular_desconto(valor, porcentagem) {
    return (valor - (valor * (porcentagem / 100)));
}

function tipo_pagamento(valor, tipo) {
    if (tipo === 1) {
        return 'Valor final do produto é de R$ ' + calcular_desconto(valor, 10).toFixed(2);
    } else if (tipo === 2) {
        return 'Valor final do produto é de R$ ' + calcular_desconto(valor, 15).toFixed(2);
    } else if (tipo === 3) {
        return 'Valor final do produto é de R$ ' + calcular_desconto(valor, 0).toFixed(2);
    } else {
        return 'Valor final do produto é de R$ ' + calcular_juros(valor, 10).toFixed(2);
    }
}

(function () {
    console.log(tipo_pagamento(100, 3));
})();
