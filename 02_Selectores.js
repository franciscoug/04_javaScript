

/**
 * Asegurate que el archivo inde.html sea igual al siguiente:
 * 
 * <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Curso JS</title>
</head>
<body>

   <div id="cuerpo" name="body">Hola Mundo</div>
   <script src =  "14_ManipulacionDelDOM/02_Selectores.js" ></script>
   
</body>
</html>
 */

/** Quiero seleccionar una etiqueta de index.html, para eso accedemos a
 * un objeto que se llama document.
 * 
 * En JavaScript, document es un objeto global que representa el documento 
 * HTML o XML cargado en el navegador. 
 * Es la raíz del Document Object Model (DOM) y proporciona una interfaz 
 * para interactuar con el contenido y la estructura del documento.
 * 
 * El objeto document en JavaScript es la puerta de entrada para interactuar 
 * con el contenido y la estructura del documento HTML o XML cargado en el 
 * navegador. 
 * Proporciona una amplia gama de métodos y propiedades para acceder,
 * manipular y gestionar el documento, permitiendo a los desarrolladores 
 * crear aplicaciones web dinámicas e interactivas.
 */
//****************   Veamos algunos selectores       */
//Devuelve un HTMLElement
let htmlElement = document.getElementById('cuerpo');
/**Guarda, copia el nombre de la variable, ve al navegador y pega el nombre
en consola, presiona Enter y observa lo que sucede.

Para ver las propiedades que tiene este escribe en consola:
console.log(Object.getPrototypeOf(htmlElement));
*/


//**************************************** */
/**Otro método de document, es getElementByClassName(''), nos permite
 * obtener elementos por su clase se css.
*/

//HTMLCollection se parece a un array pero no lo es.
let elementosRed = document.getElementsByClassName('red');
/**Copia elementosRed y pega la variable en consola, presiona enter */


/*********************************************
 Otro selector es */
//Devuelve una NodeList
let elementoAzul = document.getElementsByName("azul");

//Seleccionamos todos los párrafos, devuelve una HTMLCollection
let parrafos = document.getElementsByTagName('p');


/*********  querySelector nos devuelve solo un elemento HTML 
 * Este selector nos devuelve solo un elemento
*/
let el = document.querySelector('#cuerpo')//Si quiero seleccionar por
                                          // id coloco '#xx'
                                          //Si quiero seleccionar por
                                          //clase de css '.xxx'


/*********************************************************
 * Un selector que busca más de un elemento
   Nos devuelve una NodeList
*/
let els = document.querySelectorAll('p');//'p' para una etiqueta
                                         //'#x' para un id
                                         //'.' para una clase css


/**  Diferencia entre un HTMLCollection y una NodeList:
 * 
 *   HTMLCollection:
 *   No importa cuantas veces manipulemos o modifiquemos el DOM, este siempre
 *   refleja los últimos cambios del DOM.
 * 
 *   NodeList:
 *   No siempre sincroniza con los cambios del DOM.
 */

/**Vamos a probar lo anterior, que uno es live y el otro es estático */
let plive = document.getElementsByTagName('p');
let pstatic = document.querySelectorAll('p');
console.log(plive, pstatic);
//Podemos ver que se presentan todos en ambos
//HTMLCollection(4) [p, p.red, p.red, p.blue, azul: p.blue] 
//NodeList(4) [p, p.red, p.red, p.blue]

//Ahora creamos un elemento en index.html
let nuevoP = document.createElement('p');
document.body.append(nuevoP);
console.log(plive, pstatic);
/**HTMLCollection(5) [p, p.red, p.red, p.blue, p, azul: p.blue] 
 * NodeList(4) [p, p.red, p.red, p.blue] 
 * 
 * HTMLCollection tendrá siempre lo que se encuentra en el documento
 * en tiempo real
 * 
 * Usa HTMLCollection cuando necesitas una colección en vivo que se 
 * actualice automáticamente con cambios en el DOM, o cuando necesitas 
 * acceder a elementos por nombre o ID.
 * 
   Usa NodeList cuando necesitas seleccionar elementos usando selectores 
   CSS complejos, cuando prefieres iterar usando forEach, o cuando 
   necesitas una colección estática que no cambie con el DOM.
   La elección entre HTMLCollection y NodeList depende de tus necesidades 
   específicas y del comportamiento que esperas de la colección de 
   elementos del DOM.*/