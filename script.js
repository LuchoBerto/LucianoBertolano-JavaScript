let nombreApellido = prompt("Ingresar nombre y apellido del alumno");

function Promedio() {
  let total = 0,
    notaFinal = 0;

  for (let i = 1; i <= 3; i++) {
    let Calificacion = prompt(`Ingresa la nota obtenida en la materia ` + i);
    let nroCalif = parseInt(Calificacion);
    total = total + parseInt(nroCalif);
  }
  notaFinal = parseInt(total) / 3;
  if (notaFinal >= 9) {
    Nota = "EXCELENTE";
  } else if (notaFinal >= 8) {
    Nota = "MUY BUENO";
  } else if (notaFinal >= 6) {
    Nota = "REGULAR";
  } else {
    Nota = "INSUFICIENTE";
  }
  return notaFinal;
}

notaFinal = Promedio();
alert(`El promedio de ${nombreApellido.toUpperCase()} es de ${notaFinal}

Presione ACEPTAR para ver calificacion final`);
alert(`La calificacion final es ${Nota}`);
