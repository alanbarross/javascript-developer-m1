/*imprima uma tabuada do numero informado*/

class Tabuada {
    numero;

    constructor(numero){
        this.numero = numero;
    }
    montarTabuada(i){
        return `${i} x ${this.numero} : ${i*this.numero}`; 
    }
}

(function(){
    for (let i = 1; i <= 10; i++) {
        const tabuadaDeMultiplicar = new Tabuada(3);
        console.log(tabuadaDeMultiplicar.montarTabuada(i));
    }
})();
