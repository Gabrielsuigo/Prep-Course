// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, callback) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return callback(n1, n2);
}

// Suma todos los números enteros (int/integers) de un array ("numeros")
// Pasa el resultado a `cb`
// No es necesario devolver nada
function sumarArray(numeros, cb) {
  //Tu código:
  //var sumaResultado = 0
 //for (var i = 0; i < numeros.length; i++){
    //  sumaResultado += numeros[i];
    var suma = numeros.reduce((acumulador, elementoA) => acumulador + elementoA)
    cb(suma)
    }
    // acumulador = 0
    //[1, 2, 3, 4, 5] al ponerle .reduce, me va a dar el total = (15)
    //acumulador = 0 + 1 = 1
    //acumulador = 1 + 2 = 3
    //acumulador = 3 + 3 = 6
    //acumulador = 6 + 4 = 10
    //acumulador = 10 + 5 = 15

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  // opcion 1 forEach
  
     
  
// for (let i = 0; i < array.length; i++) {
// cb(array[i])
//}
  array.forEach(valores => cb(valores));
}
  
  // opcion 2 for
   //for(var i in array){
   //cb(array[i]);
   //}
  

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  //     1er opcion
  // var returnMap = []
  // for(var i = 0; i < array.length; i++){
  // returnMap.push(cb(array[i]))
  // } 
  // return returnMap;
  //     opcion 2
 return array.map(elem => cb(elem));
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  //var filterR = []
  //for (let i = 0; i < array.length; i++) {
  //if (array[i][0] === 'a') filterR.push(array[i])
  //}
  //return filterR;
    return array.filter(elemento => elemento[0] === 'a')
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
