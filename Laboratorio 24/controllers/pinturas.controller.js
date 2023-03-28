const Pintura = require('../models/Pintura.model');

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

exports.get_buscar = (req, res, next) => {
  Pintura.find(req.params.valor_busqueda)
    .then(([rows, fieldData]) => {
      res.status(200).json({ pintura: rows });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Error al buscar' });
    });
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
