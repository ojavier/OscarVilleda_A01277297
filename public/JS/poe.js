document.addEventListener('DOMContentLoaded', function() {
    const buttonContainer = document.querySelector('.main-buttons'); // Selecciona el contenedor de botones

    // Función para recuperar la lista de laboratorios del servidor
    function obtenerLaboratorios() {
        fetch('/api/laboratorios')
            .then(response => response.json())
            .then(laboratorios => {
                // Limpiar los botones existentes
                buttonContainer.innerHTML = '';

                // Agregar botones para cada laboratorio al contenedor
                laboratorios.forEach(laboratorio => {
                    const button = document.createElement('button');
                    button.textContent = laboratorio.titulo;
                    button.classList.add('button', 'button-primary'); // Agrega clases de estilo común
                    button.addEventListener('click', () => {
                        // Al hacer clic en el botón, reemplaza el contenido central con el contenido del laboratorio correspondiente
                        const textContainer = document.querySelector('.text-container');
                        textContainer.innerHTML = `
                            <h1>${laboratorio.titulo}</h1>
                            <h3>${laboratorio.contenido}</h3>
                        `;
                    });
                    buttonContainer.appendChild(button); // Agrega el botón al contenedor
                });
            })
            .catch(error => console.error('Error al recuperar laboratorios:', error));
    }

    // Llamar a la función para obtener laboratorios cuando se carga la página por primera vez
    obtenerLaboratorios();

    // Escuchar el evento de click en el botón de crear y luego obtener laboratorios
    const crearButton = document.querySelector('.crear-button');
    crearButton.addEventListener('click', () => {
        fetch('/crear') // Realizar una solicitud al servidor para crear un nuevo laboratorio
            .then(response => {
                if (response.ok) {
                    // Si la creación del laboratorio es exitosa, obtener la lista actualizada de laboratorios
                    obtenerLaboratorios();
                } else {
                    console.error('Error al crear laboratorio:', response.statusText);
                }
            })
            .catch(error => console.error('Error al crear laboratorio:', error));
    });
});
