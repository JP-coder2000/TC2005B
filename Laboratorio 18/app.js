const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const csrf = require('csurf');
const isAuth = require('./utils/is-auth');
const path = require('path');

const app = express();

app.use(
  session({
    secret:
      'mi string secreto que debe ser un string aleatorio muy largo, no como éste',
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
  })
);

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');

//CSRF Protection
const csrfProtection = csrf();
app.use(csrfProtection); 
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

const usuariosRoutes = require('./routes/usuarios.routes');

app.use('/usuarios', usuariosRoutes);


const pinturasRoutes = require('./routes/pinturas.routes');

app.use('/pinturas', isAuth, pinturasRoutes);

app.use('/', (req, res, next) => {
  res.redirect('/pinturas');
});

app.listen(3000);
