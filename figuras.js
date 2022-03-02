//Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
return lado * 4;
}  

//console.log("El perimetro del cuadrado: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado ;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;
//console.log(
  //  "Los lados de mi triangulo miden: "
    //+ ladoTriangulo1 
    //+ "cm, " 
    //+ ladoTriangulo2 
    //+ "cm, " 
    //+ baseTriangulo 
    //+ "cm"
    //);
    //console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");
    //const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    //console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");
    //const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2 ;
    //console.log("El area del triangulo es de: " + areaTriangulo + "cm^2");


    console.groupEnd();


    // Codigo del circulo 
    console.group("Circulos");
    // Radio
    
    // Diametro
    function diametroCirculo(radio) {
        return radio * 2;
    }
    //const diametroCirculo = radioCirculo * 2;
    //console.log("El diametro del circulo es de: " + diametroCirculo + "cm");
    // PI
    const PI = Math.PI;

    // Circunferencia
    function perimetroCirculo(radio) {
        const diametro = diametroCirculo(radio);
        return diametro * PI;
    }
    // Area
    //const areaCirculo = (radioCirculo * radioCirculo) * PI;
    function areaCirculo(radio) {
        return (radio * radio) * PI;
    }

    console.groupEnd();

    // Aqui interactuamos con el html 
    
    function calcularPerimetroCuadrado(){
        const input = document.getElementById("inputCuadrado");
        const value = input.value;

        const perimetro = perimetroCuadrado(value);
        alert(perimetro);

    }
    function calcularAreaCuadrado(){
        const input = document.getElementById("inputCuadrado");
        const value = input.value;

        const area = areaCuadrado(value);
        alert(area);

    }

    function calcularPerimetroTriangulo() {
        const input1 = document.getElementById("inputTrianguloLado1");
        const value1 = Number(input1.value);

        const input2 = document.getElementById("InputTrianguloLado2");
        const value2 = Number(input2.value);

        const inputBase = document.getElementById("InputTrianguloBase");
        const valueBase = Number(inputBase.value);

        const perimetro = perimetroTriangulo(value1, value2, valueBase);
        alert("El perimetro del triangulo es : " + perimetro);
        

        
    }

    function calcularAreaTriangulo(){
        const base  = document.getElementById("inputTrianguloBasePerimetro");
        const value = base.value;

        const altura = document.getElementById("inputTrianguloAlturaPerimetro");
        const value = altura.value;

        const area = areaTriangulo(value);
        alert(area);
    }

    function calcularDiametroCirculo(){
        const input = document.getElementById("inputCirculo");
        const value = input.value;

        const diametro = diametroCirculo(value);
        alert(diametro);
    }

    function calcularAreaCirculo(){
        const input = document.getElementById("inputCirculo");
        const value = input.value;

        const area = areaCirculo(value);
        alert(area);
    }

    function calcularPerimetroCirculo(){
        const input = document.getElementById("inputCirculo");
        const value = input.value;

        const perimetro = perimetroCirculo(value);
        alert(perimetro);
    }
