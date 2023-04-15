/**
 * Complejidad Temporal -> O( )
 * Complejidad Espacial -> O( ) 
 */
function linearSearch(arreglo, clave) {
    for (let indice = 0; indice < arreglo.lenght; indice++) {
        if (arreglo[indice] === clave) {
            return indice;
        }
    }
    return -1;
}

let myArray = [1,2,3,4,5,6,7,8,9,10];
console.log("El indice está en la posición: "+linearSearch(myArray, 2));