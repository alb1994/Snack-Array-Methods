// creo array oggetti 
let squadre = [
    { nome: 'Ascoli',
    puntiFatti: 0,
    falliSubiti: 0 
    },
    { nome: 'Brescia',
    puntiFatti: 0,
    falliSubiti: 0 
    },
    { nome: 'Cittadella',
    puntiFatti: 0,
    falliSubiti: 0
    },
    { nome: 'Empoli',
    puntiFatti: 0,
    falliSubiti: 0
    },
    { nome: 'Frosinone',
    puntiFatti: 0,
    falliSubiti: 0
    }
];
// creo funzione che genera numeri casuali
function generaNumeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//aggiungo numeri casuali negli oggetti
squadre.forEach((squadra) => {
    squadra.puntiFatti = generaNumeroCasuale(0, 100);
    squadra.falliSubiti = generaNumeroCasuale(0, 50);
});
//stmpo in console nome e falli subiti 
squadre.forEach(({ nome, falliSubiti }) => {
  console.log(`Squadra: ${nome}, Falli Subiti: ${falliSubiti}`);
});