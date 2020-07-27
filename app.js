const express = require('express');
const app = express();

app.listen(3030, () => console.log('El servidor se levanto en el puerto 3030'));

const rutaHome = require('./routes/home');
const rutaSucursales= require('./routes/sucursales');
const rutaMarcas= require('./routes/marcas')
const rutaAutos=require('./routes/autos')


app.use('/', rutaHome)
app.use('/sucursales' , rutaSucursales)
app.use('/marcas', rutaMarcas)
app.use('/autos', rutaAutos)

app.use('*',(req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});
