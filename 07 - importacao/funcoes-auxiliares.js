
const entradas = [5, 1, 3, 9, 10, 12, 22, 4, 40];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

function tamanhoLista() {
    const tamanho = entradas.length;
    return tamanho;
}

module.exports = { gets, print, tamanhoLista };
