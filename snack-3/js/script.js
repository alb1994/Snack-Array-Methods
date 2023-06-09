//creo array bici 
let bici = [
   {
     'nome': 'atala',
     'peso': 8,
   },
   {
     'nome': 'basso',
     'peso': 10,
   },
   {
     'nome': 'bianchi',
     'peso': 20,
   },
   {
     'nome': 'carrera',
     'peso': 5,
   },
   {
     'nome': 'piaggio',
     'peso': 15,
   }
 ];
 //creazione array contenente i pesi delle bici 
 let peso_bici = bici.map((bici) => {
   return bici.peso;
 });
 // trovo il peso minimo utilizzando lo spread
 let minPeso = Math.min(...peso_bici);
 // mando a schermo con template literal
 console.log(`Il peso minimo delle biciclette è: ${minPeso}`);