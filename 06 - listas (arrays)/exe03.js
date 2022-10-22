/*Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".*/

class Lista {
    lista;
    constructor(lista) {
        this.lista = lista;
    }
    nomesIniciaComV() {
        let nomesComV = [];
        for (let i = 0; i < this.lista.length; i++) {
            let nome = this.lista[i];
            for (let a = 0; a < nome[a].length; a++) {
                if (nome[a] === 'V' || nome[a] === 'v') {
                    nomesComV.push(nome);
                }
            }
        }
        return nomesComV;
    }
}

(function () {
    const listaNomes = ['vinicius', 'Alan', 'Vericio', 'Melanie', 'Carla', 'Vinicius', 'Vanda', 'Valdo'];
    const nomes = new Lista(listaNomes);
    console.log(nomes.nomesIniciaComV());
})();

