// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

let calificacion=Number(prompt("Cual es tu calificación de 1 a 10?"));

if (calificacion>0 && calificacion<=10) {
    if (calificacion<6) {
    alert("Reprobado") ;  
    }
    if (calificacion>=6 && calificacion<=8) {
        alert("Regular") ;  
        }
        if (calificacion==9) {
            alert("Bien") ;  
            } 
            if (calificacion==10) {
                alert("Excelente") ;  
                }       
} else {
    alert("ooops solo valores numericos entre 1 y10");
}