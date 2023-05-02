function linearSearch(disfraces, objetivo) {
    for (let i = 0; i < disfraces.length; i++) {
      if (disfraces[i] === objetivo) {
        return i;
      }
    }
    return -1;
  }
 
  const disfraces = [10, 23, 5, 8, 12, 23, 17];
  const objetivo = 12;
  const indice = linearSearch(disfraces, objetivo);
  if (indice !== -1) {
    console.log(`El invitado con el disfraz número ${objetivo} se encuentra en el índice ${indice} de la lista.`);
  } else {
    console.log(`El invitado con el disfraz número ${objetivo} no se encontró en la lista.`);
  }
