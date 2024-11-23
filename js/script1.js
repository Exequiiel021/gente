var botonPlay = document.getElementById("botonPlay");

botonPlay.addEventListener("click", function() {
  botonPlay.classList.add("shrink");
  vid.muted = true;
  vid1.muted = true;
  vid.play();
  vid1.play();
  vid.loop();
  vid1.loop();
  // alert("Los videos se están reproduciendo silenciados. Haz clic en ellos para activar el sonido.");
});
