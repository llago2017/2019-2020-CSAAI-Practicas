console.log("Ejecutando JS...")

const display = document.getElementById("display")
const formula = document.getElementById("formula")
const display_resultado = document.getElementById("display_resultado")

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

function vueltaA0() {
  // Pongo las variables del display a 0
  display_resultado.innerHTML = "";
  formula.innerHTML = "";
  if (document.getElementById("formula_activa")) {
    const formula_activa = document.getElementById("formula_activa");
    formula_activa.innerHTML = "";
    formula_activa.id = "formula";
  }

  if (document.getElementById("display_activo")) {
    const display_activo = document.getElementById("display_activo");
    display_activo.id = "display";
  }
}

coma.onclick = () => {
  console.log("Click!!");
  formula.innerHTML += ".";
}

reset.onclick = () => {
  vueltaA0();
}

n9.onclick = () => {
  console.log("Click!!");
  formula.innerHTML += "9";
}

n8.onclick = () => {
  console.log("Click!!");
  formula.innerHTML += "8";
}
n7.onclick = () => {
  console.log("Click!!");
  formula.innerHTML += "7";
}
n6.onclick = () => {
  console.log("Click!!");
  formula.innerHTML += "6";
}
n5.onclick = () => {
  console.log("Click!!");
  formula.innerHTML += "5";
}
n4.onclick = () => {
  console.log("Click!!");
  formula.innerHTML += "4";
}
n3.onclick = () => {
  console.log("Click!!");
  formula.innerHTML += "3";
}
n2.onclick = () => {
  console.log("Click!!");
  formula.innerHTML += "2";
}
n1.onclick = () => {
  console.log("Click!!");
  formula.innerHTML += "1";
}
n0.onclick = () => {
  console.log("Click!!");
  formula.innerHTML += "0";
}

suma.onclick = () => {
  console.log("Click!!");
  formula.innerHTML += "+";
}

resta.onclick = () => {
  console.log("Click!!");
  formula.innerHTML += "-";
}

multiplica.onclick = () => {
  console.log("Click!!");
  formula.innerHTML += "*";
}

divide.onclick = () => {
  console.log("Click!!");
  formula.innerHTML += "÷";
}

function calc() {

  // Suma
  if (operacion.includes('+')) {
    opera = operacion.split('+');

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

  display.id = "display_activo";
  formula.id = "formula_activa";
  display_resultado.innerHTML = resultado;
}

igual.onclick = () => {
  console.log("Click!!");
  operacion = formula.innerHTML;
  console.log(formula.length);
  calc();
}

function init() {
  document.onkeydown = function(ev) {
    switch (ev.keyCode) {

      case 48: // n0
        formula.innerHTML += "0";
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
        formula.innerHTML += "1";
        n1.id = "active";

        setTimeout(function() {
          active.id = "id";
        }, 175);
        break;

      case 50: // n2
        formula.innerHTML += "2";
        n2.id = "active";
        setTimeout(function() {
          active.id = "n2";
        }, 175);
        break;

      case 51: // n3
        formula.innerHTML += "3";
        n3.id = "active";
        setTimeout(function() {
          active.id = "n3";
        }, 175);
        break;

      case 52: // n4
        formula.innerHTML += "4";
        n4.id = "active";
        setTimeout(function() {
          active.id = "n4";
        }, 175);
        break;

      case 53: // n5
        formula.innerHTML += "5";
        n5.id = "active";
        setTimeout(function() {
          active.id = "n5";
        }, 175);
        break;

      case 54: // n6
        formula.innerHTML += "6";
        n6.id = "active";
        setTimeout(function() {
          active.id = "n6";
        }, 175);
        break;

      case 55: // n7
        formula.innerHTML += "7";
        n7.id = "active";
        setTimeout(function() {
          active.id = "n7";
        }, 175);
        break;

      case 56: // n8
        formula.innerHTML += "8";
        n8.id = "active";
        setTimeout(function() {
          active.id = "n8";
        }, 175);
        break;

      case 57: // n7
        formula.innerHTML += "9";
        n9.id = "active";
        setTimeout(function() {
          active.id = "n9";
        }, 175);
        break;

        // opciones
      case 187: // Suma
        formula.innerHTML += "+";
        suma.id = "si_activa";
        setTimeout(function() {
          si_activa.id = "suma";
        }, 175);
        break;

      case 189: // Resta
        formula.innerHTML += "-";
        resta.id = "opcion_activa";
        setTimeout(function() {
          opcion_activa.id = "resta";
        }, 175);
        break;

      case 13: // igual
        igual.id = "si_activa";
        setTimeout(function() {
          si_activa.id = "igual";
        }, 175);
        operacion = formula.innerHTML;
        calc();
        break;

      case 106: // Multiplicacion
        formula.innerHTML += "*";
        multiplica.id = "opcion_activa";
        setTimeout(function() {
          opcion_activa.id = "multiplica";
        }, 175);
        break;

      case 189: // divide
        formula.innerHTML += "÷";
        divide.id = "opcion_activa";
        setTimeout(function() {
          opcion_activa.id = "divide";
        }, 175);
        break;

      case 67: // Reset (c)
        formula.innerHTML += "";
        reset.id = "opcion_activa";
        setTimeout(function() {
          opcion_activa.id = "reset";
        }, 175);
        vueltaA0();
        break;
    }
  }

}
