// EJERCICIO 1: SUMA DE TRES VALORES

function sumar() {

    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let num3 = parseFloat(document.getElementById("numero3").value);

    if (document.getElementById("numero1").value === "" ||
        document.getElementById("numero2").value === "" ||
        document.getElementById("numero3").value === "") {

        document.getElementById("resultadoSuma").innerHTML =
            "Debe ingresar los tres números.";

        return;
    }

    let suma = num1 + num2 + num3;

    document.getElementById("resultadoSuma").innerHTML =
        "La suma de los valores ingresados es: " + suma;

}


// EJERCICIO 2: CUADRADO DE UN NÚMERO

function calcularCuadrado() {

    let numero = parseFloat(document.getElementById("numeroCuadrado").value);

    if (document.getElementById("numeroCuadrado").value === "") {

        document.getElementById("resultadoCuadrado").innerHTML =
            "Debe ingresar un número.";

        return;
    }

    let cuadrado = numero * numero;

    document.getElementById("resultadoCuadrado").innerHTML =
        "El cuadrado de " + numero + " es: " + cuadrado;

}


// EJERCICIO 3: PROMEDIO DE CALIFICACIONES

function calcularPromedio() {

    let nombre = document.getElementById("nombre").value;

    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    if (nombre.trim() === "" ||
        document.getElementById("nota1").value === "" ||
        document.getElementById("nota2").value === "" ||
        document.getElementById("nota3").value === "") {

        document.getElementById("resultadoPromedio").innerHTML =
            "Debe completar todos los campos.";

        return;
    }

    let promedio = (nota1 + nota2 + nota3) / 3;

    document.getElementById("resultadoPromedio").innerHTML =
        "El promedio de " + nombre + " es: " +
        promedio.toFixed(2) + " puntos";

}


// EJERCICIO 4: CONVERSIÓN DE UNIDADES

function convertirMetros() {

    let metros = parseFloat(document.getElementById("metros").value);

    if (document.getElementById("metros").value === "") {

        document.getElementById("resultadoConversion").innerHTML =
            "Debe ingresar una cantidad en metros.";

        return;
    }

    let centimetros = metros * 100;

    let kilometros = metros / 1000;

    document.getElementById("resultadoConversion").innerHTML =
        metros + " metros equivalen a " +
        centimetros + " centímetros y " +
        kilometros + " kilómetros.";

}


// EJERCICIO 5: COMPARACIÓN DE DOS VALORES

function compararValores() {

    let num1 = parseFloat(document.getElementById("valor1").value);
    let num2 = parseFloat(document.getElementById("valor2").value);

    if (document.getElementById("valor1").value === "" ||
        document.getElementById("valor2").value === "") {

        document.getElementById("resultadoComparacion").innerHTML =
            "Debe ingresar los dos números.";

        return;
    }

    let mayor = Math.max(num1, num2);

    let menor = Math.min(num1, num2);

    let diferencia = mayor - menor;

    if (num1 === num2) {

        document.getElementById("resultadoComparacion").innerHTML =
            "Los dos números son iguales: " + num1 +
            ". La diferencia es: 0.";

    } else {

        document.getElementById("resultadoComparacion").innerHTML =
            "El número mayor es " + mayor +
            ", el menor es " + menor +
            ", y su diferencia es " + diferencia + ".";

    }

}