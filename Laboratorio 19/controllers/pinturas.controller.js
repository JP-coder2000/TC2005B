const Pintura = require('../models/pintura.model');

exports.listar = (req, res, next) => {
  let mensaje = '';
  if (req.session.message) {
    mensaje = req.session.message;
    req.session.mensaje = '';
  }
  Pintura.fetchAll()
    .then(([rows, fieldData]) => {
      res.render('galeria', {
        pinturas: rows,
        ultima_pintura: req.session.ultima_pintura,
        mensaje: mensaje,
      });
    })
    .catch((e) => console.log(e));
};

exports.get_agregar = (req, res, next) => {
  res.render('agregar');
};

exports.post_agregar = (req, res, next) => {
  const pintura = new Pintura({
    nombre: req.body.nombre,
    autor: req.body.autor,
    imagen: req.body.imagen,
  });
  pintura
    .save()
    .then(([rows, fieldData]) => {
      req.session.message = 'La pintura fue agregada exitosamente';
      req.session.ultima_pintura = pintura.nombre;
      res.redirect('/pinturas');
    })
    .catch((e) => console.log(e));
};
