/**
 * Clases
 * 
 */

class cPersona{
  //Propieddades
   sNombre;
   sApellido;
   nEdad;
   sGenero;
  //Constrctures por omision o por defecto y por parametros.
  constructor(){
   this.sNombre = "Pedro";
   this.sApellido = "Picapiedra";
   this.nEdad = 100;
   this.sGenero = "M";

  }

  //Metodos
  vCamina(){
    console.log("Soy " + this.sNombre  + " y estoy caminado");
  }

  vHabla(){
    console.log("Soy " + this.sNombre  + " y estoy hablando");
  }

}

const Persona1 = new cPersona();
Persona1.vCamina();
