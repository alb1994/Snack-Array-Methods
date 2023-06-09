//creo oggetto studenti 
let studenti = [
{
   'id': '213',
   'nome': 'Marco della rovere',
   'grado': '78',
},
{
   'id': '110',
   'nome': 'Paola Cortellessa',
   'grado': '96',
},
{
   'id': '250',
   'nome': 'Andrea Mantegna',
   'grado': '48',
},
{
   'id': '145',
   'nome': 'Gaia Borromini',
   'grado': '74',
},
{
   'id': '196',
   'nome': 'Luigi Grimaldello',
   'grado': '68',
},
{
   'id': '102',
   'nome': 'Piero della Francesca',
   'grado': '50',
},
{
   'id': '120',
   'nome': 'Francesca da Polenta',
   'grado': '84',
}
];
// stampo stundeti  in maisuscolo 
let maiuscolo = studenti.map((studenti) => studenti.nome.toLocaleUpperCase());
console.log(maiuscolo);
//stampo studenti con grado superiore al 70
let voto = studenti.filter((studenti_70) => {
   return studenti_70.grado > 70
});
console.log(voto);
//stampo studenti con voto superiore a 70 e id superiore a 120
let gradoid = studenti.filter((studenti) => {
   return studenti.id > 120 && studenti.grado > 70
});
console.log(gradoid);