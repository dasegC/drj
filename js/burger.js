/* ----- ELEMENTOS CLICKEABLES  ----- */

const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')

/* ----- Agrega y quita clases al menú  ----- */

toggleButton.addEventListener("click",() => {
    toggleButton.classList.toggle("cerrar");
    navWrapper.classList.toggle("mostrar");
  })

/* ----- Se esconde el menú al dar click fuera del contenedor  ----- */
navWrapper.addEventListener('click',e => {
    if(e.target.id === 'nav'){
      navWrapper.classList.remove('mostrar')
      toggleButton.classList.remove('cerrar')
    }
  })

