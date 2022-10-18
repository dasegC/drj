(function () {
    var formulario = document.getElementById("contact-form");
    elementos = formulario.elements,
        boton = document.getElementById("btn");

    var validarNombre = function (e){
        if (formulario.name.value == 0) {
            alert("Please fill in the name of the Company");
            e.preventDefault();
        }
    };

    var validarDomicilio = function(e){
        if (formulario.addres.value == 0) {
            alert("Please fill in the Address")
            e.preventDefault();
        }
    };

    var validarCiudad = function (e){
        if (formulario.city.value == 0){
            alert("Please indicate a City")
            e.preventDefault(e);
        };
    };

    var validarPais= function (e){
        if (formulario.country.value == "") {
            alert("Please select a Country");
            e.preventDefault();
        };
    };

    var validarCodigo = function(e){
        if (formulario.zipCode.value == 0){
            alert("Please enter your ZIP Code");
            e.preventDefault();
        };
    };

    var validarEmail = function(e){
        if (formulario.email.value == 0){
            alert("Please enter an Email");
            e.preventDefault();
        };
    };

    var validarTerminos = function(e){
        if (formulario.terms.checked == true){
        } else{
            alert("Please accept the Terms and Conditions");
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