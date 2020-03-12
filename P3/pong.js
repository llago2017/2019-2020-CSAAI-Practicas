console.log("Ejecutando JS...");
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// GLOBALES
var estado = 0;
// creo un array con las teclas que pulso
var code = [];
var center = [canvas.width / 2, canvas.height / 2];

// Constructor de objetos
function object_construct(options) {
  this.x = options.x || 10;
  this.y = options.y || 10;
  this.width = options.width || 40;
  this.height = options.height || 50;
  this.color = options.color || 'white';
  this.speed = options.speed || 3;
  this.gravity = options.gravity || 3;
}

document.onkeydown = function(ev) {
  if (estado == 0) {
    if (32 == ev.keyCode)
      estado = 1;
  }

  if (estado == 3 || estado == 4) {
    if (32 == ev.keyCode) {
      // init();
      estado = 1;
    }
  }
  code.push(ev.keyCode); // Almacena las teclas pulsadas
  console.log(code);
  ev.preventDefault();
};

// Cuando una tecla deja de ser pulsada se elimina del array
document.onkeyup = function(ev) {
  var pos = code.indexOf(ev.keyCode);
  code.splice(pos, 1);
  console.log(code);
};

function input() {
  document.onkeydown = function(ev) {
    switch (ev.keyCode) {
      case 38:
        // Arriba
        break;
      case 40:
        // Abajo
        break;
    }
  }
}

function auto_p2() {
  // Movimiento autónomo del jugador 2
  if (ball.y < player2.y) {
    if (player2.y - player2.gravity > 0) {
      player2.y -= player2.gravity;
    }
  } else {
    if (player2.y + player2.height + player2.gravity < canvas.height) {
      player2.y += player2.gravity;
    }
  }
}

// Creo los objetos, player1, player2 y ball
var player1 = new object_construct({
  x: 20,
  y: canvas.height / 2 - 40,
  width: 12,
  height: 80,
  gravity: 4
})

var player2 = new object_construct({
  /*player paddle*/
  x: canvas.width - 20 - 12,
  y: canvas.height / 2 - 40,
  width: 12,
  height: 80,
  gravity: 3
});

var separador = new object_construct({
  x: (canvas.width / 2) - 2.5,
  y: 20,
  width: 5,
  height: canvas.height - 40,
});

var ball = new object_construct({
  x: (canvas.width / 2),
  y: (canvas.height / 2),
  width: 12,
  height: 12,
  speed: 2,
  gravity: 2
});

function draw_object(object) {
  ctx.fillStyle = object.color;
  ctx.fillRect(object.x, object.y, object.width, object.height);
}

function displayScore() {
  /* play1 score*/
  ctx.font = "20px Arial";
  ctx.fillStyle = 'white';
  ctx.fillText(score1, (canvas.width / 2) - 50, 30);
  ctx.fillText(score2, (canvas.width / 2) + 50, 30);
}

function draw() {
  // Borro el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  displayScore();
  draw_object(player1);
  draw_object(player2);
  draw_object(separador);

  if (estado == 0) {

    ctx.font = "25px monospace";
    ctx.fillStyle = "blue";
    ctx.textAlign = "center";
    // Centro el texto en la mitad
    ctx.fillText("Press the spacebar to start", center[0], center[1]);
  }
  if (estado == 1 || estado == 2) { // running

    draw_object(ball);
  }
  if (estado == 3) {
    ctx.font = "35px monospace";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("Game Over", center[0], center[1]);
  }
  if (estado == 4) {
    ctx.font = "25px monospace";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("You Win", center[0], center[1]);
  }

}

function resetPlayers() {
  player1.x = 20;
  player1.y = canvas.height / 2 - 40;
  player2.x = canvas.width - 20 - 12;
  player2.y = canvas.height / 2 - 40;
}

function init() {
  score1 = 0;
  score2 = 0;
  resetPlayers();
}

function main() {
  if (estado == 0) {
    init();
  }
  // En el momento que cambia el estado dibuja todo
  draw();

  if (estado == 1) {
    input(player1);
    auto_p2();
  } else if (estado == 2) {
    estado = 1;
  }
  // Call drawScene again in the next browser repaint
  requestAnimationFrame(main);
}

main();
