// script.js

$(document).ready(function() {
    // Datos de ejemplo de repositorios
    const repositorios = [
        {
            nombre: 'Proyecto 1',
            descripcion: 'Descripción del Proyecto 1',
            link: 'https://github.com/usuario/proyecto1'
        },
        {
            nombre: 'Proyecto 2',
            descripcion: 'Descripción del Proyecto 2',
            link: 'https://github.com/usuario/proyecto2'
        },
        {
            nombre: 'Proyecto 3',
            descripcion: 'Descripción del Proyecto 3',
            link: 'https://github.com/usuario/proyecto3'
        },
        {
            nombre: 'Proyecto 4',
            descripcion: 'Descripción del Proyecto 4',
            link: 'https://github.com/usuario/proyecto4'
        }
    ];

    // Función para generar las tarjetas de repositorios
    repositorios.forEach(repo => {
        $('#repositorio-container').append(
            `<div class="repositorio">
                <h3>${repo.nombre}</h3>
                <p>${repo.descripcion}</p>
                <a href="${repo.link}" target="_blank">Ver Repositorio</a>
            </div>`
        );
    });
});
