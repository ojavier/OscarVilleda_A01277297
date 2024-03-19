document.addEventListener('DOMContentLoaded', function() {
    const buttonContainer = document.querySelector('.main-buttons'); // Selecciona el contenedor de botones

    // Objeto con los laboratorios
    const labContents = {
        'Lab1': `
            <h1>Lab1</h1>
            <h3>¿Cuál es la diferencia entre Internet y la World Wide Web?</h3>
            
        `,
        
        'Lab6': `
            <h1>Lab6</h1>
            <h3>¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor?</h3>
        `,
        // Puedes agregar más laboratorios aquí
    };

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