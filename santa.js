// Con setTimeout
function leerCarta(carta, callback) {
    return setTimeout(() => {
        callback(carta.split("").reverse().join(""));
    }, 2000);
}

function construirJuguete (instruccion, callback) {
    return setTimeout(() => {
        const juguete = instruccion.split("").reverse().join("");
        if (juguete.includes("madera"))
            return callback(`${juguete} de madera fina`);
        else if (juguete.includes("xbox"))
            return callback(`No te puedo enviar tu ${juguete}`);
        else
            return callback(`Aquí tienes tu ${juguete}`);

        callback(juguete);
    }, 5000);
}

function envolverJuguete(juguete, callback) {
    return setTimeout(() => {
        callback(`${juguete} envuelto`)
    }, 3000);
}

// Ejemplo de callback hell
/* leerCarta("carrido de madera", (instruccion) => {
    construirJuguete(instruccion, (juguete) => {
        envolverJuguete(juguete, console.log);
    });
});*/

// Modularizar las llamadas
// Hacer llamadas aparte para las llamadas
function construirJ(juguete) {
    envolverJuguete(juguete, console.log);
}

function leerC(instruccion) {
    construirJuguete(instruccion, construirJ);
}

leerCarta("carrito de madera", leerC);