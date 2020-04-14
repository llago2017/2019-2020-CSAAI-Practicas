console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
const video0 = document.getElementById("video0")
const video1 = document.getElementById("video1")
const video2 = document.getElementById("video2")
const video3 = document.getElementById("video3")

let videos = document.getElementsByClassName("video")

for (var i = 0; i < videos.length; i++) {
  videos[i].height = 150;
  videos[i].width = 265;
}

video0.height = 395;
video0.width = 600;

video0.poster = "https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png"
video1.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
video2.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
video3.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"


//-- Obtener los botones
const vid1 = document.getElementById("sel1")
const vid2 = document.getElementById("sel2")


function main() {
  //-- Función de retrollamada del botón de ver
  vid1.onclick = () => {
    console.log("Click!");
    console.log(video1.currentTime);
    video0.src = video1.src;
    video0.currentTime = video1.currentTime;
    video0.load();
  };

  //-- Funcion de retrollamada del boton de parar
  vid2.onclick = () => {
    console.log('Video 2 seleccionado');

    video0.src = video2.src;
    video0.currentTime = video2.currentTime;
    video0.load();
    //video1.pause();

    //-- Quitar la fuente de video, para que se muestre la
    //-- imagen definida en el atributo poster
    //video1.src=null;
  }
}
