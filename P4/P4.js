console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
const video0 = document.getElementById("video0")
const video1 = document.getElementById("video1")
const video2 = document.getElementById("video2")
const video3 = document.getElementById("video3")
const video4 = document.getElementById("video4")

let videos = document.getElementsByClassName("video")

for (var i = 0; i < videos.length; i++) {
  videos[i].height = 150;
  videos[i].width = 265;
}

video0.height = 338;
video0.width = 600;

video1.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
video2.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
video3.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
video4.poster="https://mmedia.uv.es/g?user=asamar4&path=/&name=enpruebas.jpg&resource_id=45526"


//-- Obtener los botones
const vid1 = document.getElementById("sel1")
const vid2 = document.getElementById("sel2")
const vid3 = document.getElementById("sel3")
const vid4 = document.getElementById("sel4")

function selectvideo(vid) {
  if (video0.src != null) {
    video0.poster = "https://i.pinimg.com/originals/ab/72/2d/ab722da9c57971c4b5ce9e98511ec58d.png"
  }
  
  if (vid == video4) {
    video0.src = null;
    video0.poster = vid.poster
  } else {
    video0.src = vid.src;
    video0.currentTime = vid.currentTime + 0.5;
    video0.load();
  }
}


function main() {
  //-- Función de retrollamada del botón de ver
  vid1.onclick = () => {
    console.log("Click!");
    selectvideo(video1);
  };

  //-- Funcion de retrollamada del boton de parar
  vid2.onclick = () => {
    console.log('Video 2 seleccionado');
    selectvideo(video2);
  }

  vid3.onclick = () => {
    console.log("Click!");
    selectvideo(video3);
  };

  vid4.onclick = () => {
    console.log("Click!");
    selectvideo(video4);
  };
}
