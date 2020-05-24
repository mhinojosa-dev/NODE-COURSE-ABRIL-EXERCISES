const algoritmos = require('./algoritmos/algoritmos');
const argv = require('./config/yargs').argv;

let command = argv._[0];

switch (command) {
    case "list":
        algoritmos.listTable(argv.base, argv.limit);
        break;
    case "convert":
        algoritmos.convertir_millas(argv.millas);
        break;
    case "par":
        algoritmos.numero_par_impar(argv.numero);
        break;
    case "caracter":
        algoritmos.ver_si_es_numero(argv.caracter);
        break;
    case "cuadrado":
        algoritmos.cuadrado_numero(argv.numero);
        break;
        case "primo":
            algoritmos.verificar_numero_primo(argv.numero);
            break;
    default:
        console.log("No se encuentra el comando");
}