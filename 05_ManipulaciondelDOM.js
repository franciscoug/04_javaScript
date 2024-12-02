/** Vamos a ver como manjipular el DOM, agregando elementos, modificandoles,
 * quitandolos, reemplazandolos ...
 */

let el = document.createElement('p');
el.innerText = 'Elemento creado';


/** .append recibe texto y nodos, en este caso recibe un nodo*/
/**texto: document.body.append('Hola Mundo')*/
document.body.append(el);//agregamos el elemento al final del documento HTML

/**Quitar un elemento el.remove()*/
el.remove()

/**colocar un elemento al inicio*/
document.body.prepend(el);

/**
 * Las referencias de estos elementos son únicas, no podemos agregar el mismo elemento a 
 * varias partes de un documento HTMl, el último llamado de este método es el que va a tomar prioridad
 */


/**Reemplazar elementos*/
let div = document.createElement('div');
div.innerText = 'Soy un texto';
el.replaceWith(div);

/**También podemos utilizar una alternativa para replazar elementos  dentro del documento
 * eso es utilizando e nodo padre, por naturaleza el nodo padre es la etiqueta del body
 */
document.body.replaceChild(el, div);/**(lo que va a insertar, lo que va a quitar) */
document.body.removeChild(el);
document.body.appendChild(el);/**Solo recibe nodos */

/**Si quisiera insertar el elemento div, pero al lado de otro no al inicio ni al final */
//document.body.insertBefore(div, el);

/**Otros métodos  
 * 
 * El método insertAdjacentElement es una forma efectiva de insertar elementos en posiciones específicas en 
 * relación con otro elemento en el DOM. 
*/
//Ejecutar los siguientes, uno a la vez.
// document.body.insertAdjacentElement('beforebegin',div.cloneNode(true));
// document.body.insertAdjacentElement('afterbegin',div.cloneNode(true));
// document.body.insertAdjacentElement('beforeend',div.cloneNode(true));
// document.body.insertAdjacentElement('afterend',div.cloneNode(true));


/**Realiza pruebas con
 */
//document.body.insertAdjacentHTML();
//document.body.insertAdjacentText();

/**
 * Modificar el documento index.html original a través del DOM es una práctica común y útil para crear aplicaciones web 
 * dinámicas e interactivas. Sin embargo, es importante seguir buenas prácticas para asegurar un rendimiento óptimo, 
 * mantener la consistencia del estado, garantizar la seguridad y facilitar la mantenibilidad del código. 
 * Usar técnicas como el "Document Fragment" y considerar el uso de frameworks modernos puede ayudar a lograr estos 
 * objetivos.
 */