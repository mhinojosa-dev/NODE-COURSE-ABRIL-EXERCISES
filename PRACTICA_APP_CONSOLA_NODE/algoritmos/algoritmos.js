const color = require('colors');

let listTable = (base, limit = 10) => {
    console.log('=========================='.green);
    console.log(`==== Tabla del ${base} ====`.green);
    console.log('=========================='.green);

    for (let i = 1; i <= limit; i++) {
        console.log(`${base} * ${i} = ${base * i}`.blue);
    };
};

let convertir_millas = (millas) => {
    let kilometros = millas * 1609;
    console.log(`==== Conversor Millas a Kilometros====`.green);
    console.log(millas + " millas es " + kilometros + " Km.");

}

let numero_par_impar = (numero) => {
    
    console.log(`==== Verificar si un numero es PAR o IMPAR====`.green);

    if(numero % 2 ===0){
        console.log("El numero: " + numero + " es PAR.");
    }else{

        console.log("El numero: " + numero + " es IMPAR.");

    }

}

let ver_si_es_numero = (caracter) => {
    
    console.log(`==== Verificar si es caracter es NUMERO o no ====`.green);

    if(isNaN(caracter)){
        console.log("El caracter ingresado: " + caracter + " NO es un NUMERO!!");
    }else{

        console.log("El caracter ingresado: " + caracter + " SI es un NUMERO!!");
    }
    

}
let cuadrado_numero = (numero) => {
    
    console.log(`==== Calcular el cuadrado de un NUMERO ====`.green);

    
        console.log("El cuadrado de numero ingresado es: " + numero*numero );
 
    

}
let verificar_numero_primo = (numero) => {
    
    console.log(`==== Verificar si un numero es primo ====`.green);
    let primo = true;
    for (let index = 2; index < numero; index++) {
        if(numero%index ===0){

            primo=false;
        }
    }
    if(primo){
        console.log("El numero: "+numero+" es primo");
    }else{
        console.log("El numero: "+numero+" no es primo");

    }
}

module.exports = {
    listTable,
    convertir_millas,
    numero_par_impar,
    ver_si_es_numero,
    cuadrado_numero,
    verificar_numero_primo
}