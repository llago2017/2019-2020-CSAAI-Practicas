console.log("Ejecutando JS...");
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// GLOBALES
var estado = 0;
// Estado 0 --> inicio
// Estado 1 --> comienza desde 0
// Estado 2 --> punto marcado, counter
// Estado 3 --> game Over
// Estado 4 --> win

// creo un array con las teclas que pulso
var code = [];
var center = [canvas.width / 2, canvas.height / 2];
var score1 = 0;
var score2 = 0;
var counter = 2;
var link = new Image;
var ganon = new Image;
var hearts = new Image;
var active = false;
var active2 = false;
var t = 0;
var step = 0.01;
var grd = ctx.createLinearGradient(0, 0, 750, 0);
grd.addColorStop('0', "white");
grd.addColorStop('1', "goldenrod");


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

document.addEventListener('keydown', function(ev) {
  if (32 == ev.onkeydown) {
    init();
    estado = 1;
  }
  console.log(ev.keyCode);
  if (estado == 0) {
    if (32 == ev.keyCode){
      estado = 1;
      init();
    }
  }

  if (estado == 3 || estado == 4) {
    if (32 == ev.keyCode) {
      init();
      estado = 1;
    }
  }
  code.push(ev.keyCode); // Almacena las teclas pulsadas
  console.log(code);
  ev.preventDefault();
});

// Cuando una tecla deja de ser pulsada se elimina del array
document.addEventListener('keyup', function(ev) {
  if (32 == ev.onkeydown) {
    init();
    gameState = 1;
  }

  var pos = code.indexOf(ev.keyCode);
  code.splice(pos, 1);
  console.log(code);
});

function input() {
  document.onkeydown = function(ev) {
    switch (ev.keyCode) {
      case 38:
        if (player1.y - player1.gravity > 0) { // Para que no salga del cuadro
          player1.y -= player1.gravity; // la parte de arriba es (0,0)
        }
        break;
      case 40:
        /* Para que no salga del cuadro, la parte de abajo viene dada por
        la longitud del canvas, le sumo el height de la paleta para que choque
        con la parte de abajo */
        if (player1.y + player1.gravity + player2.height < canvas.height) {
          player1.y += player1.gravity;
        }
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
  gravity: 10
})

var player2 = new object_construct({
  /*player paddle*/
  x: canvas.width - 20 - 12,
  y: canvas.height / 2 - 40,
  width: 12,
  height: 80,
  gravity: 3,
  color: 'transparent'
});

var ball = new object_construct({
  x: (canvas.width / 2),
  y: (canvas.height / 2),
  width: 12,
  height: 12,
  speed: 10,
  gravity: 2
});

var heartp1 = new object_construct({
  width: 100,
  height: 25,
  x: 0,
  y: 0
})

var heartp2 = new object_construct({
  width: 100,
  height: 25,
  x: 700,
  y: 0
})

function ball_mov() {
  // Colision con los bordes
  if (ball.y + ball.gravity < 0 || (ball.y + ball.gravity + ball.height >= canvas.height)) {
    ball.gravity *= (-1) // Cambia la dirección
    // Movimiento de la pelota
    ball.y += ball.gravity;
    ball.x += ball.speed
  } else {
    // En el caso de que no choque
    ball.x += ball.speed;
    ball.y += ball.gravity;
  }

  // Colision con los jugadores
  if (ball.x <= player1.x + player1.width && ball.x + ball.width >= player1.x) {
    if (ball.y + ball.height >= player1.y && ball.y <= player1.y + player1.height) {
      ball.x = (player1.x + ball.width);
      ball.speed *= (-1);
      ball.gravity = Math.random() * 5;
      active = true;
      draw_object(player1);

    }

  }

  if (ball.x + ball.width >= player2.x && ball.x + ball.width <= player2.x + player2.width) {
    if (ball.y + ball.height >= player2.y && ball.y <= player2.y + player2.height) {
      ball.x = (player2.x - ball.width);
      ball.speed *= (-1);
      active2 = true;
      draw_object(player2);
    }

  }

  // Marcan punto
  if (ball.x + ball.width < player1.x - 5) {
    score2 += 1;
    draw_object(heartp1);
    estado = 2;
  } else if (ball.x + ball.width > player2.x + player2.width) {
    score1 += 1;
    draw_object(heartp2);
    estado = 2;
  }

  // Fin del juego

  if (score1 == 3) {
    estado = 4;
  } else if (score2 == 3) {
    estado = 3;
  }

  if (estado == 2) {

    ball.x = (canvas.width / 2 - 6);
    ball.y = (canvas.height / 2);
    ball.speed = 0;
    ball.gravity = 0;

    setTimeout(function() {
      ball.gravity = Math.random();
      ball.speed = Math.random() * 6 + 3;
    }, 2000);

  }
}

function draw_object(object) {
  if (object == player2) {
    if (active2) {
      ganon.src = 'active_dorf.png';
      setTimeout(function() {
        active2 = false;
      }, 200);

    } else {
      ganon.src = 'dorf.png';
    }
    ctx.drawImage(ganon, object.x - 25, object.y, 70, object.height);
  }

  if (object == player1) {
    if (active) {
      link.src = 'active.png';
      setTimeout(function() {
        active = false;
      }, 200);

    } else {
      link.src = 'static.png';
    }

    ctx.drawImage(link, object.x - 25, object.y, 70, object.height);

  } else if (object == heartp1) {
    if (score2 == 0) {
      hearts.src = 'hearts.png';
      ctx.drawImage(hearts, object.x, object.y, object.width, object.height);
    } else if (score2 == 1) {
      hearts.src = 'heart2.png';
      ctx.drawImage(hearts, object.x, object.y, object.width, object.height);
    } else if (score2 == 2) {
      hearts.src = 'heart3.png';
      ctx.drawImage(hearts, object.x, object.y, object.width, object.height);
    }

  } else if (object == heartp2) {
    if (score1 == 0) {
      hearts.src = 'hearts.png';
      ctx.drawImage(hearts, object.x, object.y, object.width, object.height);
    } else if (score1 == 1) {
      hearts.src = 'heart2.png';
      ctx.drawImage(hearts, object.x + 25, object.y, object.width, object.height);
    } else if (score1 == 2) {
      hearts.src = 'heart3.png';
      ctx.drawImage(hearts, object.x + 60, object.y, object.width, object.height);
    }

  }  else {
    ctx.fillStyle = object.color;
    ctx.fillRect(object.x, object.y, object.width, object.height);
  }

  // Separador
  ctx.beginPath();
  ctx.setLineDash([4, 14, 18]);
  ctx.strokeStyle = 'rgba(218, 165, 32, 0.3)';
  ctx.lineWidth = 2;
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();

}

function game_info(phrase) {
  // Rectangulo para tapar midline
  ctx.clearRect(center[0] - 10, center[1] - 40, 20, 60);
  // Opciones del texto
  var grd = ctx.createLinearGradient(0, 0, 750, 0);
  grd.addColorStop('0', "white");
  grd.addColorStop('1', "goldenrod");
  ctx.font = "35px Zelda";
  ctx.fillStyle = grd;
  ctx.textAlign = "center";
  // Centro el texto en la mitad
  ctx.fillText(phrase, center[0], center[1]);
  if (estado == 3 || estado == 4) {
    init();
    ctx.clearRect(center[0], center[1] + 40, 20, 60);
    ctx.fillText('Press the spacebar to start', center[0], center[1] + 40);
  }

}

function draw() {
  // Borro el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw_object(player1);
  draw_object(player2);
  draw_object(heartp1);
  draw_object(heartp2);

  if (estado == 0) {
    phrase = "Press the spacebar to start"
    game_info(phrase);
  }
  if (estado == 1 || estado == 2) { // running

    draw_object(ball);
  }
  if (estado == 3) {
    phrase = "Game Over"
    start_again = "Press the spacebar to start"
    game_info(phrase);
  }

  if (estado == 4) {
    phrase = "You win"
    game_info(phrase);
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
  code = [];
  ball.x = center[0];
  ball.y = center[1];
  resetPlayers();
}

function countdown() {
  // Estilo
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.strokeStyle = 'rgba(218, 165, 32, 0.65)';
  ctx.arc(center[0], center[1] - 7, 50, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  ctx.font = "25px monospace";
  ctx.fillStyle = 'rgba(218, 165, 32, 0.65)';
  // Contador
  setTimeout(function() {
    counter = 1;
  }, 500);
  setTimeout(function() {
    counter = 0;
  }, 1000);
  ctx.fillText(counter, center[0], center[1]);
}

function main() {
  if (estado == 0) {
    init();
  }
  // En el momento que cambia el estado dibuja todo
  draw();

  if (estado == 1) {
    counter = 2;
    ball_mov();
    input(player1);
    auto_p2();
  } else if (estado == 2) {

    countdown();

    setTimeout(function() {
      estado = 1;
    }, 2000);

  }
  // Call drawScene again in the next browser repaint
  var fps = 100;
  setTimeout(function() {
    window.requestAnimationFrame(main);
  }, 1000 / fps);

}

main();
