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
// Estado 5 --> nuevo nivel
// Estado 6 --> ultimo nivel
// Estado 7 --> final

var center = [canvas.width / 2, canvas.height / 2];
var score1 = 0;
var score2 = 0;
var counter = 2;
// Data
var mode = "";
var level = 0;
var x_move = 0;
var level_speed = 7;

// Images
var link = new Image;
var ganon = new Image;
var hearts = new Image;
var paper = new Image;
var rupe = new Image;
var navi = new Image;
var ocarina = new Image;
var end = new Image;
var triforce = new Image;
navi.src = 'navi.png';

// Images animation
var active = false;
var active2 = false;
var select = 0;
var on = true;

// Color grad
var grd = ctx.createLinearGradient(0, 0, 750, 0);
  grd.addColorStop('0', "white");
  grd.addColorStop('1', "goldenrod");

//Player and multiplayer buttons
var rect = {
  x: center[0],
  y: center[1] + 50,
  width: 200,
  height: 50
};

var rect2 = {
  x: center[0] - 225,
  y: center[1] + 50,
  width: 200,
  height: 50
};


//Function to get the mouse position
function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}
//Function to check whether a point is inside a rectangle
function isInside(pos, rect) {
  return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
}

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

function delete_menu(old_color, object) {
  if (mode != '') {
    ctx.fillStyle = 'transparent';

    if (object == 'rect') {
      ctx.strokeStyle = "transparent";
    }

  } else {
    if (object == 'rect') {
      ctx.drawImage(paper, center[0] + 5, center[1] + 40, 250, 80);
      ctx.drawImage(paper, center[0] - 250, center[1] + 40, 250, 80);
    } else {
      ctx.fillStyle = old_color;
    }
  }
}

// Animate the images inside the canvas
function blink_navi(image) {
  if (on) {
    if (image == 'ocarina') {
      ocarina.src = 'ocarina1.png'

    } else if (image == 'triforce') {
      triforce.src = 'triforce1.png';
    } else {
      var active_navi = ['navi2.png', 'navi1.png', 'navi3.png', 'navi4.png'];
      navi.src = active_navi[select];
    }

    setTimeout(function() {
      select = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
      on = false;
    }, 1000);

  } else {
    if (image == 'ocarina') {
      ocarina.src = 'ocarina.png';
    }  else if (image == 'triforce') {
      triforce.src = 'triforce.png';
    }
    else {
      navi.src = 'navi.png';
    }
    setTimeout(function() {
      on = true;
    }, 1000);
  }
  if (image == 'ocarina') {
    ctx.drawImage(ocarina, 650, 120, 75, 75);
  } else if (image == 'triforce') {
    ctx.drawImage(triforce, center[0] - 100, center[1] - 225, 200,200);
  } else {
    ctx.drawImage(navi, 50, 100, 100, 100);
  }

}

// Draw init screen with a var
var inicio = {
  draw: function() {
    paper.src = 'paper2.png';
    // Fondo
    delete_menu('black', 'background')
    ctx.fillRect(0, 0, 800, 500);

    // Rectangulo Single
    delete_menu('', 'rect');
    ctx.beginPath();
    ctx.rect(center[0] + 25, center[1] + 50, 200, 50);
    // Rectangulo Multi
    ctx.beginPath();
    ctx.rect(center[0] - 225, center[1] + 50, 200, 50);
    // Navi
    if (mode == '') {
      blink_navi('navi');
    }

    // Ocarina
    if (mode == '') {
      blink_navi('ocarina');
    }

    // Letras
    delete_menu(grd, 'text');
    ctx.textAlign = "center";

    // Centro el texto en la mitad
    ctx.font = "50px Zelda";
    ctx.fillText("The Legend of Zelda", center[0], center[1] - 70);
    ctx.fillText("Breath of the Pong", center[0], center[1] - 20);

    ctx.fillStyle = 'black'; // Al ser negras no las tengo que borrar
    ctx.font = "35px Zelda";
    ctx.fillText("Multi Player", center[0] - 135, center[1] + 85);
    ctx.fillText("Single Player", center[0] + 125, center[1] + 85);

    //Binding the click event on the canvas
    canvas.addEventListener('click', function(evt) {
      var mousePos = getMousePos(canvas, evt);

      if (isInside(mousePos, rect)) {
        mode = "single";
      } else if (isInside(mousePos, rect2)) {
        mode = 'multi';
        player2.gravity = 10;
      }
    }, false);
    // Mode selected
    if (mode != "") {
      phrase = "Press the spacebar to start"
      game_info(phrase);
    }
  },
}

document.addEventListener('keydown', function(ev) {

  if (estado == 0) {
    if (32 == ev.keyCode) {
      estado = 1;
      init();
    }
  }

  if (estado == 3 || estado == 4 || estado == 5 || estado == 6) {
    if (32 == ev.keyCode) {
      init();
      estado = 1;
    }
  } else if (estado == 7) {
    if (32 == ev.keyCode) {
      init();
      estado = 0;
    }
  }
  ev.preventDefault();
});

// Stop the speed of the ball
document.addEventListener('keyup', function(ev) {
  if (38 == ev.keyCode || 40 == ev.keyCode) {
    x_move = 0;
  }
});

// Moving objects
function moving(player, direction) {
  if (direction == 'up') {
    if (player.y - player.gravity > 0) { // Para que no salga del cuadro
      player.y -= player.gravity; // la parte de arriba es (0,0)
    }
  } else if (direction == 'down') {
    /* Para que no salga del cuadro, la parte de abajo viene dada por
    la longitud del canvas, le sumo el height de la paleta para que choque
    con la parte de abajo */
    if (player.y + player.gravity + player.height < canvas.height) {
      player.y += player.gravity;
    }
  }

  if (player == player1 && mode == 'single') {
    x_move += 0.3;  // Le añado velocidad
    if (x_move > 5) { // Limite de velocidad
      x_move = 5;
    }
  }

}

function input() {
  document.onkeydown = function(ev) {
    switch (ev.keyCode) {
      case 38:
        moving(player1, 'up');
        break;
      case 40:
        moving(player1, 'down');
        break;
    }
    if (mode == "multi") {
      switch (ev.keyCode) {
        case 87:
          moving(player2, 'up');
          break;
        case 83:
          moving(player2, 'down');
          break;
      }

    }
  }
}

function auto_p2() {
  // Movimiento autónomo del jugador 2
  if (ball.y < player2.y) {
    moving(player2, 'up');
  } else {
    moving(player2, 'down');
  }
}

// Creo los objetos, player1, player2 y ball
var player1 = new object_construct({
  x: 20,
  y: canvas.height / 2 - 40,
  width: 12,
  height: 80,
  gravity: 10,

});

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
  speed: 5,
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
      console.log("antigua --> " + ball.speed);
      ball.speed -= x_move;
      ball.speed *= (-1);
      console.log('nueva --> ' + ball.speed);

      ball.gravity = (Math.ceil((Math.random() - 0.5)) < 1 ? -1 : 1) * (Math.random() * (5 - 1) + 1);
      active = true;
      draw_object(player1);

    }

  }

  if (ball.x + ball.width >= player2.x && ball.x + ball.width <= player2.x + player2.width) {
    if (ball.y + ball.height >= player2.y && ball.y <= player2.y + player2.height) {
      ball.x = (player2.x - ball.width);
      ball.speed *= (-1);
      if (mode == 'single') {
        ball.speed = -level_speed;
        ball.gravity = (Math.random() - 0.5) * 5;
      } else if (mode == 'multi') {
        ball.gravity = (Math.ceil((Math.random() - 0.5)) < 1 ? -1 : 1) * (Math.random() * (5 - 1) + 1);
      }

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

  if (score1 > 2) {
    if (mode == 'single') {
      level_speed = 10;
      // Inicio con menos velocidad
      ball.speed = 7;
      player2.gravity = 3;
      player1.gravity = 11;
      level += 1;
      estado = 5;
      if (level == 2) {
        level_speed = 12;
        ball.speed = 7;
        player2.gravity = 3;
        player1.gravity = 13;
        estado = 6;
      } else if (level == 3) {
        estado = 7;
      }

    } else if (mode == 'multi') {

      estado = 4;
    }
  }
  if (score2 == 3) {
    level_speed = 7;
    estado = 3;
  }

  if (estado == 2) {

    ball.x = (canvas.width / 2 - 6);
    ball.y = (canvas.height / 2);
    // Check the ball direction and change it
    var sign = (Math.sign(ball.speed) == 1) ? -1:1;
    ball.speed = 0;
    ball.gravity = 0;

    setTimeout(function() {
      ball.speed = 7*sign;
    }, 2000);

  }
}

function change_hearts(score, object) {
  if (object == heartp2) {
    var a = 25
    var b = 60
  } else {
    var a = 0
    var b = 0;
  }
  if (score == 0) {
    hearts.src = 'hearts.png';
    ctx.drawImage(hearts, object.x, object.y, object.width, object.height);
  } else if (score == 1) {
    hearts.src = 'heart2.png';
    ctx.drawImage(hearts, object.x + a, object.y, object.width, object.height);
  } else if (score == 2) {
    hearts.src = 'heart3.png';
    ctx.drawImage(hearts, object.x + b, object.y, object.width, object.height);
  }
}

function draw_object(object) {
  if (object == player2) {
    if (level == 0) {
      if (active2) {
        ganon.src = 'ganonpixel.png';
        setTimeout(function() {
          active2 = false;
        }, 200);

      } else {
        ganon.src = 'ganonpixel1.png';
      }
    } else if (level == 1) {
      if (active2) {
        ganon.src = 'ghir1.png';
        setTimeout(function() {
          active2 = false;
        }, 200);

      } else {
        ganon.src = 'ghir.png';
      }
    } else if (level == 2) {
        if (active2) {
          ganon.src = 'cucco1.png';
          setTimeout(function() {
            active2 = false;
          }, 200);

        } else {
          ganon.src = 'cucco.png';
        }
    }

    ctx.drawImage(ganon, object.x - 50, object.y, 80, object.height);
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
    change_hearts(score2, heartp1);

  } else if (object == heartp2) {
    change_hearts(score1, heartp2);

  } else if (object == ball) {
    rupe.src = 'rupe.png';
    ctx.drawImage(rupe, object.x - 8, object.y - 10, 25, 30);
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
  // Opciones del texto
  var grd = ctx.createLinearGradient(0, 0, 750, 0);
  grd.addColorStop('0', "white");
  grd.addColorStop('1', "goldenrod");
  if (estado == 7) {
    ctx.font = "50px Zelda";
  } else {
    ctx.font = "35px Zelda";
    // Rectangulo para tapar midline
    ctx.clearRect(center[0] - 10, center[1] - 40, 20, 60);
  }
  ctx.fillStyle = grd;
  ctx.textAlign = "center";
  // Centro el texto en la mitad
  ctx.fillText(phrase, center[0], center[1]);
  if (estado == 3 || estado == 4 || estado == 5 || estado == 6) {
    init();
    ctx.clearRect(center[0], center[1] + 40, 20, 60);
    ctx.fillText('Press the spacebar to start', center[0], center[1] + 40);
  } else if (estado == 7) {
    ctx.font = "35px Zelda";
    ctx.fillText('Press the spacebar to return to the main menu', center[0], center[1] + 40);
  }

}

function end_screen() {
  end.src = 'end_screen.jpg'
  ctx.drawImage(end, 0, 0, canvas.width, canvas.height);
  blink_navi('triforce');
  phrase = 'The end';
  game_info(phrase);
}

function draw() {
  // Borro el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw_object(player1);
  draw_object(player2);
  draw_object(heartp1);
  draw_object(heartp2);

  if (estado == 0) {
    inicio.draw();
  }
  if (estado == 1 || estado == 2) { // running

    draw_object(ball);
  }
  if (estado == 3) {
    phrase = "Game Over"
    start_again = "Press the spacebar to start"
    level = 0;
    game_info(phrase);
  }

  if (estado == 4) {
    phrase = "You win"
    game_info(phrase);
  }
  if (estado == 5 ) {
    phrase = "Prepare yourself for the next level"
    game_info(phrase);
  }
  if (estado == 6 ) {
    phrase = "Final level"
    game_info(phrase);
  }

  if (estado == 7) {
    level = 0;
    end_screen();

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
    if (mode == 'single') {
      auto_p2();
    }

  } else if (estado == 2) {
    countdown();
    setTimeout(function() {
      estado = 1;
    }, 2000);

  }
  // Call drawScene again in the next browser repaint
    window.requestAnimationFrame(main);

}

main();
