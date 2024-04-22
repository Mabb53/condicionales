/*  9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping. */

let seleccion=Number(prompt(" Selecciona tu preferido:  1.-helado sin topping. 2.-topping de oreo cuesta. 3.- topping de KitKat. 4.- topping de brownie   1-4"));


switch(seleccion){
 case   1:
    alert("El helado sin topping cuesta 50 MXN.")
    
case   2:
        alert("El topping de oreo cuesta 10 MXN.")
        break
case   3:
        alert("El topping de KitKat cuesta 15 MXN.")
        break
 case   4:
        alert("El topping de brownie cuesta 20 MXN.")
         break

default:
    alert("No tenemos ese topping")
    alert("El helado sin topping cuesta 50 MXN.")
}


