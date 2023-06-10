//Ejemplo 1 O(Log N)
function logFunc(n,count =0)
{ 
  if(n <=1) return count;

   n = Math.floor(n / 2);
   return logFunc(n, count + 1);
}

var resultado =logFunc(8);
console.log(resultado);










//Ejemplo 2 O(Log N)
let arregloOrdenado = ['a','b','c','d','f','g','h','i','j','k'];
let elementoBuscado = 'j';

//let arregloOrdenado = [1,2,3,4,7,8,10];
//let elementoBuscado = 8;

let result = busquedaBinaria(arregloOrdenado, elementoBuscado);

if (result !== null) { 
    console.log("El número " + elementoBuscado + " se encuentra en la posición " + result)
} else {
    console.log("El número " + elementoBuscado + "no se encunetra en la posición " + arregloOrdenado)
}





function busquedaBinaria(arregloOrdenado, elementoBuscado) { 
 let inicio = 0;
 let fin = arregloOrdenado.length - 1;

   while (inicio <= fin) { 
     let medio =Math.floor ((inicio + fin)/ 2);

     if (arregloOrdenado[medio] === elementoBuscado) {
        return medio;
     }
 
      if (arregloOrdenado[medio]< elementoBuscado) { 
         inicio = medio + 1;
        } else { 
         fin = medio - 1;
       }
    }

    return null;
}