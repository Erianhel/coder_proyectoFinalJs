class Seguro {
    constructor(id, tipo, precio ){
        this.id = id;
        this.tipo = tipo;
        this.precio = precio;
    }

}

const menu = (opcion, monto, email) =>{
    let misSeguros = [];
    switch (parseInt(opcion)) {
        case 1:
            if (monto >= 50000 && monto <= 200000) {
                if (misSeguros.length === 0) {
                    misSeguros.push(new Seguro(0, "celular", calcularPrecioAPagar(monto)));
                    localStorage.setItem("misSeguros", JSON.stringify(misSeguros));
                }else {
                    misSeguros.push(new Seguro(misSeguros.length + 1, "celular",calcularPrecioAPagar(monto)));
                    localStorage.setItem("misSeguros", JSON.stringify(misSeguros));
                }
                Swal.fire({
                    title: "Agregado!",
                    icon: "success",
                    text: "El valor que debe abonar es: $ " + calcularPrecioAPagar(monto),
                  });

                    let data = {
                        service_id: 'service_g5p6lvt',
                        template_id: 'template_bk50r6d',
                        user_id: 'GISgVBXhRR0-yU2EY',
                        template_params: {
                            'texto': 'Se ha adquirido un seguro para su celular',
                            'notes': "El valor que debe abonar es: $ " + calcularPrecioAPagar(monto),
                            'send_to': email
                        }
                    };
                     
                    fetch('https://api.emailjs.com/api/v1.0/email/send', {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {'Content-type': 'application/json;charset=UTF-8',
                        },
                    }).then(function() {
                        console.log('Mail enviado!');
                    }).catch(function(error) {
                    console.log('Hubo un problema con la petición Fetch:' + error.message);
                    });

            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese una suma correcta!'
                  });
            }
            break;
        case 2:
            if (monto >= 10000 && monto <= 80000) {
                if (misSeguros.length === 0) {
                    misSeguros.push(new Seguro(0, "bolso", calcularPrecioAPagar(monto)));
                    localStorage.setItem("misSeguros", JSON.stringify(misSeguros));
                }else {
                    misSeguros.push(new Seguro(misSeguros.length + 1, "bolso",calcularPrecioAPagar(monto)));
                    localStorage.setItem("misSeguros", JSON.stringify(misSeguros));
                }
                Swal.fire({
                    title: "Agregado!",
                    icon: "success",
                    text: "El valor que debe abonar es: $ " + calcularPrecioAPagar(monto),
                  });

                  let data = {
                    service_id: 'service_g5p6lvt',
                    template_id: 'template_bk50r6d',
                    user_id: 'GISgVBXhRR0-yU2EY',
                    template_params: {
                        'texto': 'Se ha adquirido un seguro para su bolso',
                        'notes': "El valor que debe abonar es: $ " + calcularPrecioAPagar(monto),
                        'send_to': email
                    }
                };
                 
                fetch('https://api.emailjs.com/api/v1.0/email/send', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {'Content-type': 'application/json;charset=UTF-8',
                    },
                }).then(function() {
                    console.log('Mail enviado!');
                }).catch(function(error) {
                console.log('Hubo un problema con la petición Fetch:' + error.message);
                });

            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese una suma correcta!'
                  });
            }
            break;
        case 3:
            if (monto >= 50000 && monto <= 150000) {
                if (misSeguros.length === 0) {
                    misSeguros.push(new Seguro(0, "bicicleta", calcularPrecioAPagar(monto)));
                    localStorage.setItem("misSeguros", JSON.stringify(misSeguros));
                }else {
                    misSeguros.push(new Seguro(misSeguros.length + 1, "bicicleta",calcularPrecioAPagar(monto)));
                    localStorage.setItem("misSeguros", JSON.stringify(misSeguros));
                }
                Swal.fire({
                    title: "Agregado!",
                    icon: "success",
                    text: "El valor que debe abonar es: $ " + calcularPrecioAPagar(monto),
                  });

                  /* let data = {
                    service_id: 'service_g5p6lvt',
                    template_id: 'template_bk50r6d',
                    user_id: 'GISgVBXhRR0-yU2EY',
                    template_params: {
                        'texto': 'Se ha adquirido un seguro para su bicicleta',
                        'notes': "El valor que debe abonar es: $ " + calcularPrecioAPagar(monto),
                        'send_to': email
                    }
                };
                 
                fetch('https://api.emailjs.com/api/v1.0/email/send', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {'Content-type': 'application/json;charset=UTF-8',
                    },
                }).then(function() {
                    console.log('Mail enviado!');
                }).catch(function(error) {
                console.log('Hubo un problema con la petición Fetch:' + error.message);
                }); */

            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingrese una suma correcta!'
                  });
            }
            break;
        case 4:
                verSegurosContratados();
            break;
        default:
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingrese una opción válida!'
              });
            break;
        }
    
}

const calcularPrecioAPagar = (producto) =>{
    let premio = (producto*0.05) * iva;
        return premio;
}


const verSegurosContratados = () =>{
    let misSeguros = JSON.parse(localStorage.getItem("misSeguros"));
    let card = document.getElementById("tuseguros");
    card.innerHTML = "";
    card.className = "card";

    if(misSeguros === null){
        let segurosCont = document.getElementById("segurosContratados");
        segurosCont.innerHTML = `<h3 class="mt-4">No tiene seguros contratados</h3>`;
    }else{
        let segurosCont = document.getElementById("segurosContratados");
        segurosCont.innerHTML = `<h2 class="mt-4">Seguros Contratados</h2>
        <input type="submit" class="btn btn-info mt-3 mb-3" id="eliminarTodo" value="Eliminar todo">`;

    let botonEliminarTodo = document.getElementById("eliminarTodo");

    botonEliminarTodo.addEventListener("click", () => {
        card.className = "";
        Swal.fire({
        title: "Está seguro de eliminar todos los seguros?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, seguro",
        cancelButtonText: "No, no quiero",
        }).then((result) => {
        if (result.isConfirmed) {
            eliminarTodo();
            Swal.fire({
            title: "Eliminado!",
            icon: "success",
            text: "Los productos han sido eliminados",
            });
        };
        });
    }); 

    }
    
    let ul = document.createElement("ul");
    ul.className = "list-group list-group-flush";
    console.log(misSeguros);

    misSeguros.forEach(item => {
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `Tipo de seguro ${item.tipo} - Precio: $${item.precio}
    <input type="submit" class="btn btn-danger btn-sm mt-3" id="eliminar${item.id}" value="Eliminar">
    `;
    
        ul.append(li);
        card.append(ul);
        

        let boton = document.getElementById(`eliminar${item.id}`);
        boton.addEventListener("click", () => {
            Swal.fire({
              title: "Está seguro que desea eliminar el seguro?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: "Sí, seguro",
              cancelButtonText: "No, no quiero",
            }).then((result) => {
              if (result.isConfirmed) {
                eliminarSeguro(item.id);
                Swal.fire({
                  title: "Eliminado!",
                  icon: "success",
                  text: "El seguro ha sido eliminado",
                });
              }
            });
          }); 
    });  

}

const eliminarSeguro = (idSeguro) =>{
    misSeguros = JSON.parse(localStorage.getItem("misSeguros"));
    let aux = misSeguros.filter((item) => item.id != idSeguro);
    misSeguros = aux;
    localStorage.setItem("misSeguros", JSON.stringify(aux));
    verSegurosContratados(misSeguros);
}

const eliminarTodo = () =>{
    localStorage.clear();
    verSegurosContratados();
}

/* --------------------------------------------------------------------------------------------------------- */
const iva = 1.21;
let enviar = document.getElementById("enviar");


enviar.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = e.target.children;
    menu(inputs[0].value, inputs[1].value, inputs[2].value);
    enviar.reset();
});






  

  