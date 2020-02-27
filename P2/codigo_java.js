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
  array = [];
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

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function calc() {

  // Este es mi array
  console.log(array);
  // Quiero juntar los numeros que están separados
  for (var i = -1; i < array.length; i++) {
    count = i;
    count += 1;
    if ((isNumeric(array[i]) || array[i] == ".")) {
      console.log(array[i] + "Es un numero");
      while (isNumeric(array[count])) {
        console.log("Voy a juntar --> " + array[i] + " y " + array[count]);
        array[i] += array[count]
        array.splice(count, 1);
        console.log("mi nuevo array --> " + array);
      }
      while (array[count] == ".") {
        array[i] += array[count]
        array.splice(count, 1);
        if (isNumeric(array[count])) {
          console.log("Me falta un numero");
          while (isNumeric(array[count])) {
            console.log("El siguiente --> " + array[count]);
            array[i] += array[count]
            array.splice(count, 1);
            console.log("Mi array count --> " + array[count]);
          }
        }
        console.log("mi nuevo array --> " + array);
      }
    }
  }

  // Numero negativo al principio
  var sig_menos = this.array.indexOf("-");
  if (sig_menos == 0) {
  // Hago que el numero siguiente al del signo sea negativo
  nuevo = this.array[sig_menos] + this.array[sig_menos + 1];
  this.array[sig_menos] = nuevo;
  this.array.splice(sig_menos + 1, 1);
  console.log("array arreglado --> " + array);
  }

  // Multiplicacion
  console.log("array actual --> " + array);

  var sig_mult = this.array.indexOf("*");
  while (sig_mult > 0) {
    operacion = (parseFloat(this.array[sig_mult - 1]) * parseFloat(this.array[sig_mult + 1]));
    // Compruebo si el operando 2 es un signo o un numero
    if (this.array[sig_mult + 1] != "-") {
      operacion = (parseFloat(this.array[sig_mult - 1]) * parseFloat(this.array[sig_mult + 1]));
      this.array[sig_mult] = operacion;
      this.array.splice(sig_mult - 1, 1);
      this.array.splice(sig_mult, 1);
      sig_mult = this.array.indexOf("*");
      console.log(array);

    } else {
      console.log("Entro en parte negativa");
      nuevo = this.array[sig_mult + 1] + this.array[sig_mult + 2];
      console.log("mi nuevo numero negativo --> " + nuevo);
      // Ejemplo --> [8,*,-,1]
      this.array[sig_mult + 1] = nuevo;
      this.array.splice(sig_mult + 2, 1);
      // Ejemplo --> [8,*,-1]
      operacion = (parseFloat(this.array[sig_mult - 1]) * parseFloat(this.array[sig_mult + 1]));

      // Elimino lo que he utilizado y dejo el resultado
      this.array[sig_mult] = operacion;
      this.array.splice(sig_mult - 1, 1);
      this.array.splice(sig_mult, 1);
      sig_mult = this.array.indexOf("*");
    }
  }


  // Division
  var sig_div = this.array.indexOf("÷");
  while (sig_div > 0) {
    if (this.array[sig_div + 1] != "-") {
      console.log("Todo es positivo");
      operacion = (parseFloat(this.array[sig_div - 1]) / parseFloat(this.array[sig_div + 1]));

      this.array[sig_div] = operacion;
      this.array.splice(sig_div - 1, 1);
      this.array.splice(sig_div, 1);
      sig_div = this.array.indexOf("÷");
      console.log(array);
    } else {
      console.log("Hay un numero negativo");
      nuevo = this.array[sig_div + 1] + this.array[sig_div + 2];
      console.log("mi nuevo numero -->" + nuevo);
      this.array[sig_div + 1] = nuevo;
      this.array.splice(sig_div + 2, 1);

      operacion = (parseFloat(this.array[sig_div - 1]) / parseFloat(this.array[sig_div + 1]));

      this.array[sig_div] = operacion;
      this.array.splice(sig_div - 1, 1);
      this.array.splice(sig_div, 1);
      sig_div = this.array.indexOf("÷");
    }

  }

  // RESTA
  var sig_menos = this.array.indexOf("-");
  console.log("El signo está en la posicion -->" + sig_menos);

  if (sig_menos == 0) {
  // Hago que el numero siguiente al del signo sea negativo
  nuevo = this.array[sig_menos] + this.array[sig_menos + 1];
  this.array[sig_menos] = nuevo;
  this.array.splice(sig_menos + 1, 1);
  }

  while (sig_menos > 0) {
    operacion = (parseFloat(this.array[sig_menos - 1]) - parseFloat(this.array[sig_menos + 1]));

    this.array[sig_menos] = operacion;
    this.array.splice(sig_menos - 1, 1);
    this.array.splice(sig_menos, 1);
    sig_menos = this.array.indexOf("-");
    console.log(array);
  }

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

      case 96: // n0
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

      case 97: // n1
        formula.innerHTML += "1";
        array.push("1");
        n1.id = "active";

        setTimeout(function() {
          active.id = "id";
        }, 175);
        break;

      case 98: // n2
        formula.innerHTML += "2";
        array.push("2");
        n2.id = "active";
        setTimeout(function() {
          active.id = "n2";
        }, 175);
        break;

      case 99: // n3
        formula.innerHTML += "3";
        array.push("3");
        n3.id = "active";
        setTimeout(function() {
          active.id = "n3";
        }, 175);
        break;

      case 100: // n4
        formula.innerHTML += "4";
        array.push("4");
        n4.id = "active";
        setTimeout(function() {
          active.id = "n4";
        }, 175);
        break;

      case 101: // n5
        formula.innerHTML += "5";
        array.push("5");
        n5.id = "active";
        setTimeout(function() {
          active.id = "n5";
        }, 175);
        break;

      case 102: // n6
        formula.innerHTML += "6";
        array.push("6");
        n6.id = "active";
        setTimeout(function() {
          active.id = "n6";
        }, 175);
        break;

      case 103: // n7
        formula.innerHTML += "7";
        array.push("7");
        n7.id = "active";
        setTimeout(function() {
          active.id = "n7";
        }, 175);
        break;

      case 104: // n8
        formula.innerHTML += "8";
        array.push("8");
        n8.id = "active";
        setTimeout(function() {
          active.id = "n8";
        }, 175);
        break;

      case 105: // n9
        formula.innerHTML += "9";
        array.push("9");
        n9.id = "active";
        setTimeout(function() {
          active.id = "n9";
        }, 175);
        break;

        // opciones
      case 107: // Suma
        formula.innerHTML += "+";
        array.push("+");
        suma.id = "si_activa";
        setTimeout(function() {
          si_activa.id = "suma";
        }, 175);
        break;

      case 109: // Resta
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

      case 111: // divide
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
