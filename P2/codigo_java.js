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

      case 49: // n1
        display.innerHTML += "1";
        n1.id = "active";
        setTimeout(function() {
          active.id = "id";
        }, 20);      



        break;

    }
  }
}
