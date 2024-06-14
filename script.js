// script.js

$(document).ready(function() {
    // Datos de ejemplo de repositorios
    const repositorios = [
        {
            nombre: 'Proyecto 1',
            descripcion: 'Taller-De-Reparaciones',
            link: 'https://github.com/Maximo10/TallerBirhan'
        },
        {
            nombre: 'Proyecto 2',
            descripcion: 'Biblioteca',
            link: 'https://github.com/Maximo10/Biblioteca_Birhan'
        },
        {
            nombre: 'Proyecto 3',
            descripcion: 'Juego Tres-en-Raya',
            link: 'https://github.com/Maximo10/Tres-en-Raya'
        },
        {
            nombre: 'Proyecto 4',
            descripcion: 'Tarjetas-Interactivas',
            link: 'https://github.com/Maximo10/Tarjetas-Interactivas'
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
