/* Informe se o aluno passou ou reprovou, 
conforme as 3 notas informadas. 
classificação de media:
    menor que 5, Reprovado
    entre 5 e 7, Recuperação
    maior que 7, Aprovado
*/

const nota_1 = 4;
const nota_2 = 8;
const nota_3 = 10;
const media_nota = (nota_1 + nota_2 + nota_3) / 3;

console.log('Sua média é : ', media_nota.toFixed(1));

if (media_nota < 5) {
    console.log('Reprovado');
} else if (media_nota >= 5 && media_nota <= 7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado');
};
