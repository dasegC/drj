(function () {
    var formulario = document.getElementById("contact-form");
    elementos = formulario.elements,
        boton = document.getElementById("btn");

    var validarNombre = function (e){
        if (formulario.nombre.value == 0) {
            alert("Por favor complete el nombre de la Empresa");
            e.preventDefault();
        }
    };

    var validarDomicilio = function(e){
        if (formulario.domicilio.value == 0) {
            alert("Por favor llene el Domicilio")
            e.preventDefault();
        }
    };

    var validarCiudad = function (e){
        if (formulario.ciudad.value == 0){
            alert("Por favor indique una Ciudad")
            e.preventDefault(e);
        };
    };

    var validarPais= function (e){
        if (formulario.pais.value == "") {
            alert("Por favor seleccione un País");
            e.preventDefault();
        };
    };

    var validarCodigo = function(e){
        if (formulario.cp.value == 0){
            alert("Por favor indique su Código Postal");
            e.preventDefault();
        };
    };

    var validarEmail = function(e){
        if (formulario.email.value == 0){
            alert("Por favor ingrese un Correo Electrónico");
            e.preventDefault();
        };
    };

    var validarTerminos = function(e){
        if (formulario.terminos.checked == true){
        } else{
            alert("Por favor acepte los Términos y Condiciones");
            e.preventDefault();
        };
    };

    var validar = function (e) {
        validarNombre(e);
        validarDomicilio(e);
        validarCiudad(e);
        validarPais(e);
        validarCodigo(e);
        validarEmail(e);
        validarTerminos(e);
    }

    formulario.addEventListener("submit", validar);
}());