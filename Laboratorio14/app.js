const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const app = express();

app.use(session({
       secret: 'mi string secreto que debe ser un string aleatorio muy largo.', 
       resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
       saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
    }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

const rutasPinturas = require('./routes/pinturas.routes');

app.use('/pinturas', rutasPinturas);

const rutasUsuarios = require('./routes/usuarios.routes');

app.use('/usuarios', rutasUsuarios);



app.use((request, response, next) => {
    console.log("Tercer middleware");

    response.status(404);
    
    //Envía la respuesta al cliente
    response.send('Lo sentimos, esta ruta no existe');
});

app.listen(4000);