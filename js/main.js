let url = "../js/proyectos.json"
let datos = [];
fetch(url)
    .then(response => response.json())
    .then(data => {
        datos = data.datos


        let cadena = ``
        for (proyecto of datos) {

            cadena += `    <div class="project-container">
                <h3 class="titulo subrayado">${proyecto.titulo}</h3>
                <div class="contenedor-trabajos">
                    <div class="trabajo">
                        <div class="project-img">
                            <img src="${proyecto.imagen}" alt="${proyecto.tipoImagen}">
                        </div>
                        <div class="descripcion" >
                            <div class="btn-project">
                                <a href="${proyecto.link}" target="_blank" rel="noopener noreferrer">Visitar</a>
                            </div>
                            <p class="categoria">HTML - CSS - JS</p>
                        </div>
                    </div>
                </div>
                `
            cadena += `</div>`

            console.log(cadena)

            document.getElementById('proyectos').innerHTML = cadena
        }
    }
    );
