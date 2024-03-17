document.addEventListener('DOMContentLoaded', function() {
    const buttonContainer = document.querySelector('.main-buttons'); // Selecciona el contenedor de botones

    // Objeto con los laboratorios
    const labContents = {
        'Lab1': `
            <h1>Lab1</h1>
            <h3>¿Cuál es la diferencia entre Internet y la World Wide Web?</h3>
            <p>
                Internet: Es una gran red de dispositivos conectados entre sí. Utiliza el protocolo TCP/IP (Protocolo de Control de Transmisión/Protocolo de Internet). <br> Permite la comunicación y cambio de datos entre dispositivos. <br>
                World Wide Web (www): Colección masiva de páginas. Los documentos de la WWW se presentan en forma de páginas web, que pueden contener texto, imágenes, videos, etc.<br>
                Navegamos a través de los celulares o computadoras usando internet para acceder a la web.
            </p><br>
            <p>
            <h3>¿Cuáles son las partes de un URL?</h3>
            Protocolo (Esquema): Es la primera parte del URL e indica el protocolo además de si se mostrará en hipertexto o no.</br>
            Subdominio: Se coloca antes del nombre del dominio y se refiere a un área del dominio principal.</br>
            Dominio: Indica el nombre del dominio.</br>
            Ruta: Recorrido de navegación del sitio.</br>
            Parámetros: Información adicional de la ruta. Están separados por "&".</br>
            Carpeta o subcarpeta Ubicación específica de un recurso. Se identifica con el símbolo "#".
          </p></br>
      
            <p>
              <h3>¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?</h3>
              GET: Solicita representaciones de recursos a los servidores.</br>
              HEAD: Similar a GET pero sólo pide el encabezado.</br>
              POST: Envía datos al servidor, la cual será procesada como formulario HTML.</br>
              PUT: Actualiza datos de un recurso existente</br>
              PATCH: Hace modificaciones parciales a un recurso.</br>
              DELETE: Borra recursos específicos
            </p></br>
      
            <p>
              <h3>¿Qué método HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contraseña en algún sitio? ¿Por qué?</h3>
              Se utiliza HTTP POST, debido a la seguridad que brinda, ya que los datos del formulario son incluidos en el cuerpo del formulario y son enviados al servidor.
            </p></br>
      
            <p>
              <h3>¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</h3>
              GET ya que se encarga de solicitar datos del servidor.
            </p></br>
      
            <p>
              <h3>Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</h3>
              Que la solicitud se completó y se encontró el servidor, por lo que se devolverá el contenido solicitado.
            </p></br>
      
            <p>
              <h3>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</h3>
              Si, ya que tal vez haya un enlace roto, algún problema de permiso o incluso un problema con la configuración del servidor, lo cual impide al usuario acceder a la página web.
            </p></br>
      
            <p>
              <h3>¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</h3>
              Corregir algún error en el código de la conexión con el servidor, configuración del servidor o algún problema con la base de datos, fuera de ello suelen ser problemas del cliente.
            </p></br>
      
            <p>
              <h3> ¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)?</h3>
              Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.
            </p></br>
      
            <p>
              <h3>Que el atributo ya no es recomendado de usar en el estándar actual de HTML, podría ser eliminado de versiones futuras y por ello se perdería compatibilidad.</h3>
              “align”: alinea elementos como imágenes y tablas horizontalmente dentro de su contenedor, HTML5 recomienda alinear con CSS.</br>
              “font”: Define el tamaño, color y tipo de fuente del texto, HTML5 alienta a realizar esto en CSS.</br>
              “frame”: Especifica si un marco tiene bordes visibles, en HTML5 el uso de marcos se realiza en CSS.</br>
              “border”: Especifica el ancho del borde alrededor de una imagen, HTML5 recomienda ajustar los bordes con CSS.</br>
            </p></br>
      
            <p>
              <h3>¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</h3>
              HTML5 ofrece nuevas características y elementos a comparación de HTML4, esto permite crear páginas web más ricas, accesibles y compatibles con los estándares actuales de la web.
            </p></br>
      
            <p>
              <h3>¿Qué componentes de estructura y estilo tiene una tabla?</h3>
              <h4>Componentes</h4>
              <.table>: Es el contenedor principal de la tabla.</br>
              <.tr>: Representa una fila en la tabla.</br>
              <.th>: Similar al elemento <td>, pero se utiliza para representar encabezados de columna o fila en la tabla.</br>
              <.thead>: Define el encabezado de una tabla.</br>
              <.tbody>: Define el cuerpo principal de una tabla.</br>
              <.tfoot>: Define el pie de una tabla.</br>
              <h4>Estructura</h4>
              border: Se utiliza para especificar el ancho del borde de la tabla y de las celdas.</br>
              cellpadding: Controla el espacio entre el contenido de las celdas y el borde de las celdas.</br>
              cellspacing: Controla el espacio entre las celdas de la tabla.</br>
            </p></br>
      
            <p>
              <h3>¿Cuál es el ciclo de vida de los sistemas de información?</h3>
              Enfoque por fases para análisis y diseño, que mejora los ciclos específicos  de actividades del analista y del usuario.
            </p></br>
      
            <p>
              <h3>¿Cuál es el ciclo de desarrollo de sistemas de información?</h3>
              Definición de requerimientos, análisis y diseño de software, implementación y prueba de unidades, integración de pruebas de sistema y por último operación y mantenimiento.
            </p></br>
        `,
        'Lab3': `
            <h1>Lab3</h1>
            <h3>Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS? </h3>
            <p>
                No se usa demasiado pero es bastante útil, debe usarse con moderación debido a que es una declaración que anula todas las demás reglas de estilo y fuerza la aplicación de un estilo específico a un elemento.
            </p><br>
            <p>
              <h3>Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS? </h3>
              No sé usa demasiado pero es bastante útil, debe usarse con moderación debido a que es una declaración que anula todas las demás reglas de estilo y fuerza la aplicación de un estilo específico a un elemento.
            </p></br>
      
            <p>
              <h3> Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado?</h3>
              Existen varias razones cómo impacto en el rendimiento, coherencia visual, compatibilidad con dispositivos y resoluciones, contraste y accesibilidad además de las licencias por derechos de autor.
            </p></br>
      
            <p>
              <h3>Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?</h3>
              Se recomienda utilizar unidades relativas como % y em para crear diseños más adaptables y responsivos. Sin embargo, las unidades absolutas como px también tienen su lugar en ciertos escenarios donde se necesita precisión y control específico.
            </p></br>
      
            <p>
              <h3>¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?</h3>
              Debido a que se debe procesar el código, por ello se escribe en una sóla línea, de ésta forma se evita tener que procesar tantas líneas de código.    
            </p></br>
        `,
        'Lab4': `
            <h1>Lab4</h1>
            <p>
              <h3>¿Qué diferencias y semejanzas hay entre Java y JavaScript?</h3>
              Java:  Lenguaje de programación orientado a objetos puros (OOP, según sus iniciales en inglés).</br>
              Javascript: está basado en prototipos y puede emular la programación orientada a objetos.
            </p></br>
      
            <p>
              <h3>¿Qué métodos tiene el objeto Date?</h3>
              getDate(): Devuelve el día del mes (del 1 al 31) para la fecha especificada por el objeto Date.</br>
              getMonth(): Devuelve el mes (del 0 al 11) para la fecha especificada por el objeto Date.</br>
              getFullYear(): Devuelve el año (como un número de cuatro dígitos) para la fecha especificada por el objeto Date.</br>
              getDay(): Devuelve el día de la semana (del 0 al 6) para la fecha especificada por el objeto Date.</br>
              getTime(): Devuelve el valor numérico correspondiente al tiempo para la fecha especificada por el objeto Date. 
              Este valor representa el número de milisegundos transcurridos desde el 1 de enero de 1970 00:00:00 UTC.
            </p></br>
      
            <p>
              <h3>¿Qué métodos tienen los arreglos? </h3>
              push(): Añade uno o más elementos al final del arreglo y devuelve la nueva longitud del arreglo.</br>
              pop(): Elimina el último elemento de un arreglo y lo devuelve.</br>
              splice(): Permite añadir o eliminar elementos de un arreglo en cualquier posición.</br>
              slice(): Devuelve una copia superficial de una porción de un arreglo en un nuevo arreglo.</br>
              forEach(): Ejecuta una función proporcionada una vez por cada elemento del arreglo.</br>
            </p></br>
      
            <p>
              <h3>¿Cómo se declara una variable con alcance local dentro de una función?</h3>
              Para declarar una variable con alcance local dentro de una función en JavaScript (y en muchos otros lenguajes de programación), 
              puedes utilizar la palabra clave var, let, o const
            </p></br>
      
            <p>
              <h3>¿Qué implicaciones tiene utilizar variables globales dentro de funciones?</h3>
              Utilizar variables globales dentro de funciones puede tener varias implicaciones que pueden afectar el diseño y el 
              comportamiento de tu código de manera significativa:</br>
              Acceso desde cualquier parte del código: Las variables globales pueden ser accedidas y modificadas desde cualquier lugar del código.</br>
              Riesgo de colisión de nombres: Si utilizas nombres comunes para tus variables globales, existe el riesgo de que choquen con nombres de 
              variables utilizados en otras partes del código.</br>
              Dificulta la reutilización del código: Las funciones que dependen de variables globales pueden ser menos reutilizables.</br>
            </p></br>
        `,
        'Lab6': `
            <h1>Lab6</h1>
            <h3>¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor?</h3>
            <p>
            Experiencia del usuario: Validar los datos del formulario en el lado del cliente permite proporcionar retroalimentación inmediata al usuario sobre cualquier error que haya cometido.</br>
            Reducción de la carga del servidor: Al validar los datos en el lado del cliente, se pueden prevenir solicitudes innecesarias al servidor para procesar datos incorrectos.</br>
            Mejora de la seguridad: Aunque la validación en el lado del cliente no debe ser la única capa de seguridad, puede ayudar a prevenir ataques maliciosos al filtrar datos incorrectos antes de que lleguen al servidor.</br>
            </P></br>
            <h3>¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?</h3>
            <p>
            Saltarse la seguridad de las validaciones hechas con JavaScript es posible para usuarios maliciosos que tengan conocimientos técnicos y acceso al código fuente o a las herramientas del navegador.</br>
            Desactivar JavaScript: Los usuarios pueden desactivar JavaScript en su navegador, lo que anularía cualquier validación realizada en el lado del cliente.</br>
            Manipulación del DOM: Los usuarios pueden utilizar herramientas de desarrollo del navegador para modificar el DOM y alterar el comportamiento de la validación.</br>
            Envío directo al servidor: Aunque no es común, los usuarios pueden intentar enviar datos directamente al servidor sin usar el formulario en la página web.</br>
            </p></br>
            <h3>Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera pregunta dice que es una buena práctica?</h3>
            <p>
            La primera pregunta sugiere que es una buena práctica utilizar JavaScript para validar los inputs de los formularios antes de enviar los datos al servidor porque, a pesar de que es posible saltarse estas validaciones, aún proporciona varios beneficios:</br>
            Mejora la experiencia del usuario: Proporciona retroalimentación inmediata al usuario sobre posibles errores en los datos ingresados.</br>
            </p></br>
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
