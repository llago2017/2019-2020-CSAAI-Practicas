console.log("Ejecutando JS...")

const display = document.getElementById("display")
const formula = document.getElementById("formula")
const display_resultado = document.getElementById("display_resultado")

// Operaciones
const igual = document.getElementById("igual")
const reset = document.getElementById("reset")
const ans = document.getElementById("ans")
const del = document.getElementById("del")

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
    formula.innerHTML += boton.value;
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
        suma.id = "si_activa";
        setTimeout(function() {
          si_activa.id = "suma";
        }, 175);
        break;

      case 109: // Resta
        formula.innerHTML += "-";
        resta.id = "opcion_activa";
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
        multiplica.id = "opcion_activa";
        setTimeout(function() {
          opcion_activa.id = "multiplica";
        }, 175);
        break;

      case 111: // divide
        formula.innerHTML += "/";
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
