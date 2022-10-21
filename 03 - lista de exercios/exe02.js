/*IMC = peso / (altura * altura)
informe a condição da pessoa conforme a tabela
    - abaixo de 18.5 : Abaixo do peso;
    - entre 18,5 e 25 : Peso normal;
    - entre 25 e 30 : Acima do peso;
    - entre 30 e 40 : Obeso;
    - acima de 40 : Obesidade Grave;
    */

const altura_pessoa = 1.78;
const peso_pessoa = 90;
const imc_pessoa = peso_pessoa / (altura_pessoa * altura_pessoa);
console.log(imc_pessoa.toFixed(2))
if (imc_pessoa < 18.5) {
    console.log('Abaixo do peso');
} else if (imc_pessoa > 18.5 && imc_pessoa <= 25) {
    console.log('Peso normal');
} else if (imc_pessoa > 25 && imc_pessoa <= 30) {
    console.log('Acima do peso');
}else if (imc_pessoa > 30 && imc_pessoa <= 40){
    console.log('Obeso');
}else{
    console.log('Obesidade Grave');
};
