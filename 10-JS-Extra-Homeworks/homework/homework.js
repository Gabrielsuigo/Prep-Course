// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

   var array=[]
     for(var clave in objeto){
        array.push([clave, objeto[clave]])
      }
      return array
  }
     //    otra opcion usando este metodo entries().
     // return Object.entries(objeto);
   
function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  // el metodo sort() ordena los elementos de un arreglo localmente y devuelve el arreglo ordenado.
  var objeto={}
  var array = string.split('').sort();
  array.forEach(letra => {
    if(!objeto[letra])objeto[letra]= 1
    else objeto[letra]++
  })
    return objeto
}


//Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
//al principio de la palabra.
//Ejemplo: soyHENRY -> HENRYsoy
function capToFront(s) {
//Escribe tu código aquí
//     to lower case = a minúscula
//     to upper case = a MAYÚSCULA
  var mayúsculas=''
  var minúsculas=''
  for (let i = 0; i < s.length; i++) {
    if(s[i] === s[i].toUpperCase()){
      mayúsculas = mayúsculas.concat(s[i])
   // mayúsculas = mayúsculas + s[i];
   }else{
      minúsculas = minúsculas.concat(s[i])
   // minúsculas = minúsculas + s[i];
  }
}
    return mayúsculas+minúsculas
}


//La función recibe una frase. 
//Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
//pero con cada una de sus palabras invertidas, como si fuera un espejo.
//Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
function asAmirror(string) {
  //Escribe tu código aquí
  var array = string.split(' ');
  console.log(array)
  array.forEach((string, i) => {
    var palabraArray = string.split('');
    array[i] = palabraArray.reverse().join('');
  });
    var stringReverse = array.join(' ');
    return stringReverse;
    

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  // numero capicua '1351'
  var numToString = numero.toString(); // ---> '1351'
  var numArray = numToString.split(''); // ---> ['1', '3', '5', '1']
  var reverseArray = numArray.reverse(); // ---> ['1', '5', '3', '1']
  var numRevString = reverseArray.join(''); // ---> '1531'

  if(numero.toString() === numRevString){
    return 'Es capicua';
  } else {
    return 'No es capicua';
  }
  }



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var arrayString = cadena.split(''); // ---> ['s', 'a', 'd', 'b', 'c']
  var arrayFiltrado = arrayString.filter(
    (elemento) => elemento !== 'a' && elemento !== 'b' && elemento !== 'c'
  );
  // array filtrado ['s', 'd']
  var StringFiltrado = arrayFiltrado.join(''); // ---> 'sd'
  return StringFiltrado;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort ((a,b) => (a.length - b.length));
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  return arreglo1.filter(element => (
         arreglo2.includes(element)
  ));
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

