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

// Borra todo lo que haya en el display
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
  init();
}

// Mi array para guardar lo que Pongo
var array = [];

coma.onclick = () => {
  formula.innerHTML += ".";
  array.push('.');
}

reset.onclick = () => {
  vueltaA0();
}

n9.onclick = () => {
  formula.innerHTML += "9";
  array.push('9');
}

n8.onclick = () => {
  formula.innerHTML += "8";
  array.push('8');
}
n7.onclick = () => {
  formula.innerHTML += "7";
  array.push('7');
}
n6.onclick = () => {
  formula.innerHTML += "6";
  array.push('6');
}
n5.onclick = () => {
  formula.innerHTML += "5";
  array.push('5');
}
n4.onclick = () => {
  formula.innerHTML += "4";
  array.push('4');
}
n3.onclick = () => {
  formula.innerHTML += "3";
  array.push('3');
}
n2.onclick = () => {
  formula.innerHTML += "2";
  array.push('2');
}
n1.onclick = () => {
  formula.innerHTML += "1";
  array.push('1');
}
n0.onclick = () => {
  formula.innerHTML += "0";
  array.push('0');
}

suma.onclick = () => {
  formula.innerHTML += "+";
  array.push('+');
}

resta.onclick = () => {
  formula.innerHTML += "-";
  array.push('-');
}

multiplica.onclick = () => {
  formula.innerHTML += "*";
  array.push('*');
}

divide.onclick = () => {
  formula.innerHTML += "÷";
  array.push("÷");
}

function calc() {
  // SUMA
  // Cuando no existe el signo me da -1
  var sig_mas = this.array.indexOf("+");
  console.log(sig_mas);
  console.log(array);
  // En el caso de que exista el operador de suma
  while (sig_mas > 0) {
    operacion = (parseFloat(this.array[sig_mas - 1]) + parseFloat(this.array[sig_mas + 1]));
    console.log(operacion);
    // Cambio el resultado por la operacion en el array
    this.array[sig_mas] = operacion;
    this.array.splice(sig_mas - 1, 1);
    this.array.splice(sig_mas, 1);
    // Vuelvo a buscar la posicion de +
    sig_mas = this.array.indexOf("+");
    console.log(array);
  }
  // RESTA
  var sig_menos = this.array.indexOf("-");
  while (sig_menos > 0) {
    operacion = (parseFloat(this.array[sig_menos - 1]) - parseFloat(this.array[sig_menos + 1]));

    this.array[sig_menos] = operacion;
    this.array.splice(sig_menos - 1, 1);
    this.array.splice(sig_menos, 1);
    sig_menos = this.array.indexOf("-");
    console.log(array);
  }
  if (operacion != null) {
    resultado = operacion;
  }
  array = [resultado];
  display.id = "display_activo";
  formula.id = "formula_activa";
  display_resultado.innerHTML = resultado;

}

igual.onclick = () => {
  operacion = formula.innerHTML;
  console.log(formula.length);
  calc();
}

function init() {
  document.onkeydown = function(ev) {
    switch (ev.keyCode) {

      case 48: // n0
        formula.innerHTML += "0";
        array.push("0");
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
        array.push("1");
        n1.id = "active";

        setTimeout(function() {
          active.id = "id";
        }, 175);
        break;

      case 50: // n2
        formula.innerHTML += "2";
        array.push("2");
        n2.id = "active";
        setTimeout(function() {
          active.id = "n2";
        }, 175);
        break;

      case 51: // n3
        formula.innerHTML += "3";
        array.push("3");
        n3.id = "active";
        setTimeout(function() {
          active.id = "n3";
        }, 175);
        break;

      case 52: // n4
        formula.innerHTML += "4";
        array.push("4");
        n4.id = "active";
        setTimeout(function() {
          active.id = "n4";
        }, 175);
        break;

      case 53: // n5
        formula.innerHTML += "5";
        array.push("5");
        n5.id = "active";
        setTimeout(function() {
          active.id = "n5";
        }, 175);
        break;

      case 54: // n6
        formula.innerHTML += "6";
        array.push("6");
        n6.id = "active";
        setTimeout(function() {
          active.id = "n6";
        }, 175);
        break;

      case 55: // n7
        formula.innerHTML += "7";
        array.push("7");
        n7.id = "active";
        setTimeout(function() {
          active.id = "n7";
        }, 175);
        break;

      case 56: // n8
        formula.innerHTML += "8";
        array.push("8");
        n8.id = "active";
        setTimeout(function() {
          active.id = "n8";
        }, 175);
        break;

      case 57: // n7
        formula.innerHTML += "9";
        array.push("9");
        n9.id = "active";
        setTimeout(function() {
          active.id = "n9";
        }, 175);
        break;

        // opciones
      case 187: // Suma
        formula.innerHTML += "+";
        array.push("+");
        suma.id = "si_activa";
        setTimeout(function() {
          si_activa.id = "suma";
        }, 175);
        break;

      case 189: // Resta
        formula.innerHTML += "-";
        array.push("-");
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
        array.push("*");
        multiplica.id = "opcion_activa";
        setTimeout(function() {
          opcion_activa.id = "multiplica";
        }, 175);
        break;

      case 189: // divide
        formula.innerHTML += "÷";
        array.push("÷");
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
