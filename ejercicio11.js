// 11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
// Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
// Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
// total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.
let totalApagar=0
let tipo=Number(prompt("tipo de vehiculo 1.-  coche 2.- moto o 3.- autobus"))
let kmsRecorridos=Number(prompt("kilometros de recorrido?"))
let litrosConsumidos=Number(prompt("Litros de gasolina consumidos?"))
switch (tipo) {
    case 1:
        precioXkilometro=.20
        break;
    case 2:
        precioXkilometro=.10
        break;
    case 3:
        precioXkilometro=.50
        break;
    default:
            break;
}
if (litrosConsumidos>=0 && litrosConsumidos<=100) {
     totalApagar = (precioXkilometro*kmsRecorridos) + 5
    alert("total a pagar"+ "$"+totalApagar)
} else {
    totalApagar = (precioXkilometro*kmsRecorridos) + 10
    alert("total a pagar"+ "$"+totalApagar)
}

    


