let umaString = 'Uma "citação" da citação.';

console.log(umaString);

let pensa = 'Um pensamento dentro de outro "\\pensamento ".'

/*
 Manipulando String
 Fatiamento / Junções ....
*/

/*
console.log(pensa[3]);

console.log(pensa.charAt(5));

console.log(pensa.concat(umaString));

console.log(`${pensa} em um lindo dia.`)

*/
// .charAt() para visualizar um index dentro da string  
// .indexOf() -> para saber onde começa determinado index numa string
// se não encontrar nada retorna -1

//console.log(pensa.indexOf("dentro"));

/*
 .indexOf(); 

 console.log(pensa.indexOf("e", 5));
*/

//  .lastindexOf(); -> começa do final para o início

//.match();
//.replace();
//console.log(pensa.replace("Um","Outro"));

let trava = "O rato roeu a roupa do rei de roma."

console.log(trava.replace(/r/g, "g"));
// .legth; para saber o tamanho da string
console.log(trava.length);

// .slice(); pode ser usado para fatiamento - conta o início e vai até o final menos 1 
// .substring();
console.log(trava.slice(2, 6));

//.split();

