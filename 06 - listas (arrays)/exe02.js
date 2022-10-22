/*percorra uma lista de n numeros e mostre os numeros pares*/

class Lista {
    tamanhoLista;
    constructor(tamanhoLista) {
        this.tamanhoLista = tamanhoLista;
    }
    criarLista() {
        let lista = [];
        for (let i = 1; i <= this.tamanhoLista; i++) {
            lista[i - 1] = i;
        }
        return lista;
    }
    verParesDaLista() {
        let listaPares = [];
        for (let i = 0; i < this.criarLista().length; i++) {
            if (this.criarLista()[i] % 2 === 0) {
                listaPares.push(this.criarLista()[i]);
            }
        }
        return listaPares
    }
}

(function () {
    const listar = new Lista(20);
    listar.criarLista();
    const pares = listar.verParesDaLista();
    console.log(`Pares : ${pares}`);
})();
