// 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.
let  entrada1=prompt("eres belisimo/a?")
if ( entrada1=== "si") {
    alert("Ciertamente")
} 
else {
  alert("no te creo");
}

// 2 y 3. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

let  entrada2=Number(prompt("Numero?"))
let x=entrada2%2;
if ( x== 0) {
    alert(  entrada2 + " Es divisible entre 2, por lo tanto es par");
} 
else {
  alert(entrada2 + " No Es divisible entre 2. Por lo que No es par");
}

