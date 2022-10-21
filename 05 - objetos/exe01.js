/* criar classe carros, onde possuem marca, cor e gasto medio de combustivel 
criar metodo onde calcule o valor gasto em reais do percurso, 
recebendo o trajeto em KM e o valor do combustivel.
*/

class Carro {
    marca;
    cor;
    custoMedio;

    constructor(marca, cor, custoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.custoMedio = custoMedio;
    }

    custoTrajeto(trajeto, valor_combustivel) {
    return trajeto * this.custoMedio * valor_combustivel;
    }
}

const onix = new Carro('Chevrolet Onix 2.0', 'Preto', 1/12);
const gol = new Carro('Volkswagem Gol 1.4', 'branco', 1/11);

console.log(`com o seu ${onix.marca} você gastará R$ ${onix.custoTrajeto(100,5.78).toFixed(2)} de combustível`);
