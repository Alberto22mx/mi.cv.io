onload = () => {
    let cerrarModal = document.querySelector('#cerrar-modal');
    cerrarModal.onclick = () => { ocultarModal() };
    
    // let elem = document.querySelector('#menu-fixed');
    // let rect = elem.getBoundingClientRect();
    // window.onscroll = function() {
    //     if(window.scrollY > rect.y + 100) {
    //         elem.classList.add('nombreclase');
    //         elem.classList.remove('menu');
    //     } else {
    //         elem.classList.remove('nombreclase');
    //         elem.classList.add('menu');
    //     }
    //   };
};
function mostrarModal(juego) {
    console.log(juego);
    var modal = document.querySelector('#contenedor-modal');
    let agregarJuego = document.querySelector('#juego');
    let agregarTituloJuego = document.querySelector('#titulo-juego');
    let agregarDescripcionJuego = document.querySelector('#descripcion-juego');
    modal.style.display = 'block';
    switch (juego) {
        case 'mar':
            agregarTituloJuego.innerHTML = '<h1 style="text-align: center;margin:0;">ATLANTIS HORSE</h1>';
            agregarDescripcionJuego.innerHTML = '<p style="text-align: center;margin: 20px;">El objetivo del juego es recolectar los diamandes que cayeron al mar antes de que termine el tiempo, el caballo seguira el cursor.</p>';
            agregarJuego.innerHTML = '<iframe width="595" height="300" src="https://alberto22mx.github.io/mi.cv.io/secciones/Juegos/CABALLO DE MAR/index.html" frameborder="0" allowfullscreen scrolling="no"></iframe>';
          break;
        case 'tictac':
            agregarTituloJuego.innerHTML = '<h1 style="text-align: center;margin:0;">GATO</h1>';
            agregarDescripcionJuego.innerHTML = '<p style="text-align: center;margin: 20px;">Es el típico juego de gato, damos click para seleccionar el lugar en el que pondremos la marca.</p>';
            agregarJuego.innerHTML = '<iframe width="100%" height="300" src="https://alberto22mx.github.io/mi.cv.io/secciones/Juegos/TICTACTOE/index.html" frameborder="0" allowfullscreen></iframe>';
          break;
        case 'tom':
            agregarTituloJuego.innerHTML = '<h1 style="text-align: center;margin:0;">TOM</h1>';
            agregarDescripcionJuego.innerHTML = '<p style="text-align: center;margin: 20px;">Se juega con las flechas del teclado no esta adaptado para dipositivos móviles, el objetivo es obtener el mejor puntaje. </p>';
            agregarJuego.innerHTML = '<iframe width="100%" height="300" src="https://alberto22mx.github.io/mi.cv.io/secciones/Juegos/TOM/index.html" frameborder="0" allowfullscreen></iframe>';
          break;
      }
    
}
function ocultarModal() {
    var modal = document.querySelector('#contenedor-modal');
    var juegoModal = document.querySelector('#juego iframe');
    juegoModal.remove();
    modal.style.display = 'none';
}