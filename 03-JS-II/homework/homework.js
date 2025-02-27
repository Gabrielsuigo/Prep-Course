// No cambies los nombres de las funciones.

// "x" e "y" son números enteros (int).
// Devuelve el número más grande
// Si son iguales, devuelve cualquiera de los dos
// Tu código:
function obtenerMayor(x, y) {
  if (x === y) {
    return x
  } else if(x>y){
    return x
  } else {
    return y
  }
}

//Determinar si la persona según su edad puede ingresar a un evento.
//Si tiene 18 años ó más, devolver --> "Allowed"
//Si es menor, devolver --> "Not allowed"
function mayoriaDeEdad(edad) {
return edad >= 18? 'Allowed' : 'Not allowed'
}
  
//Recibimos un estado de conexión de un usuario representado por un valor numérico. 
//Cuando el estado es igual a 1, el usuario está "Online"
//Cuando el estado es igual a 2, el usuario está "Away"
//De lo contrario, presumimos que el usuario está "Offline"
//Devolver el estado de conexión de usuario en cada uno de los casos.
function conection(status) { //estado
  if(status === 1){
    return 'Online'
  } else if(status === 2){
   return 'Away'
  } else {
    return 'Offline'
  }
}

// Devuelve un saludo en tres diferentes lenguajes:
// Si "idioma" es "aleman", devuelve "Guten Tag!"
// Si "idioma" es "mandarin", devuelve "Ni Hao!"
// Si "idioma" es "ingles", devuelve "Hello!"
// Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!"
// Tu código:
function saludo(idioma) {
  switch(idioma){
    case 'aleman':
      return 'Guten Tag!';
    case 'mandarin':
      return 'Ni Hao!';
    case 'ingles':
      return 'Hello!';
    default:
      return 'Hola!';
  }
}

//La función recibe un color. Devolver el string correspondiente:
//En caso que el color recibido sea "blue", devuelve --> "This is blue"
//En caso que el color recibido sea "red", devuelve --> "This is red"
//En caso que el color recibido sea "green", devuelve --> "This is green"
//En caso que el color recibido sea "orange", devuelve --> "This is orange"
//Caso default: devuelve --> "Color not found"
//Usar el statement Switch.
function colors(color) {
  switch(color){
    case "blue":
      return 'This is blue';
    case 'red':
      return 'This is red';
    case 'green':
      return 'This is green';
     case 'orange':
      return 'This is orange';
      default:
        return 'Color not found'  
    
  }
}

// Devuelve "true" si "numero" es 10 o 5
// De lo contrario, devuelve "false"
function esDiezOCinco(numero) {
  // Tu código:
  if(numero === 10 || numero === 5) return true
  return false
}

// Devuelve "true" si "numero" es menor que 50 y mayor que 20
// De lo contrario, devuelve "false"
function estaEnRango(numero) {
  // Tu código:
  if(numero < 50 && numero > 20) return true
  return false
}

// Devuelve "true" si "numero" es un entero (int/integer)
// Ejemplo: 0.8 -> false
// Ejemplo: 1 -> true
// Ejemplo: -10 -> true
// De lo contrario, devuelve "false"
// Pista: Puedes resolver esto usando `Math.floor`
function esEntero(numero) {
  // Tu código:
  if(Math.floor(numero) === numero) return true
  return false
}

// Si "numero" es divisible entre 3, devuelve "fizz"
// Si "numero" es divisible entre 5, devuelve "buzz"
// Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
// De lo contrario, devuelve el numero
function fizzBuzz(numero) {
  if(numero % 3 === 0 && numero % 5 === 0) return 'fizzbuzz'
  if(numero % 3 === 0) return 'fizz'
  if(numero % 5 === 0) return 'buzz'
  return numero
  
}

//La función recibe tres números distintos. 
//Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
//Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
//Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
//0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
//Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  function operadoresLogicos(num1, num2, num3) {
   if(num1 === 0 || num2 === 0 || num3 === 0) return 'Error'
   if(num1 < 0 || num2 < 0 || num3 <0) return 'Hay negativos'
   if(num3 > num1 && num3 > num2) return num3 + 1
   if(num1 > num2 && num1 > num3 && num1 > 0) return 'Número 1 es mayor y positivo'
  return false
}

// Devuelve "true" si "numero" es primo
// De lo contrario devuelve "falso"
// Pista: un número primo solo es divisible por sí mismo y por 1
// Pista 2: Puedes resolverlo usando un bucle `for`
// Nota: Los números 0 y 1 NO son considerados números primos
function esPrimo(numero) {
if(numero < 2 ) return false;
if(numero === 2 ) return true;
  for (let i = 2; i < numero; i++) {
    if(numero % i === 0){
      return false;
    }
  }
    return true;
    
}

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if(valor === true) return 'Soy verdadero'
  return 'Soy falso';

}

//Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
//La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
function tablaDelSeis() {
//Escribe tu código aquí 
  var tabladel6 = [];
    for (let i = 0; i < 11; i++) {
      tabladel6.push(6*i)
    }
    return tabladel6
  }

  
  


function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if(numero > 99 && numero < 1000) return true;
  return false;
  }

  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  //5
  function doWhile(numero) {
  var i = 0;
  do{
    i = i + 1;
    numero = numero + 5;
  }
  while(i < 8);
  return numero;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
