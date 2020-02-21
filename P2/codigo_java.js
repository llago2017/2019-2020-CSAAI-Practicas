console.log("Ejecutando JS...")

const display = document.getElementById("display")

// Números
const n9 = document.getElementById("n9")
const n8 = document.getElementById("n8")
const n7 = document.getElementById("n7")
const n6 = document.getElementById("n6")
const n5 = document.getElementById("n5")
const n4 = document.getElementById("n4")
const n3 = document.getElementById("n3")
const n2 = document.getElementById("n2")
const n1 = document.getElementById("n1")
const n0 = document.getElementById("n0")

// Operaciones
const suma = document.getElementById("suma")
const resta = document.getElementById("resta")
const multiplica = document.getElementById("multiplica")
const divide = document.getElementById("divide")
const igual = document.getElementById("igual")
const reset = document.getElementById("reset")
const coma = document.getElementById("coma")

coma.onclick = () => {
  console.log("Click!!");
  display.innerHTML += ".";
}

reset.onclick = () => {
  console.log("Click!!");
  display.innerHTML = "";
}

n9.onclick = () => {
  console.log("Click!!");
  display.innerHTML += "9";
}

n8.onclick = () => {
  console.log("Click!!");
  display.innerHTML += "8";
}
n7.onclick = () => {
  console.log("Click!!");
  display.innerHTML += "7";
}
n6.onclick = () => {
  console.log("Click!!");
  display.innerHTML += "6";
}
n5.onclick = () => {
  console.log("Click!!");
  display.innerHTML += "5";
}
n4.onclick = () => {
  console.log("Click!!");
  display.innerHTML += "4";
}
n3.onclick = () => {
  console.log("Click!!");
  display.innerHTML += "3";
}
n2.onclick = () => {
  console.log("Click!!");
  display.innerHTML += "2";
}
n1.onclick = () => {
  console.log("Click!!");
  display.innerHTML += "1";
}
n0.onclick = () => {
  console.log("Click!!");
  display.innerHTML += "0";
}

suma.onclick = () => {
  console.log("Click!!");
  display.innerHTML += "+";
}

resta.onclick = () => {
  console.log("Click!!");
  display.innerHTML += "-";
}

multiplica.onclick = () => {
  console.log("Click!!");
  display.innerHTML += "*";
}

divide.onclick = () => {
  console.log("Click!!");
  display.innerHTML += "÷";
}

igual.onclick = () => {
  console.log("Click!!");
  operacion = display.innerHTML;

  // Suma
  if (operacion.includes('+')) {
    opera = operacion.split('+');
    console.log(opera);

    if (opera.length > 2) {
      resultado = parseFloat(opera[0]) + parseFloat(opera[1]);
      for (var i = 0; i < (opera.length - 2); i++) {
        resultado += parseFloat(opera[i + 2]);
      }
    } else {
      resultado = parseFloat(opera[0]) + parseFloat(opera[1]);
    }
    console.log(opera);
  }

  // Resta
  if (operacion.includes('-')) {
    opera = operacion.split('-');
    console.log(opera);

    if (opera.length > 2) {
      resultado = parseFloat(opera[0]) - parseFloat(opera[1]);
      for (var i = 0; i < (opera.length - 2); i++) {
        resultado += -(parseFloat(opera[i + 2]));
      }
    } else {
      resultado = parseFloat(opera[0]) - parseFloat(opera[1]);
    }
    console.log(opera);
  }

  // Multiplicacion
  if (operacion.includes('*')) {
    opera = operacion.split('*');
    console.log(opera);

    if (opera.length > 2) {
      resultado = parseFloat(opera[0]) * parseFloat(opera[1]);
      for (var i = 0; i < (opera.length - 2); i++) {
        resultado = resultado * (parseFloat(opera[i + 2]));
      }
    } else {
      resultado = parseFloat(opera[0]) * parseFloat(opera[1]);
    }
    console.log(opera);
  }

  // Division
  if (operacion.includes('÷')) {
    opera = operacion.split('÷');
    console.log(opera);

    if (opera.length > 2) {
      resultado = parseFloat(opera[0]) / parseFloat(opera[1]);
      for (var i = 0; i < (opera.length - 2); i++) {
        resultado = resultado / (parseFloat(opera[i + 2]));
      }
    } else {
      resultado = parseFloat(opera[0]) / parseFloat(opera[1]);
    }
    console.log(opera);
  }

  display.innerHTML = resultado;
}

function init() {
  document.onkeydown = function(ev) {
    switch (ev.keyCode) {

      case 48: // n0
        display.innerHTML += "0";
        n0.id = "active";
        /*
        Esta parte se activa 20ms más tarde, para volver al estilo
        anterior, donde el botón no estaba pulsado
       */
        setTimeout(function() {
          active.id = "n0";
        }, 175);
        break;

      case 49: // n1
        display.innerHTML += "1";
        n1.id = "active";

        setTimeout(function() {
          active.id = "id";
        }, 175);
        break;

      case 50: // n2
        display.innerHTML += "2";
        n2.id = "active";
        setTimeout(function() {
          active.id = "n2";
        }, 175);
        break;

      case 51: // n3
        display.innerHTML += "3";
        n3.id = "active";
        setTimeout(function() {
          active.id = "n3";
        }, 175);
        break;

      case 52: // n4
        display.innerHTML += "4";
        n4.id = "active";
        setTimeout(function() {
          active.id = "n4";
        }, 175);
        break;

      case 53: // n5
        display.innerHTML += "5";
        n5.id = "active";
        setTimeout(function() {
          active.id = "n5";
        }, 175);
        break;

      case 54: // n6
        display.innerHTML += "6";
        n6.id = "active";
        setTimeout(function() {
          active.id = "n6";
        }, 175);
        break;

      case 55: // n7
        display.innerHTML += "7";
        n7.id = "active";
        setTimeout(function() {
          active.id = "n7";
        }, 175);
        break;

      case 56: // n8
        display.innerHTML += "8";
        n8.id = "active";
        setTimeout(function() {
          active.id = "n8";
        }, 175);
        break;

      case 57: // n7
        display.innerHTML += "9";
        n9.id = "active";
        setTimeout(function() {
          active.id = "n9";
        }, 175);
        break;

        // opciones
      case 187: // Suma
        display.innerHTML += "+";
        suma.id = "si_activa";
        setTimeout(function() {
          si_activa.id = "suma";
        }, 175);
        break;

      case (16): // igual
        display.innerHTML += "=";
        igual.id = "si_activa";
        setTimeout(function() {
          si_activa.id = "igual";
        }, 175);
        break;
    }
  }
}
