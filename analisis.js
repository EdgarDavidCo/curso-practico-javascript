const salariosCol = colombia.map(
    function (persona) {
return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;

    }
);

function esPar(numero) {
    if(numero % 2 === 0);
}
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

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad -1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    }else {
        const pesonaMitad = lista[mitad];
        return pesonaMitad;
    }
}
const medianaGeneralCol = medianaSalarios(salariosColSorted);

const spliceStar = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStar;


const salariosColTop10 = salariosColSorted.splice(
    spliceStar,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
medianaGeneralCol,
medianaTop10Col,
});

