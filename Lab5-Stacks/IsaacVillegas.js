class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  function isHTMLBalanced(html) {
    const stack = new Stack();
  
    // Recorre cada carácter de la cadena HTML
    for (let i = 0; i < html.length; i++) {
      const char = html[i];
  
      // Si el carácter es una etiqueta de apertura, agrégala a la pila
      if (char === "<" && html[i + 1] !== "/") 
      {
        const endIndex = html.indexOf(">", i);
        const tag = html.substring(i, endIndex + 1);
        stack.push(tag);
        i = endIndex;
      }
      else if (char === "<" && html[i + 1] === "/") 
      {
        const endIndex = html.indexOf(">", i);
        const tag = html.substring(i, endIndex + 1);
  
        // Verifica si la etiqueta de cierre coincide con la etiqueta de apertura superior de la pila
        if (stack.isEmpty()) {
          return false;
        }
  
        const topTag = stack.pop();
        const topTagName = topTag.substring(1, topTag.length - 1);
        const tagToCheck = tag.substring(2, tag.length - 1);
        if (topTagName !== tagToCheck) {
          return false;
        }
  
        i = endIndex;
      }
      
    }
  
    // Verifica si todas las etiquetas se cerraron correctamente
    return stack.isEmpty();
  }

  const html1 = "<html><head><span><title>Examen</title></head></span></html>";
  console.log(isHTMLBalanced(html1)); // true
  
  const html2 = "<html><div><details>Prueba</details></div><body><p>Esto es una examen</body></html>";
  console.log(isHTMLBalanced(html2)); // false
  
  const html3 = "<html><footer><ttitle>Prueba</title></footer><body><p>Esto es el fin de la examen </p></body>";
  console.log(isHTMLBalanced(html3)); // false

  //Lo complejo del algoritmo suponiendo que es el peor de los casos es cuyo algoritmo sea O(n^2)