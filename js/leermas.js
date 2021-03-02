//creamos una funcion para el boton leer mas
//creamos una variable la cual la inicializaremos en cero, lallamares i
let = i = 0;
//creamos otra variable para seleccionar el boton, para ello llamamos el id que le asignamos
//lo que hara este boton es  con el queryselectos seleccionarlo con su id y creara un evento para cuando le demos click escuche lo que pidamos
let button = document.querySelector('#button').addEventListener('click', function() {
    if (!i) {

        document.getElementById('readmore').style.display = 'inline';
        document.getElementById('button').innerHTML = 'leer menos';
        i = 1;
    } else {
        document.getElementById('readmore').style.display = 'none';
        document.getElementById('button').innerHTML = 'leer mas';
        i = 0;
    }

})