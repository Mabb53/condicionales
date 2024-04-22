/* 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje. */

let dia=prompt("Escribe un dia de la semana. ¡Usa solo minisculas!")

switch (dia) {
    case "domingo":
      dia = "Domingo";
      alert("Hoy domingo. Disfruta el dia en familia");
      // break;
    case "lunes":
      dia = "Lunes";
      alert(dia +": Inicia la semana con entusiasmo");
      break;
    case "martes":
      dia = "Martes";
      alert(dia +": Animo, vamos subiendo la cuesta");
      break;
    case "miercoles":
      dia = "Miercoles";
      alert(dia +": Estamos a media jornada. Viene lo mejor");
      break;
    case "jueves":
      dia = "Jueves";
      alert(dia +": Vale la pena preparar la conclusion de las tareas pendientes");
      break;
    case "viernes":
      dia = "Viernes";
      alert(dia +": Finaliza la semana laboral procura cerrar tareas pendientes");
      break;
    case  "sabado":
      dia = "Sabado";
      alert(dia +": Disfruta, descansa y consientete¡");
}
