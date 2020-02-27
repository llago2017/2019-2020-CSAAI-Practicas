console.log("Ejecutando JS...")

const display = document.getElementById("display")
const formula = document.getElementById("formula")
const display_resultado = document.getElementById("display_resultado")

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
var cases = [];

// Creará un array con todos los c digitos que hay en el html
let digitos = document.getElementsByClassName("cdigito")

for (var i = 0; i < digitos.length; i++) {
  digitos[i].onclick = (ev) => {
  digito(ev.target);
  }
}

function digito(boton) {
    formula.innerHTML += boton.value;
    array.push(boton.value);
}

coma.onclick = () => {
  formula.innerHTML += ".";
  array.push('.');
}

reset.onclick = () => {
  vueltaA0();
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
  formula.innerHTML += "/";
  array.push("÷");
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function calc() {

  resultado = eval(formula.innerHTML);
  console.log("Prueba --> " + resultado);


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
  // IDEA: CAMBIAR LA ANIMACION, TENGO QUE CAMBIAR COMO COGE LA ID

 // Creo un array con todos los keyCode de los digitos
  for (var i = 0; i < 10; i++) {
    inic = 96;
    inic += i;
    cases.push(inic);
    console.log("array de casos --> " + cases);
  }

  document.onkeydown = function(ev) {
    switch (ev.keyCode) {

      case 96: // n0
        formula.innerHTML += "0";
        array.push("0");
        digitos[9].id = "active";
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
        digitos[8].id = "active";

        setTimeout(function() {
          active.id = "id";
        }, 175);
        break;

      case 98: // n2
        formula.innerHTML += "2";
        array.push("2");
        digitos[7].id = "active";
        setTimeout(function() {
          active.id = "n2";
        }, 175);
        break;

      case 99: // n3
        formula.innerHTML += "3";
        array.push("3");
        digitos[6].id = "active";
        setTimeout(function() {
          active.id = "n3";
        }, 175);
        break;

      case 100: // n4
        formula.innerHTML += "4";
        array.push("4");
        digitos[5].id = "active";
        setTimeout(function() {
          active.id = "n4";
        }, 175);
        break;

      case 101: // n5
        formula.innerHTML += "5";
        array.push("5");
        digitos[4].id = "active";
        setTimeout(function() {
          active.id = "n5";
        }, 175);
        break;

      case 102: // n6
        formula.innerHTML += "6";
        array.push("6");
        digitos[3].id = "active";
        setTimeout(function() {
          active.id = "n6";
        }, 175);
        break;

      case 103: // n7
        formula.innerHTML += "7";
        array.push("7");
        digitos[2].id = "active";
        setTimeout(function() {
          active.id = "n7";
        }, 175);
        break;

      case 104: // n8
        formula.innerHTML += "8";
        array.push("8");
        digitos[1].id = "active";
        setTimeout(function() {
          active.id = "n8";
        }, 175);
        break;

      case 105: // n9
        formula.innerHTML += "9";
        array.push("9");
        digitos[0].id = "active";
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
        formula.innerHTML += "/";
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
