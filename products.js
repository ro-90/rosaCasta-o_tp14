
let electrodomesticos = ["smartTv", "lavadora", "aspiradora", "ventilador", "secador", "tablet"]
//acceder de manera arbitraria a diferentes elementos del array
/*console.log(electrodomesticos[1]);*/
/*console.log(electrodomesticos[4]);*/
/*console.log(electrodomesticos[0]);*/



//extraer el primer elemento del array y agregarlo a lo ultimo
/*let nombreEliminido=electrodomesticos.shift();electrodomesticos.push("smarTv");

console.log(electrodomesticos)*/

//agregar dos elementos al final del array
/*electrodomesticos.push("freidora","batidora");
console.log(electrodomesticos)*/

//mostrar por consola la cantidad de elementos del array
//electrodomesticos.length
/*console.log(electrodomesticos.length);*/

//Busca un elemento del array y crea una condicion responsable de establecer si existe o no el producto en el array

/*  if(electrodomesticos.includes("lavadora")==true){console.log("producto encontrado");

  }else{console.log("el producto buscado no existe")}*/



//unir todos los elementos del array en una cadena de texto(string)
let cadenaTexto = electrodomesticos.join("  " );
 console.log(cadenaTexto)




// Determinar la cantidad de elementos que posee la cadena de texto obtenida
let cantidadElementos = cadenaTexto.split(' ').length;


console.log(cantidadElementos); // 6

// Cambiar el nombre de algún producto de la cadena de texto por otro
let cadenaModificada = cadenaTexto.replace("aspiradora", "microondas");


console.log(cadenaModificada);
// Generar un nuevo array con cada una de las palabras de la cadena de texto, separadas por comas
let nuevoArray = cadenaModificada.split(' ');




console.log(nuevoArray); 