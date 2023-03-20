// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var objeto = {
     nombre: nombre, // propiedad: valor
      edad: edad,
      meow: function(){
      return 'Meow!'
    }
  };
  return objeto
}
// los objetos siempre deben estar dentro de las llaves.


      

// Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
// Devuelve el objeto
// NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
function agregarPropiedad (objeto, property) {
// Tu código:
  objeto[property] = null
  return objeto;
}

// "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
// Invoca ese método
// Nada necesita ser devuelto ("returned")
function invocarMetodo (objeto, metodo) {
// Tu código:
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  
    return objetoMisterioso.numeroMisterioso * 5
    
    //       otro metodo para hacerlo. 
    // var multiplicar = objetoMisterioso.numeroMisterioso * 5;
    // return multiplicar
  }

  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  function eliminarPropiedad (objeto, unaPropiedad) {
  // Tu código:
  delete objeto[unaPropiedad] // bracket notation
  return objeto;
  

}

function nuevoUsuario (nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var objeto = {
    nombre: nombre,
    email: email,
    password: password,
  }
   return objeto
     

  

  

}

function tieneEmail (usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contrario, devuelve "false"
  // Tu código:
  if (usuario.email) { // si (valor.propiedad)
    return true
  }else{
    return false
    

    
  }
}

function tienePropiedad (objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if (objeto[propiedad]) {
    return true
  }
    return false
  // otra forma de ejercitarlo, es la siguiente:
  // return objeto.hasOwnProperty['propiedad'];
}
  // if (objeto.propiedad)  dot notation
  // if (objeto['propiedad']) break notation

function verificarPassword (usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // Tu código:
   //if (usuario.password === password)
    //return true;
    //return false;
   return usuario['password'] === password
  

  
  // otra opcion para resolver seria:
  // return usuario['password'] === password;
  //   if   (usuario[password] === password);
}

function actualizarPassword (usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
  usuario['password'] = nuevaPassword;
  return usuario; 
  // con (dot notation)
  // usuario.password = nuevaPassword;
  // return usuario;
}

function agregarAmigo (usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // Tu código:
  usuario.amigos.push(nuevoAmigo);
  return usuario;
  /*
    ejemplo:
    var gabriel = {
      amigos: ['india', 'bella', 'antonella']
    }
    */


}

function pasarUsuarioAPremium (usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  //for (var i=0; i<usuarios.length; i++){
    //   usuarios[i].esPremium = true;
      //}
      // return usuarios;
      // otra forma de resolverlo
      usuarios.forEach(elemento => {
        elemento.esPremium = true
      });
      return usuarios;
    }
  

    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    function sumarLikesDeUsuario (usuario) {
  // Tu código:
  var suma = 0;
  for(var i = 0; i < usuario.posts.length; i++){
       suma += usuario.posts[i].likes;
                                
  }
   return suma;
}

// Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
// Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
// El método resta el descuento del precio y devuelve el precio con descuento
// Devuelve el objeto "producto" al final de la función
// Ejemplo:
// producto.precio -> 20
// producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
// producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
function agregarMetodoCalculoDescuento (producto) {
  // Tu código:
  // producto.calcularPrecioDescuento = function(){   //objeto(producto)
  // var descuento = producto.precio * producto.porcentajeDeDescuento
  // var precioDescuento = producto.precio - descuento
  // return precioDescuento;
  // }
  // return producto;
  // };
    producto.calcularPrecioDescuento = function(){
      var descuento = this.precio * this.porcentajeDeDescuento;
      return this.precio - descuento;
    }
      return producto;
    }

       
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = { 
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}