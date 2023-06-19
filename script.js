/** Inicio Ejercicio 1 */
// Funcion que se va a ejecutar cuando se de click en el boton enviar Respuesta
function ejercicioN1() {
    // declaro una variable y obtengo el valor del input con el ID bello
    let bello = document.getElementById('bello').value;
    // Realizo las respectivas validaciones dependiendo de la entrada del input
    if (bello == 'si' || bello == 'Si' || bello == 'SI') {
        // Obtendo el id respuesta de mi etiqueta div y modifico con la propiedad innerHTML el texto segun corresponda
        document.getElementById("respuestan1").innerHTML = "<h2>Ciertamente!</h2>";
        // Detengo el proceso
        return false;
    } else if (bello == 'no' || bello == 'No' || bello == 'NO') {
        document.getElementById("respuestan1").innerHTML = "<h2>No te creo !</h2>";
        return false;
    } else {
        document.getElementById("respuestan1").innerHTML = "<h2>Error!, no es claro lo que me dices</h2>";
        return false;
    }
}

/** Fin Ejercicio 1 */


/** Inicio Ejercicio 2 */
function ejercicioN2() {
    // declaro una variable y obtengo el valor del input con el ID numero
    let numero = document.getElementById('numero').value;
    // Realizo las respectivas validaciones dependiendo de la entrada del input y verificar si el residuo es 0
    if (numero % 2 === 0) {
        // Obtendo el id respuesta de mi etiqueta div y modifico con la propiedad innerHTML el texto segun corresponda
        document.getElementById("respuestan2").innerHTML = "<h2>El número " + numero + " es divisible entre 2</h2>";
        // Detengo el proceso
        return false;
    } else {
        document.getElementById("respuestan2").innerHTML = "<h2>El número " + numero + " NO es divisible entre 2</h2>";
        return false;
    }
}
/** Fin Ejercicio 2 */


/** Inicio Ejercicio 3 */
function ejercicioN3() {
    // declaro una variable y le asigno la funcion prompt para que me aparezca la ventana emergente
    let numero = prompt("Por favor ingrese un número");
    // Hago la respectiva validación si el número ingresado es divisible por 2
    if (numero % 2 === 0) {
        // muestro la respuesta en un alert
        alert("El numero ingresado es par");
    } else {
        alert("El numero ingresado no es par");
    }
}
/** Fin Ejercicio 3 */


/** Inicio Ejercicio 4 */
function ejercicioN4() {
    // declaro una variable  y obtengo el valor del input con el ID numero_cliente
    let numero_cliente = document.getElementById('numero_cliente').value;
    // Realizo la respectiva validación donde el número del cliente sea igual a 1000 
    if (numero_cliente == '1000') {
        // Obtendo el id respuesta de mi etiqueta div y modifico con la propiedad innerHTML el texto segun corresponda
        document.getElementById("respuestan4").innerHTML = "<h2>Ganaste un premio</h2>";
        // Detengo el proceso
        return false;
    } else {
        // Obtendo el id respuesta de mi etiqueta div y modifico con la propiedad innerHTML el texto segun corresponda
        document.getElementById("respuestan4").innerHTML = "<h2>" + numero_cliente + " Lo sentimos, sigue participando</h2>";
        return false;
    }
}
/** Fin Ejercicio 4 */


/** Inicio Ejercicio 5 */
function ejercicioN5() {
    // declaro dos variables y obtengo el valor de cada uno de los inputs, teniendo presente que hay que 
    //hacer una conversión de texto a numero con la funcion parseInt
    let numeroUno = parseInt(document.getElementById('numeroUno').value);
    let numeroDos = parseInt(document.getElementById('numeroDos').value);

    // Realizo las respectivas validaciones dependiendo cual es el menor número
    if (numeroUno < numeroDos) {
        // Obtendo el id respuesta de mi etiqueta div y modifico con la propiedad innerHTML el texto segun corresponda
        document.getElementById("respuestan5").innerHTML = "<h2> El número " + numeroUno + " Es menor que el número " + numeroDos + "</h2>";
        // Detengo el proceso
        return false;
    } else {
        document.getElementById("respuestan5").innerHTML = "<h2> El número " + numeroDos + " Es menor que el número" + numeroUno + "</h2>";
        return false;
    }
}
/** Fin Ejercicio 5 */


/** Inicio Ejercicio 6 */
function ejercicioN6() {
    // declaro tres variables y obtengo el valor de cada uno de los inputs, teniendo presente que hay que 
    //hacer una conversión de texto a numero con la funcion parseInt
    let numeroUno = parseInt(document.getElementById('nUno').value);
    let numeroDos = parseInt(document.getElementById('nDos').value);
    let numeroTres = parseInt(document.getElementById('nTres').value);

    // Realizo las respectivas validaciones dependiendo cual es el número mayor
    if (numeroUno > numeroDos && numeroUno > numeroTres) {
        // Obtendo el id respuesta de mi etiqueta div y modifico con la propiedad innerHTML el texto segun corresponda
        document.getElementById("respuestan6").innerHTML = "<h2> El Primer número es el mayor</h2>";
        // Detengo el proceso
        return false;
    } else if (numeroDos > numeroUno && numeroDos > numeroTres) {
        document.getElementById("respuestan6").innerHTML = "<h2> El Segundo número es el mayor </h2>";
        return false;
    } else if (numeroTres > numeroUno && numeroTres > numeroDos) {
        document.getElementById("respuestan6").innerHTML = "<h2> El Tercer número es el mayor </h2>";
        return false;
    } else {
        document.getElementById("respuestan6").innerHTML = "<h2> Hay dos números iguales </h2>";
    }
}
/** Fin Ejercicio 6 */


/** Inicio Ejercicio 7 */
function ejercicioN7() {
    // Declaro una variables y obtengo el valor del input 
    let semana = document.getElementById('semana').value;

    // Realizo las respectivas validaciones dependiendo del texto ingresado
    if (semana == 'lunes' || semana == 'LUNES') {
        // Obtendo el id respuesta de mi etiqueta div y modifico con la propiedad innerHTML el texto segun corresponda
        document.getElementById("respuestan7").innerHTML = "<h2> Ingresaste el segundo día de la semana </h2>";
        // Detengo el proceso
        return false;
    } else if (semana == 'viernes' || semana == 'VIERNES') {
        document.getElementById("respuestan7").innerHTML = "<h2> Día anhelado por el trabajador </h2>";
        return false;
    } else if (semana == 'sabado' || semana == 'SABADO') {
        document.getElementById("respuestan7").innerHTML = "<h2> Día para compartir con la familia </h2>";
        return false;
    } else if (semana == 'domingo' || semana == 'DOMINGO') {
        document.getElementById("respuestan7").innerHTML = "<h2> Primer día de la semana </h2>";
        return false;
    } else {
        document.getElementById("respuestan7").innerHTML = "<h2> Día de la semana para ser productivos </h2>";
        return false;
    }
}
/** Fin Ejercicio 7 */


/** Inicio Ejercicio 8 */
function ejercicioN8() {
    // Declaro una variable y realizo un ParseInt para obtner el valor númerico 
    let numero_cliente = parseInt(document.getElementById('numero_calificacion').value);
    // Realizo la respectiva validación según corresponda 
    if (numero_cliente < 1 || numero_cliente > 10) {
        // Obtendo el id respuesta de mi etiqueta div y modifico con la propiedad innerHTML el texto segun corresponda
        document.getElementById("respuestan8").innerHTML = "<h2>Error, número ingresado fuera del rango</h2>";
        // Detengo el proceso
        return false;
    } else if (numero_cliente < 6) {
        document.getElementById("respuestan8").innerHTML = "<h2> Reprobado</h2>";
        return false;
    } else if (numero_cliente >= 6 && numero_cliente <= 8) {
        document.getElementById("respuestan8").innerHTML = "<h2> Regular</h2>";
        return false;
    } else if (numero_cliente == 9) {
        document.getElementById("respuestan8").innerHTML = "<h2> Bien</h2>";
        return false;
    } else if (numero_cliente == 10) {
        document.getElementById("respuestan8").innerHTML = "<h2> Excelente</h2>";
        return false;
    }
}
/** Fin Ejercicio 8 */


/** Inicio Ejercicio 9 */
function ejercicioN9() {
    // declaro una variable y obtengo el valor del input con el ID seleccion_topping
    let topping = document.getElementById('seleccion_topping').value;
    // Realizo las respectivas validaciones dependiendo de la entrada del input 
    if (topping == "0") {
        // Obtendo el id respuesta de mi etiqueta div y modifico con la propiedad innerHTML el texto segun corresponda
        document.getElementById("respuestan9").innerHTML = "<h2>El valor del helado es de $ 50 mxn</h2>";
        // Detengo el proceso
        return false;
    } else if (topping == "1") {
        document.getElementById("respuestan9").innerHTML = "<h2> El valor del helado es de $ 60 mxn </h2>";
        return false;
    } else if (topping == "2") {
        document.getElementById("respuestan9").innerHTML = "<h2> El valor del helado es de $ 65 mxn</h2>";
        return false;
    } else if (topping == "3") {
        document.getElementById("respuestan9").innerHTML = "<h2> El valor del helado es de $ 70 mxn</h2>";
        return false;
    } else if (topping == "4") {
        document.getElementById("respuestan9").innerHTML = "<h2> Lo sentimos este topping ya no esta disponible, Valor del helado es $50 mxn </h2>";
        return false;
    }
}
/** Fin Ejercicio 9 */


/** Inicio Ejercicio 10 */
function ejercicio10() {
    // Declaro dos variable y obtengo el valor de los inputs 
    let cursos = document.getElementById('cursos').value;
    let beca = document.getElementById('beca').value;

    let curso = 4999;
    let Carrera = 3999;
    let Master = 2999;
    let porcentaje, resultado;

    // Realizo las respectivas validaciones dependiendo el curso y la beca
    if (cursos == "Curso" && beca == "facebook") {
        porcentaje = curso * 0.20;
        resultado = curso - porcentaje;
        // Obtendo el id respuesta de mi etiqueta div y modifico con la propiedad innerHTML el texto segun corresponda
        document.getElementById("respuestan10").innerHTML = "<h2>La duración del curso es de dos meses y tienes un costo total de $" + resultado * 2 + "</h2>";
        // Detengo el proceso
        return false;
    } else if (cursos == "Curso" && beca == "google") {
        porcentaje = curso * 0.15;
        resultado = curso - porcentaje;

        document.getElementById("respuestan10").innerHTML = "<h2>La duración del curso es de dos meses y tienes un costo total de $" + resultado * 2 + "</h2>";
        // Detengo el proceso
        return false;
    } else if (cursos == "Curso" && beca == "jesua") {
        porcentaje = curso * 0.50;
        resultado = curso - porcentaje;

        document.getElementById("respuestan10").innerHTML = "<h2>La duración del curso es de dos meses y tienes un costo total de $" + resultado * 2 + "</h2>";
        // Detengo el proceso
        return false;
    } else if (cursos == "Carrera" && beca == "facebook") {
        porcentaje = Carrera * 0.20;
        resultado = Carrera - porcentaje;

        document.getElementById("respuestan10").innerHTML = "<h2>La duración del curso es de seis meses y tienes un costo total de $" + resultado * 6 + "</h2>";
        // Detengo el proceso
        return false;
    } else if (cursos == "Carrera" && beca == "google") {
        porcentaje = Carrera * 0.15;
        resultado = Carrera - porcentaje;

        document.getElementById("respuestan10").innerHTML = "<h2>La duración del curso es de seis meses y tienes un costo total de $" + resultado * 6 + "</h2>";
        // Detengo el proceso
        return false;
    } else if (cursos == "Carrera" && beca == "jesua") {
        porcentaje = Carrera * 0.50;
        resultado = Carrera - porcentaje;

        document.getElementById("respuestan10").innerHTML = "<h2>La duración del curso es de seis meses y tienes un costo total de $" + resultado * 6 + "</h2>";
        // Detengo el proceso
        return false;
    } else if (cursos == "Master" && beca == "facebook") {
        porcentaje = Master * 0.20;
        resultado = Master - porcentaje;

        document.getElementById("respuestan10").innerHTML = "<h2>La duración del curso es de doce meses y tienes un costo total de $" + resultado * 12 + "</h2>";
        // Detengo el proceso
        return false;
    } else if (cursos == "Master" && beca == "google") {
        porcentaje = Master * 0.15;
        resultado = Master - porcentaje;

        document.getElementById("respuestan10").innerHTML = "<h2>La duración del curso es de doce meses y tienes un costo total de $" + resultado * 12 + "</h2>";
        // Detengo el proceso
        return false;
    } else if (cursos == "Master" && beca == "jesua") {
        porcentaje = Master * 0.50;
        resultado = Master - porcentaje;

        document.getElementById("respuestan10").innerHTML = "<h2>La duración del curso es de doce meses y tienes un costo total de $" + resultado * 12 + "</h2>";
        // Detengo el proceso
        return false;
    }
}
/** Fin Ejercicio 10 */


/** Inicio Ejercicio 11 */
function ejercicio11() {
    // declaro tres variables y obtengo el valor de los input 
    let vehiculo = document.getElementById('vehiculo').value;
    let km = document.getElementById('km').value;
    let litrosconsumidos = document.getElementById('litros').value;

    let valorKm;


    // Realizo las respectivas validaciones dependiendo el tipo de vehiculo seleccionado
    if (vehiculo == "Coche") {
        valorKm = 0.20;
    } else if (vehiculo == "Moto") {
        valorKm = 0.10;
    } else if (vehiculo == "Autobus") {
        valorKm = 0.5;
    }

    // Guardo en una variable la operación de los Kilometros recorridos por el valor del km segun el vehiculo seleccionado    
    let costoTotalKm = km * valorKm;

    // Hacer la validación dependiendo de los litros consumidos
    if (litrosconsumidos > 100) {
        costoTotalKm += 10;
    } else {
        costoTotalKm += 5;
    }
    //Obtendo el id respuesta de mi etiqueta div y modifico con la propiedad innerHTML el texto segun corresponda
    document.getElementById("respuestan11").innerHTML = "<h2> El costo total es de $" + costoTotalKm + "</h2>";
    return false;
}


/** Fin Ejercicio 11 */