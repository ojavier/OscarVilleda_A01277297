document.addEventListener('DOMContentLoaded', function () {
    // Obtener datos de usuarios de la base de datos usando AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/reporte', true); // Ruta que devuelve los datos de usuario
    xhr.onload = function () {
        if (xhr.status == 200) {
            var userData = JSON.parse(xhr.responseText); // Parsear el JSON
            if (!userData || !userData.result || !Array.isArray(userData.result)) {
                console.error('Error: No se pudieron extraer datos válidos de la base de datos');
                return;
            }
            console.log('Datos extraídos correctamente:', userData); // Nuevo console.log agregado
            // Verificar los datos de entrada
            console.log(userData.result);

            var ageData = processData(userData);
            // Depuración de la función processData
            console.log(ageData);
            createChart(ageData);
        } else {
            console.error('Error al cargar los datos de usuario');
        }
    };
    xhr.send();

    // Función para procesar los datos de usuarios y obtener el rango de edad
    function processData(userData) {
        var ageData = {
            '0-10': 0,
            '11-20': 0,
            '21-30': 0,
            '31-40': 0,
            '41-50': 0,
            '51-60': 0,
            '61+': 0
        };
        userData.result.forEach(function (user) {
            var age = calculateAge(user.birthdate); // Calcular la edad real a partir de la fecha de nacimiento
            if (age >= 0 && age <= 10) {
                ageData['0-10']++;
            } else if (age >= 11 && age <= 20) {
                ageData['11-20']++;
            } else if (age >= 21 && age <= 30) {
                ageData['21-30']++;
            } else if (age >= 31 && age <= 40) {
                ageData['31-40']++;
            } else if (age >= 41 && age <= 50) {
                ageData['41-50']++;
            } else if (age >= 51 && age <= 60) {
                ageData['51-60']++;
            } else {
                ageData['61+']++;
            }
        });
        return ageData;
    }    

    function calculateAge(birthdate) {
        // Implementa la lógica para calcular la edad real a partir de la fecha de nacimiento
        // Puedes usar Moment.js u otras bibliotecas para facilitar este cálculo
        // Por ahora, vamos a asumir que birthdate es un objeto Date
        var today = new Date();
        var birthDate = new Date(birthdate);
        var age = today.getFullYear() - birthDate.getFullYear();
        var monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    // Función para crear el gráfico de barras
    function createChart(ageData) {
        var labels = Object.keys(ageData);
        var data = Object.values(ageData);

        // Configuración del gráfico
        var chartOptions = {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        };

        // Depuración del gráfico
        console.log(data);

        // Obtener el contexto del lienzo
        var ctx = document.getElementById('ageChart').getContext('2d');

        // Crear el gráfico de barras
        var ageChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Número de Usuarios',
                    data: data,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: chartOptions
        });
    }
});
