/*
Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]
*/

class MediaAlunos {
   medias;
   constructor(medias) {
      this.medias = medias;
   }
   verMedias() {
      let mediasDeRecuperacao = [];
      for (let i = 0; i < this.medias.length; i++) {
         if (this.medias[i] < 5) {
            mediasDeRecuperacao.push(this.medias[i]);
         }
      }
      return mediasDeRecuperacao;
   }
}
(function () {
   const lista = [2, 7, 3, 8, 10, 4, 8, 4, 5];
   const listaMedias = new  MediaAlunos(lista);
   console.log(`Médias de Recuperação ${listaMedias.verMedias()}`);
})();
