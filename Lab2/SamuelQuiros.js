/**
 * Complejidad Temporal -> O(1)
 * Complejidad Espacial -> O (n2)
 */
function linearSearch(arreglo, clave){
    for(let indice=0; indice < arreglo.lengtth; indice++){
        if (arreglo[indice] === clave){
            return indice;
        }
    }
    return -1;
}
let myArray = [1,2,3,4,5,6,7,8,9,10];
console.log("El indice está en la posición: "+linearSearch(myArray,2));