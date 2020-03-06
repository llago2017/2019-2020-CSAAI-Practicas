console.log("Ejecutando JS...")

const display = document.getElementById("display")
const formula = document.getElementById("formula")
const display_resultado = document.getElementById("display_resultado")

// Operaciones
const igual = document.getElementById("igual")
const reset = document.getElementById("reset")
const ans = document.getElementById("ans")
const del = document.getElementById("del")


// Variable para asignar ESTADO
var estado = "";

// Estados de la calculadora
const ESTADO = {
  zerostate: 0,
  accumulatorstate: 1,
  accumulatordecimal: 2,
  computedstate: 3,
}

// Borra todo lo que haya en el display
function vueltaA0() {
  // Pongo las variables del display a 0
  display_resultado.innerHTML = " ";
  formula.innerHTML = " ";
  estado = ESTADO.zerostate;
  if (document.getElementById("formula_activa")) {
    const formula_activa = document.getElementById("formula_activa");
    formula_activa.innerHTML = " ";
    formula_activa.id = "formula";
  }

  if (document.getElementById("display_activo")) {
    const display_activo = document.getElementById("display_activo");
    display_activo.id = "display";
  }
  init();
}

// Cases tiene los codigos de las teclas para los digitos
var cases = [];

// Creo un array con todos los keyCode de los digitos
 for (var i = 0; i < 10; i++) {
   inic = 96;
   inic += i;
   cases.push(inic);
 }
/* Invierto cases para que coincidan los codigos con los numeros que se
   almacenan en digitos
*/
 var new_cases = cases.reverse();

// Creará un array con todos los c digitos que hay en el html
let digitos = document.getElementsByClassName("cdigito")

for (var i = 0; i < digitos.length; i++) {
  digitos[i].onclick = (ev) => {
  console.log("estado de formula --> " + formula.id);
  if (formula.id == "formula_activa") {
    formula.id = "formula";
    display_resultado.innerHTML = "";
    formula.innerHTML = resultado;
    display_activo.id = "display";

  }
  digito(ev.target);
  }
}

function digito(boton) {
  console.log("En la formula -->" + formula.innerHTML);
  ultimo = formula.innerHTML.length - 1;
  last = formula.innerHTML.charAt(ultimo);
  if (formula.innerHTML == " ") {
    console.log("el primer digito es --> " + boton.value);
    estado = ESTADO.zerostate;
    number(boton.value);
    // Compruebo si el ultimo elemento es un operando
  } else if (isNaN(last)) {
    if (isNaN(boton.value)) {
      operando(boton.value);
    } else {
      estado = ESTADO.accumulatorstate;
      accumulate(boton.value)
    }
  }else {
    console.log("pulsado --> " + boton.value);
    accumulate(boton.value)
  }
}

del.onclick = () => {
  borrado = formula.innerHTML.slice(0,-1);
  formula.innerHTML = borrado;
}

reset.onclick = () => {
  vueltaA0();
}

ans.onclick = () => {
  formula.innerHTML += resultado;
}

function operando(num) {
  if (estado == ESTADO.computedstate) {
    ultimo = formula.innerHTML.length - 1;
    last = formula.innerHTML.charAt(ultimo);
    anterior = formula.innerHTML.charAt(ultimo - 1);
    if (isNaN(last) && last != num) {
      formula.innerHTML += num;
      estado = ESTADO.accumulatorstate;
    } else if (!isNaN(num)) {
      formula.innerHTML += num;
      estado = ESTADO.accumulatorstate;
    }
  }
}

function accumulate(num) {
  if (estado == ESTADO.accumulatorstate) {
    formula.innerHTML += num;
    // Es true cuando es un operado
    if (isNaN(num)) {
      estado = ESTADO.computedstate;
    }
  }

  if (estado == ESTADO.accumulatordecimal) {
    if (num != ".") {
      formula.innerHTML += num;
    }
    // Es true cuando es un operado
    if (isNaN(num) && num != ".") {
      estado = ESTADO.computedstate;
    }
  }
}

// Ha llegado un digito
function number(num) {
  // Depende del estado en el que estoy hago algo
  if (estado == ESTADO.zerostate) {
    if (num == ".") {
      formula.innerHTML += 0 + num;
      estado = ESTADO.accumulatordecimal;
    } else if (num != 0) {
      formula.innerHTML += num;
      estado = ESTADO.accumulatorstate;
      console.log("Estado --> " + estado);
      estado = ESTADO.accumulatorstate;
    }
  }
}


function calc() {

  resultado = eval(formula.innerHTML);

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

    // Para los numeros
    if (cases.includes(ev.keyCode)) {
      /* Busca en el array de codigos para los digitos y con el indice
        decide la tecla que se ha pulsado, ya que están en el mismo orden,
        lo muestra en el display y activa la animacion
      */
      var lugar = new_cases.indexOf(ev.keyCode);

      formula.innerHTML += digitos[lugar + 4].value;
      digitos[lugar + 4].id = "active";

      setTimeout(function() {
        active.id = "id";
      }, 175);
    }

    switch (ev.keyCode) {
        // Para los casos especiales
      case 107: // Suma
        formula.innerHTML += "+";
        digitos[2].id = "si_activa";
        setTimeout(function() {
          si_activa.id = "suma";
        }, 175);
        break;

      case 109: // Resta
        formula.innerHTML += "-";
        digitos[3].id = "opcion_activa";
        setTimeout(function() {
          opcion_activa.id = "resta";
        }, 175);
        break;

      case 13: // igual
      // IDEA: resta desaparece??
        igual.id = "si_activa";
        setTimeout(function() {
          si_activa.id = "igual";
        }, 175);
        calc();
        break;

      case 106: // Multiplicacion
        formula.innerHTML += "*";
        digitos[0].id = "opcion_activa";
        setTimeout(function() {
          opcion_activa.id = "multiplica";
        }, 175);
        break;

      case 111: // divide
        formula.innerHTML += "/";
        digitos[1].id = "opcion_activa";
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
