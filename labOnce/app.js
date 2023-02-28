const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended: false}));

const videoJuegosRutas = require('./routes/vj.routes');
app.use('/vj', videoJuegosRutas);

const comidaRutas = require('./routes/comida.routes');
app.use('/comida', comidaRutas);

app.use((request, response, next) => {
    //Envía la respuesta al cliente
    let html = `<h3>Lab 11</h3>
    <p>Bienvenidos al laboratorio numero 11 de Santiago y de su servidor, las rutas que tienes que seguir son las siguientes:</p>
    <p>Para ver los videojuegos que tenemos disponibles, tienes que ir a la ruta /vj</p>
    <ul>
        <li>/vj/destiny2</li>
        <li>/vj/minecraft</li>
        <li>/vj/r6</li>
    </ul>
    <p>Para ver las comidas que tenemos disponibles, tienes que ir a la ruta /comida</p>
    <ul>
        <li>/comida/pizza</li>
        <li>/comida/hamburguesa</li>
    <ul>
    `
    
    response.send(html);
});

app.listen(3000);