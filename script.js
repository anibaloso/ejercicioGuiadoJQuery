/*
    let button = document.getElementById('button'); 
    button.addEventListener('click', function(){ 
        alert('click sobre el botón');      
    });
*/

$(document).ready(function () {
    $('#button').on('click', function () {
        alert('click sobre el botón');
    })
    //-----------------------------------------------------------------------------------------

    /*
        Selecciona,  almacena  en  variables  y  muestra  cada  una  de  ellas  para  los  elementos 
        HTML mediante los selectores del tipo id de jQuery.
    */
    let titulo1 = $('#titulo_1')
    let titulo2 = $('#titulo_2')
    let texto_1 = $('#texto_1')
    let button = $('#btn')
    console.log(titulo1)
    console.log(titulo2)
    console.log(texto_1)
    console.log(button)



    // let title1=$('#titulo_1');

    // $('#btn').on('click',function () {
    //     $('p span').text(title1.text())
    // })
    //-----------------------------------------------------------------------------------------
    /*
        Para el siguiente HTML, selecciona mediante los elementos generales todos los <li> 
        que tienen el texto “Nested item”. Igualmente, añade  un  color  al  texto,  en  este  caso 
        debe ser el color rojo. 
    */
    let titulos = $('.titulos');

    $('.titulos').on('click', function () {
        $("span.titulos").text(title1.text())
    })


//-----------------------------------------------------------------------------------------
/*
    Para el siguiente HTML, selecciona mediante los elementos generales todos los <li> 
    que tienen el texto “Nested item”. Igualmente, añade  un  color  al  texto,  en  este  caso 
    debe ser el color rojo. 
*/

$('ul.todos > li > ul > li').css('color', 'red')
//-----------------------------------------------------------------------------------------
/*
Para el siguiente HTML, selecciona mediante los filtros de posición el primer y último 
<li> perteneciente a la clase denominada “todos”, añadiendo un color al texto a los 
elementos seleccionados, en este caso debe ser el color rojo. 
*/
$('ul.todos > li:last').css('color', 'red')
$('ul.todos > li:first').css('color', 'red')



/*
    Utilizando el filtro hijo nth-child, selecciona el segundo elemento de la lista agregando
    un color de fondo azul.
*/

$('ul li:nth-child(2)').css('color', 'blue')

/*
    Escriba un filtro form para el siguiente elemento:
    <input type="email">
*/

let entrada=$('input')
$('#btn-entrada').on('click',function(){
    console.log(entrada.val())
})

})