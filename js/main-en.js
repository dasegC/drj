let url = "../js/proyectos.json"
let datos = [];
fetch(url)
    .then(response => response.json())
    .then(data => {
        /* console.log(data) */
        datos = data.datos
        /* console.log(datos) */


        let string = ``
        for (proyecto of datos) {

            string += `    <div class="project-container">
                <h3 class="titulo subrayado">${proyecto.titulo}</h3>
                <div class="contenedor-trabajos">
                    <div class="trabajo">
                        <div class="project-img">
                            <img src="${proyecto.imagen}" alt="${proyecto.tipoImagen}">
                        </div>
                        <div class="descripcion" >
                            <div class="btn-project">
                                <a href="${proyecto.link}" target="_blank" rel="noopener noreferrer">Go Link</a>
                            </div>
                            <p class="categoria">HTML - CSS - JS</p>
                        </div>
                    </div>
                </div>
                `
            string += `</div>`

            console.log(string)

            document.getElementById('proyectos').innerHTML = string
        }
    }
    );
