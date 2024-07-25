/**
 * Funciones
 * 
 */

let Num1;
let Num2;
function fSumar(Num1, Num2) {
    return Num1 + Num2;
  }

  console.log('Suma de la primera función: ' + fSumar(10,20));

  const fSumar2 = function (Num1, Num2) {
    return Num1 + Num2;
  };
  let Suma = fSumar2(20,20); // x obtiene el valor 16
  
  console.log('Suma de la primera función: ' + Suma);