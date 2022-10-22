/*
Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
*/
class Notas {
   notas;
   constructor(notas) {
      this.notas = notas;
   }
   verMaiorNota() {
      let maiorNota = 0;
      for (let i = 0; i < this.notas.length; i++) {
         if (this.notas[i] > maiorNota) {
            maiorNota = this.notas[i];
         }
      }
      return maiorNota;
   }
}

(function () {
   const listaNotas = [2, 7, 3, 8, 4, 6, 8, 5, 9];
   const notaMaior = new Notas(listaNotas);
   console.log(`A maior nota foi ${notaMaior.verMaiorNota()}`);
})();
