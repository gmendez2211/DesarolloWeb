/**
 * Función tipo flecha
 * 
 */

let nNum1 = 10;
let nNum2 = 20;
function fSumar(Num1, Num2) {
    return Num1 + Num2;
  }
console.log(fSumar(nNum1, nNum2));

//Conversión a función tipo flecha
const suma = (Num1, Num2) => {
    return Num1 + Num2;
  }

  console.log(suma(nNum1, nNum2)); 

  //Función tipo flecha 2
  const Suma2 = (Num1, Num2) =>  Num1 + Num2;
  console.log(Suma2(nNum1, nNum2)); 