const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const bodyParser = require('body-parser');

const path = require('path');
app.use(express.static(path.join()))

/*
router.use(bodyParser.urlencoded({extended: false}));

//Middleware
router.use((request, response, next) => {
        console.log('Middleware!');
        next(); //Le permite a la petición avanzar hacia el siguiente middleware
    });
   
router.get('/', (request, response, nezt) => {
        //colocar html        
});    

app.use((request, response, next) => {
        response.status(404);
        let html = html_header;
        html += '<h2 class = "title">No se pudo encontrar la página</h2>';
        html += html_footer;
        response.send(html); //Manda la respuesta
    });

/*const http = require('http');

const server = http.createServer( (request, response) => {
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write("hola");
        response.end();

        
});*/

/* rutas
const rutasClases = require('./routes/clases.routes');

app.use('/clases', rutasClases);*/

app.use('/', rutasClases);

const path = require('path');

app.use((request, response, next) => {
        response.status(404);
        response.sendFile(path.join(_dirname, 'views','404.html'));
    });

app.listen(3000);

