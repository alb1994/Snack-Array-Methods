// aray invitati
let invitati = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez',
 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];
 //creo inviti 
 let inviti = invitati.map((invitati,i) => {
    return{'talovo':'tavolo vip','invitato': invitati,'numero': i}
 });
 // stampo inviti 
 console.log(inviti);