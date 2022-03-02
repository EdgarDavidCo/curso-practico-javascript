const lista1 = [1,2,3,4,5,5,5,6,2,3,3,3,3,4,4,4,4,4,43,3,3,3,];

const listaCount1 = {};

lista1.map(
    function (elemento){
        if(listaCount1[elemento]){
            listaCount1[elemento] += 1; //Con la forma larga listaCount1[elemento] +1;
        } else {
            listaCount1[elemento] = 1;
        }
        
    }
);

const listaArray = Object.entries(listaCount1).sort(
    function (valorAcumulado, nuevoValor) {
valorAcumulado - nuevoValor
    }
);

const lista1Array = Object.entries(listaCount1).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
)

const moda = lista1Array[lista1Array.length - 1];