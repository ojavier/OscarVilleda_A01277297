document.addEventListener('DOMContentLoaded', function() {
    const buttonContainer = document.querySelector('.main-buttons'); // Selecciona el contenedor de botones
    
    // Obtener los datos de los laboratorios del atributo de datos
    const labContents = JSON.parse(document.getElementById('laboratorios').getAttribute('data-lab-contents'));

    // Agrega botones para cada laboratorio al contenedor
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