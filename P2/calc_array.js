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
