document.addEventListener('DOMContentLoaded', function() {
    const buttonContainer = document.querySelector('.main-buttons'); // Selecciona el contenedor de botones

    // 1. Verificar y parsear correctamente el atributo data-lab-contents
    const labContentsString = buttonContainer.getAttribute('data-lab-contents');
    let labContents;
    try {
        labContents = JSON.parse(labContentsString);
    } catch (error) {
        console.error('Error al parsear data-lab-contents:', error);
        return; // Detener la ejecución si hay un error al parsear
    }

    // 2. Verificar que los datos de los laboratorios contengan tanto título como contenido
    if (!labContents || typeof labContents !== 'object') {
        console.error('Los datos de los laboratorios son inválidos');
        return; // Detener la ejecución si los datos son inválidos
    }

    // 3. Depurar y verificar los datos obtenidos
    console.log('Datos de laboratorios:', labContents);

    // Limpiar los botones existentes antes de agregar nuevos
    buttonContainer.innerHTML = '';

    // 4. Verificar que el contenedor de botones esté seleccionando el elemento correcto
    if (!buttonContainer) {
        console.error('No se encontró el contenedor de botones');
        return; // Detener la ejecución si el contenedor no se encuentra
    }

    // 5. Verificar que la función addEventListener se esté ejecutando correctamente
    console.log('La función addEventListener se está ejecutando correctamente');

    // Agregar botones para cada laboratorio al contenedor
    Object.keys(labContents).forEach((labTitle) => {
        const button = document.createElement('button');
        button.textContent = labTitle;
        button.classList.add('button', 'button-primary'); // Agrega clases de estilo común
        button.addEventListener('click', () => {
            // Al hacer clic en el botón, reemplaza el contenido central con el contenido del laboratorio correspondiente
            const textContainer = document.querySelector('.text-container');
            textContainer.innerHTML = labContents[labTitle];
        });
        buttonContainer.appendChild(button); // Agrega el botón al contenedor
    });
});
