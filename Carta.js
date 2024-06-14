$(document).ready(function() {
    // Datos de ejemplo de clientes
    let clientes = [
        {
            "name": "Birhan Fedez",
            "image": "imperio.jpg",
            "phone": "123-456-7890",
            "email": "birhan@gmail.com"
        },
        {
            "name": "Maria Gonzalez",
            "image": "Maria.jpg",
            "phone": "098-765-4321",
            "email": "maria@gmail.com"
        },
        {
            "name": "John Doe",
            "image": "John.jpg",
            "phone": "555-555-5555",
            "email": "john@gmail.com"
        },
        {
            "name": "Luisa Martínez",
            "image": "Luisa.jpg",
            "phone": "555-123-4567",
            "email": "luisa@gmail.com"
        },
        {
            "name": "Michael Johnson",
            "image": "Michael.jpg",
            "phone": "555-987-6543",
            "email": "michael@gmail.com"
        },
        {
            "name": "Sara Smith",
            "image": "Sara.jpg",
            "phone": "555-567-8901",
            "email": "sara@gmail.com"
        },
        {
            "name": "Ana Pérez",
            "image": "Ana.jpg",
            "phone": "555-321-9876",
            "email": "ana@gmail.com"
        },
        {
            "name": "Carlos Rodríguez",
            "image": "Carlos.jpg",
            "phone": "555-654-3210",
            "email": "carlos@gmail.com"
        },
        {
            "name": "Patricia García",
            "image": "Patricia.jpg",
            "phone": "555-789-0123",
            "email": "patricia@gmail.com"
        },
        {
            "name": "José Torres",
            "image": "José.jpg",
            "phone": "555-901-2345",
            "email": "jose@gmail.com"
        }
    ];

    function displayClients() {
        $("#Cartas").empty();
        clientes.forEach(cliente => {
            $("#Cartas").append(
                '<div class="Carta">' +
                    '<div class="Imagen">' +
                        '<img src="' + cliente.image + '" class="card-image" alt="Imagen de ' + cliente.name + '">' +
                    '</div>' +
                    '<div class="Carta-texto">' +
                        '<p class="nombre">' + cliente.name.split(' ')[0] + '</p>' +
                        '<p class="apellidos">' + cliente.name.split(' ').slice(1).join(' ') + '</p>' +
                        '<p class="Info">Teléfono: ' + cliente.phone + '</p>' +
                        '<p class="Info">Email: ' + cliente.email + '</p>' +
                    '</div>' +
                    '<button class="btn btn-circle btn-outline delete">' +
                        '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">' +
                            '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />' +
                        '</svg>' +
                    '</button>' +
                '</div>'
            );
        });
    }

    displayClients();

    // Función de búsqueda
    $('.boton').click(function() {
        var searchTerm = $('.Barrabus').val().toLowerCase();
        $('.nombre').each(function() {
            var text = $(this).text().toLowerCase();
            var tarjeta = $(this).closest('.Carta');
            if (text.indexOf(searchTerm) === -1) {
                tarjeta.hide();
            } else {
                tarjeta.show();
            }
        });
    });

    // Mostrar el modal para añadir cliente
    $('.btn-add').click(function() {
        $('#addClientModal').show();
    });

    // Cerrar el modal
    $('.close').click(function() {
        $('#addClientModal').hide();
    });

    // Añadir nuevo cliente
    $('#createClient').click(function() {
        let name = $('#clientName').val();
        let phone = $('#clientPhone').val();
        let email = $('#clientEmail').val();
        let image = $('#clientImage')[0].files[0];
        if (image) {
            let reader = new FileReader();
            reader.onload = function(e) {
                clientes.push({
                    name: name,
                    phone: phone,
                    email: email,
                    image: e.target.result
                });
                displayClients();
                $('#addClientModal').hide();
            };
            reader.readAsDataURL(image);
        } else {
            clientes.push({
                name: name,
                phone: phone,
                email: email,
                image: 'imperio.jpg' // Imagen por defecto si no se selecciona ninguna
            });
            displayClients();
            $('#addClientModal').hide();
        }
    });

    // Eliminar cliente
    $(document).on('click', '.delete', function() {
        let index = $(this).closest('.Carta').index();
        clientes.splice(index, 1);
        displayClients();
    });
});