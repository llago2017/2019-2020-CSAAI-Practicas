console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
let imgs =  document.getElementsByClassName('images');
const ctx = canvas.getContext('2d');

// Botones
const colores = document.getElementById('colores')
const gris = document.getElementById('gris')
const especular = document.getElementById('especular')
const vertical = document.getElementById('vertical')
const noise_button = document.getElementById('noise')

//-- Acceso al deslizador
const deslizador_R = document.getElementById('deslizador_R');
const deslizador_G = document.getElementById('deslizador_G');
const deslizador_B = document.getElementById('deslizador_B');
const deslizadores = document.getElementById("deslizadores");

//-- Valor del deslizador
const range_R= document.getElementById('range_R');
const range_G= document.getElementById('range_G');
const range_B= document.getElementById('range_B');

var img = [];

  for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = (ev) => {
      console.log(ev.target);
      img = ev.target;
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0,0);
      console.log('click')
      img.style.border = '2px solid grey'
    }
    console.log("Imagen lista...");
  }

function modify_color() {

    //-- Mostrar el nuevo valor del deslizador
    range_R.innerHTML = deslizador_R.value;
    range_G.innerHTML = deslizador_G.value;
    range_B.innerHTML = deslizador_B.value;

    //-- Situar la imagen original en el canvas
    //-- No se han hecho manipulaciones todavia

      ctx.drawImage(img, 0,0);

    //-- Obtener la imagen del canvas en pixeles
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    let data = imgData.data

    //-- Obtener el umbral de rojo del desliador
    umbral_R = deslizador_R.value
    umbral_G = deslizador_G.value
    umbral_B = deslizador_B.value

    //-- Filtrar la imagen según el nuevo umbral
    for (let i = 0; i < data.length; i+=4) {
      if (data[i] > umbral_R){
        data[i] = umbral_R;
      }
      if (data[i+1] > umbral_G) {
        data[i+1] = umbral_G;
      }
      if (data[i+2] > umbral_B) {
        data[i+2] = umbral_B;
      }
    }
    //-- Poner la imagen modificada en el canvas
    ctx.putImageData(imgData, 0, 0);
}

function grey_scale() {
  ctx.drawImage(img, 0,0);
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data

    for (var i = 0; i < data.length; i+=4) {
        var r = data[i];
        var g = data[i+1];
        var b = data[i+2];
        var brillo = (3*r + 4*g + 1*b)/8

        data[i] = brillo;
        data[i+1] = brillo;
        data[i+2] = brillo;
    }
    ctx.putImageData(imgData, 0, 0);
}


function noise() {
  var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = imgData.data
    for (var i = 0, n = data.length; i < n; i += 4) {
       // Genero 3 tipos de colores aleatorios delimitados (para r g y b)
       var randColor1 = 0.6 + Math.random() * 0.4;
       var randColor2 = 0.6 + Math.random() * 0.4;
       var randColor3 = 0.6 + Math.random() * 0.4;
        // añado los colores a los datos
        data[i] = data[i]*randColor1; // Rojo
        data[i+1] = data[i+1]*randColor2; // Verde
        data[i+2] = data[i+2]*randColor3; // Azul
    }
    ctx.putImageData(imgData, 0, 0);
}

function drawRotated(select){
  if (select == "horizontal") {
    mode = [img.width,0,-1,1]
  } else {
    mode = [0,img.height, 1, -1]
  }
  ctx.translate(mode[0], mode[1]);
  ctx.scale(mode[2], mode[3]);
  ctx.drawImage(img, 0, 0);
}

function main() {
  colores.onclick = () => {
    console.log('click');
    deslizadores.style.display = 'block'
  }
  gris.onclick = () => {
    deslizadores.style.display = 'none'
    grey_scale();
  }

  deslizador_R.oninput = () => {
      modify_color();
  }
  deslizador_G.oninput = () => {
    modify_color();
  }
  deslizador_B.oninput = () => {
    modify_color();
  }

  especular.onclick = () => {
    drawRotated("horizontal");
  }

  vertical.onclick = () => {
    drawRotated('vertical');
  }

  noise_button.onclick = () => {
    noise();
  }
}

console.log("Fin...");
