function calcularMediaAritmetica(lista){
    // Funcion con un ciclo for
    //let sumalista = 0;
    //for (let i = 0; i < lista.length; i++){
      //  sumalista = sumalista + lista[i];
    //
    const sumalista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumalista / lista.length;
    return promedioLista;
}

const lista1 = [
    100, 200, 300, 500, 1000000,
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;


if (esPar(lista1.length)) {
const elemento1 = lista1[mitadLista1 - 1];
const elemento2 = lista1[mitadLista1];
const promedio1y2 = calcularMediaAritmetica([
    elemento1,
    elemento2,
]);
mediana = promedio1y2;
} else {
    mediana = lista1[mitadLista1];
}