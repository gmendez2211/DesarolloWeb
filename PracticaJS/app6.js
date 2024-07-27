/**
 * Objetos
 * 
 */

var Persona = new Object();
Persona.sNombre = "Pedro";
Persona.sApellido = "Picapiedra";
Persona.nEdad = 100;

console.log('La persona es: ' + Persona.sNombre );


//Objetos anidados
const MiCarro = {
    color: "red",
    reudas: 4,
    motor: { cilindro: 4, tamanio: 2.2 },
  };
  //Imprime Object
  console.log('El motor de mi carro es: ' + MiCarro.motor );
  //Imprime number
  console.log('El motor de mi carro es: ' + typeof MiCarro.motor.cilindro );