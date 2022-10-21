/* Criar classe Pessoas com os atributos nome, peso e altura,
as pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada Jose que tenha 70kg e 1,75 de altura, e peça para lhe informar seu IMC.
Classifique o IMC da pessoa >>>>
    - abaixo de 18.5 : Abaixo do peso;
    - entre 18,5 e 25 : Peso normal;
    - entre 25 e 30 : Acima do peso;
    - entre 30 e 40 : Obeso;
    - acima de 40 : Obesidade Grave;
*/

class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }
    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return 'Abaixo do peso'
        } else if (imc >= 18.5 && imc < 25) {
            return 'Com Peso normal'
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso'
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso'
        } else {
            return 'Com Obesidade Grave'
        }
    }
}

const jose = new Pessoas('José', 70, 1.75);
console.log(`${jose.nome} informou que seu IMC é ${jose.calcularImc().toFixed(2)}, ele está ${jose.classificarImc()}`);
const alan = new Pessoas('Alan', 78, 1.77);
console.log(`${alan.nome} informou que seu IMC é ${alan.calcularImc().toFixed(2)}, ele está ${alan.classificarImc()}`);
