const options = {
    base: {
        demand: true,
        alias: "b",
        describe: "numero base para la multiplicacion"
    },
    limit: {
        alias: 'l',
        default: 10
    }
};

const options_millas = {
    millas: {
        demand: true,
        alias: "m",
        describe: "numero en millas para convertir a kilometros"

    }

}
const options_par_impar = {
    numero: {
        demand: true,
        alias: "n",
        describe: "numero a determinar si es par o impar"

    }

}
const options_ver_caracter = {
    caracter: {
        demand: true,
        alias: "c",
        describe: "caracter a determinar si es numero o nor"

    }
}
const options_cuadrado_numero = {
    numero: {
        demand: true,
        alias: "n",
        describe: "Calcular el cuadrado de un numero"

    }
}
const options_numero_primo = {
    numero: {
        demand: true,
        alias: "n",
        describe: "Numero a verificar si es o no Numero Primo"

    }
}

const argv = require('yargs')
    .command("list", "Print in cli the table", options)
    .command("convert", "Convierte millas a kilometros", options_millas)
    .command("par", "Verifica si un numero es par o impar", options_par_impar)
    .command("caracter", "Verifica si el caracter ingresado es o no un numero", options_ver_caracter)
    .command("cuadrado", "Calcula el cuadrado de un numero",options_cuadrado_numero)
    .command("primo", "Verifica si el numero ingresado es primo",options_numero_primo)
    .help().argv;

module.exports = {
    argv
}