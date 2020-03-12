console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//----- Dibujar la Bola
ctx.beginPath();
ctx.fillStyle='red';

//-- x,y, anchura, altura
ctx.rect(300, 200, 10, 10);
ctx.fill();

//-- Raqueta izquierda
  ctx.fillStyle = 'white';
  ctx.fillRect(50,100, 10, 40)

//-- Raqueta derecha
  ctx.fillStyle = 'white';
  ctx.fillRect(550,100, 10, 40)
