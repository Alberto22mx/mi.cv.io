onload = () => {
    let cerrarModal = document.querySelector('#cerrar-modal');
    cerrarModal.onclick = () => { ocultarModal() };
};
function mostrarModal(juego) {
    var modal = document.querySelector('#contenedor-modal');
    let agregarJuego = document.querySelector('#juego');
    let agregarTituloJuego = document.querySelector('#titulo-juego');
    let agregarDescripcionJuego = document.querySelector('#descripcion-juego');
    modal.style.display = 'block';
    switch (juego) {
        case 'mar':
            agregarTituloJuego.innerHTML = '<h1 style="text-align: center;margin:0;">ATLANTIS HORSE</h1>';
            agregarDescripcionJuego.innerHTML = '<p style="text-align: center;margin: 20px;">El objetivo del juego es recolectar los diamandes que cayeron al mar antes de que termine el tiempo, el caballo seguira el cursor.</p>';
            agregarJuego.innerHTML = '<iframe width="100%" height="300" src="https://alberto22mx.github.io/mi.cv.io/secciones/Juegos/CABALLO DE MAR/index.html" frameborder="0" allowfullscreen scrolling="no"></iframe>';
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
        //  case 'aci':
        //     agregarTituloJuego.innerHTML = '<h1 style="text-align: center;margin:0;">ACI GROUP</h1>';
        //     agregarDescripcionJuego.innerHTML = '<p style="text-align: center;margin: 20px;">ACI es una consultora en la cual me contrataron para trabajar con Telcel en el proyecto de Sistema de Precios el cual consiste en generación de reportes, carga de información y distribución de la misma a los distintos proveedores.</p><p style="text-align: center;margin: 20px;">El proyecto inicio en enero del 2023 y concluye con fecha estima en diciembre del 2023.</p>';
        //     agregarJuego.innerHTML = '<div style="display: flex;justify-content: space-between;"><a style="margin: auto;" href="https://www.acigroup.com.mx/" target="_blank">Pagina oficial: ACI GROUP</a></div>';
        //   break;
        // case 'ahorra':
        //     agregarTituloJuego.innerHTML = '<h1 style="text-align: center;margin:0;">AHORRA SEGUROS</h1>';
        //     agregarDescripcionJuego.innerHTML = '<p style="text-align: center;margin: 20px;">En ahorra seguros estuve a cargo de 17 proyectos como venta nueva, sub secuentes, cobranza, atención al cliente, e-commers, gastos medicos, telefonia, entre otros. Algunos proyectos fueron creados desde 0 y algunos otros se actualizaron o modificaron. </p>';
        //     agregarJuego.innerHTML = '<div style="display: flex;justify-content: space-between;"><a style="margin: auto;" href="https://cotizador.ahorraseguros.com/" target="_blank">Pagina oficial: AHORRA SEGUROS</a></div>';
        //   break;
        // case 'it':
        //     agregarTituloJuego.innerHTML = '<h1 style="text-align: center;margin:0;">DESARROLLO IT</h1>';
        //     agregarDescripcionJuego.innerHTML = '<p style="text-align: center;margin: 20px;"></p>';
        //     agregarJuego.innerHTML = '';
        //   break;
        // case 'gv':
        //     agregarTituloJuego.innerHTML = '<h1 style="text-align: center;margin:0;">GRUPO VANGUARDIA</h1>';
        //     agregarDescripcionJuego.innerHTML = '<p style="text-align: center;margin: 20px;"></p>';
        //     agregarJuego.innerHTML = '';
        //   break;
        // case 'inali':
        //     agregarTituloJuego.innerHTML = '<h1 style="text-align: center;margin:0;">INALI</h1>';
        //     agregarDescripcionJuego.innerHTML = '<p style="text-align: center;margin: 20px;"></p>';
        //     agregarJuego.innerHTML = '';
        //   break;
      }
    
}
function ocultarModal() {
    var modal = document.querySelector('#contenedor-modal');
    var juegoModal = document.querySelector('#juego iframe');
    if (juegoModal) {
        juegoModal.remove();
    }
    modal.style.display = 'none';
}