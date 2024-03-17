//logica del proyecto

const express = require('express');
const app = express();

const misRutas = require('./routes/nombre_archivo');

app.use('/modulo', misRutas);