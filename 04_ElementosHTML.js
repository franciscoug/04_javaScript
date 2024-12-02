/** Crearemos elementos HTML desde JavaScript */

/**Creamos un elemneto párrafo */

let el = document.createElement('p');

el.innerHTML = "Elemento creado"//cambiamos el texto que tiene

document.body.append(el)//Agregmos el elemento al documento HTML

el.innerHTML = "<ol><li>Hola mundo!</li></ol>"//Agregamos elementos dentro del elemento

el.style = 'background-color: red; font.weight: bold';
el.className = 'parrafo';
el.id = 'mi_parrafo';

el.setAttribute('mipropiedad', 'mi propiedad');//asignarle una propiedad nueva
console.log(el.getAttribute('mipropiedad'));//Como obtener el valor de algún atributo .getAttribute('indicar el valor de la llave')
console.log(el.hasAttribute('mipropiedad'));//Para averiguar si tiene el atributo



/**
 * El atributo class en HTML se utiliza para asignar nombres de clase a los elementos, permitiendo que sean estilizados 
 * y manipulados de manera uniforme mediante CSS y JavaScript. Las clases son una herramienta poderosa para aplicar 
 * estilos y comportamientos consistentes a grupos de elementos en un documento HTML.
 */