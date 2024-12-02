/**Vamos a hablar sobre los eventos en JavaScript, en particular con los
 * que son gatillados(activados) por el usuario cuando va a interactuar con el sitio web.
 * 
 * Crearemos un formulario
 */
let form = document.createElement('form');//creamos un formulario
form.id = 'mi-formulario';//asignamos el id de 'mi-formulario'
let input = document.createElement('input');
input.setAttribute('type', 'text'); //es de tipo texto
let btn = document.createElement('button');//creamos un boton
btn.innerText = 'Enviar';//tendrá un innertext de Enviar
form.append(input);//al formulario le agregamos un input
form.append(btn);//le agregamos al formulario el boton

document.body.append(form)//Se lo agregamos a body

/**Con el formulario creado, le asignamos los eventos */
//1
//el evento .onmouseenter cambia el fondo o para asignarle una animación
form.onmouseenter = e  => {//Este evento se gatilla cuando el mouse pasa encima del formulario
    console.log('entra el muose', e)//para que se puede gatillar se lo tenemos que asignar a una función
};//todas las funciones que se le asignan a eventos van a recibir un objeto e(event)
//Probar

//2
//se ejecuta cuando el usuario saque el mouse del elemento
form.onmouseleave = e => {
    console.log('sale el mouse', e);
}

//3 este evento se ejecuta cuando pinchemos sobre la caja de texto
input.onfocus = e => {
    console.log('input on focus',e);
}

//4 .onblur, se jecuta cada vez que el ususario pinche afuera de un campo de texto que haya  seleccionado.
input.onblur = e => {
    console.log('input perdió el foco',e);
}

//5 .onchange, se jecuta cada vez que el valor dentro del formulario cambie
input.onchange = e => {
    console.log('valor cambia', e.target.value);//e.target obtenemos el elemento html, .value para sacar 
                                                //el valor del campo
}

//6. eventos que podemos agregarle al boton, ejecutar .onclick cada vez que pinchemos sobre el boton
// btn.onclick = e =>{
//     e.preventDefault();//impide que la página se refresque, indicar de manera manual que es lo que queremos que haga 
//                        //.onclick
//     console.log('botón clickeado');//cada vez que tenemos alguna etiqueta de formulario <form id=¨mi-formulario">
//                                    //cuando existe un boton justamente al final del formulario, el esplorador we
//                                    //interpreta el clic como que tiene que enviar el formulario a algún lugar
//                                    //en cada clic en Enviar puedes ver como la página web se refresca,
//                                    //el onclick 'botón clickeado' no lo veremos a menos que detengamos el refresh
                                   
// }

//Algunas otras aplicaciones ejecutan el método  .addEventListner 

btn.addEventListener('click', e =>{
    e.preventDefault();
    console.log('botón clickeado con addEventListener');
})





