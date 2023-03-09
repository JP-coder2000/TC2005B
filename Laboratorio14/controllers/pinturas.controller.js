const Pintura = require('../models/pinturas.model');

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');
};

exports.post_nuevo = (request, response, next) => {

    const pintura = new Pintura({
        nombre: request.body.nombre,
        autor: request.body.autor,
        fecha: request.body.fecha,
    });

    pintura.save();

    request.session.ultimo_pintura = pintura.nombre;

    response.redirect('/pinturas/');
};

exports.listar = (request, response, next) => {

    console.log(request.get('Cookie'));

    response.render('lista', { 
               pinturas: Pintura.fetchAll(),
               ultimo_pintura: request.session.ultimo_pintura || '', 
            });
        };

