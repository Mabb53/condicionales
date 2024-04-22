// 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
alert("Determinaremos el menor de 2 numeros." )
let  a=Number(prompt("Numero?"))
let  b=Number(prompt("Numero?"))
if (!(a>=b )) {
    let menor=a;
    alert(menor + " es menor que " +b)
} else {
if ((!(b>=a))) {
    let menor=b;
    alert(menor + " es menor que " + a)
} else {
    alert(a + " es igual a "+b)   
}    
}

// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.
alert("Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.")
let  x=Number(prompt("Numero?"))
let  y=Number(prompt("Numero?"))
let  z=Number(prompt("Numero?"))
if ((x>=y )) {
    let mayor=x;
  alert(mayor + " es mayor que " +y)
    if (mayor>=z) {
        alert(mayor + " es el mayor")
    } else {
        
    }
}
else {
if (((y>=z))) {
    let mayor=y;
    alert(mayor + " ES EL MAYOR " )
} else {
    alert(z + " ES EL MAYOR") 

}    
}
