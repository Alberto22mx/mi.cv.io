onload = () => {
    let elem = document.querySelector('#menu-fixed');
    let rect = elem.getBoundingClientRect();
    window.onscroll = function() {
        if(window.scrollY > rect.y -20) {
            elem.classList.add('nombreclase');
            elem.classList.remove('menu');
        } else {
            elem.classList.remove('nombreclase');
            elem.classList.add('menu');
        }
      };
};