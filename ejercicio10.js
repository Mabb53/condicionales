/* 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses */
let costo=0;
let dscto=0
let nivel= Number(prompt("Nivel: 1.-Course: $4999 MXN, 2.-Carrera $3999 MXN o 3.-Master: $2999 MXN " ))

switch (nivel) {
    case 1:
        costo=costo+4999
        meses=2
        break;
    case 2:
        costo=costo+3999
        meses=6
         break;
    case 3:
        costo=costo+2999
        meses=12
        break;    
    default:
        break;
}
let beca=Number(prompt("cuenta con akfuna beca: 1.-Beca Facebook: 20% de descuento.2.- Beca Google: 15% de descuento. 3.-Beca Jesua: 50% de descuento."))
switch (beca) {
    case 1:
        dscto=0.2
        
        break;
    case 2:
        dscto=.15
        break;
    case 3:
        dscto=.5
        break;    
    default:
        break;
}
costo=meses*costo*dscto
alert("$"+costo+"MXN") 