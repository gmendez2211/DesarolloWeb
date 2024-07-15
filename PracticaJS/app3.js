//Uso de Switch

let periferico = 'Bocinas';

switch (periferico) {
    case "Mouse":
      console.log('El ' + periferico + ' tiene un precio de $15.00');
      break;
    case "Teclado":
        console.log('El ' + periferico + ' tiene un precio de $25.00');
      break;
    case "MoudePad":
        console.log('El ' + periferico + ' tiene un precio de $10.00');
      break;
    case "Monitor":
        console.log('El ' + periferico + ' tiene un precio de $150.00');
      break;
    case "Bocinas":
        console.log('Las ' + periferico + ' tienen un precio de $80.00');
      break;
    default:
      console.log("Lo lamentamos, por el momento no disponemos de " + periferico + ".");
  }
  