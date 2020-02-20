console.log("Ejecutando JS...")

const display = document.getElementById("display")
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
const suma = document.getElementById("suma")
const resta = document.getElementById("resta")
const multiplica = document.getElementById("multiplica")
const divide = document.getElementById("divide")
const igual = document.getElementById("igual")
const reset = document.getElementById("reset")

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

    if (operacion.includes('+')) {
      opera = operacion.split('+');
      console.log(opera);

      if (opera.length > 2) {
        resultado = parseInt(opera[0]) + parseInt(opera[1]);
        console.log("resultado -->" + resultado);
        for (var i = 0; i < (opera.length - 2); i++) {
        console.log("Voy a sumar --> " + opera[i + 2] );
        resultado += parseInt(opera[i + 2]);
      }
    } else {
        resultado = parseInt(opera[0]) + parseInt(opera[1]);
      }

      console.log(opera);

      display.innerHTML = resultado;
      }

    }
