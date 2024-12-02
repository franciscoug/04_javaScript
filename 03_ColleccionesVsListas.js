/**Vamos a ver las diferencias entre las HTMLCollections y las NodeList */

let collection = document.getElementsByTagName('p');
let list = document.querySelectorAll('p');
console.log(collection, list);

//Como podemos seleccionar los elementos de las colecciones y de las listas
//A continuación copia y pega las variables en consola, una por una, y presiona enter

//buscar elemntos en Colecciones
let item1 = collection.namedItem('azul');//Con collection podemos ir a buscar elementos por su
                                         //propiedad name
let item2 = collection.item('3')//Observa que es mismo resultado, utilizamos en indes 3 de la collection
let item3 = collection[3];
/**collection.forEach(x => console.log(x));*/

/**Ahora que pasa si queremos iterar una coleccion, 
 * ¿Tendran las colecciones un método .forEach()
 * collection.forEach(x => console.log(x)) es un error; */

/**Iterar elementos*/
for(let el of collection)   //vamos a iterar los  elementos y no los indices por eso el of
    console.log(el);//Observa como muestra en consola todos los elementos
                    
/**Existe otra forma para iterar los elementos, podemos transformar la colección en un Array*/
//Array.from(collection).forEach(x => console.log(x));//muestra el objeto
//[...collection].forEach(x => console.log(x));//Muestra los elementos



/**********  AHora vamos a ver los elemntos que contiene la NodeList
 * Para poder acceder a los elementos que contiene eata.
 */
let item = list.item(3);//para acceder a los elementos lo hago por sus indices
                       //no por sus elementos nombrados
let item5 = list[3];// Copia las variables y pegalas en consola.

/**Veamos sus métodos     */
list.forEach(x => console.log(x));

/**los metodos entries, keys y values, devuelven iteradores no arrays */
let entries = list.entries();
let keys = list.keys();
let values = list.values();
[...list].forEach(el => console.log(el));

/**los arrays son estructuras de datos más completas y versátiles con una 
 * amplia gama de métodos y propiedades, mientras que los iteradores 
 * son objetos más simples diseñados específicamente para recorrer 
 * colecciones de datos de manera secuencial. La elección entre usar un
 * array o un iterador depende de tus necesidades específicas y del tipo
 *  de operaciones que planeas realizar. */

/**for...of es más flexible en términos de los tipos de colecciones que puede iterar y 
 * permite el uso de break, continue, y return para controlar el flujo del bucle. 
 * forEach es específico para arrays y NodeList, proporciona acceso a índices y al array 
 * completo, y permite establecer el contexto (this), pero no permite interrumpir el bucle 
 * fácilmente. La elección entre los dos depende de tus necesidades específicas y del tipo
 *  de colección con la que estés trabajando. */