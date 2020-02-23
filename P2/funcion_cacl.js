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
