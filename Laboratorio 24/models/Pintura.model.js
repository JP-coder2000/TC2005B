const db = require('../utils/database');

module.exports = class Pintura {
  constructor(pintura) {
    this.nombre = pintura.nombre || 'No name';
    this.autor = pintura.autor || 'No author';
    this.imagen = pintura.imagen || 'No image';
  }

  save() {
    return db.execute(
      `
      INSERT INTO pinturas (nombre, autor, imagen)
      VALUES (?, ?, ?)
      `,
      [this.nombre, this.autor, this.imagen]
    );
  }

  static find(valor_busqueda) {
    return db.execute(
      `SELECT pinturas.nombre, pinturas.autor, pinturas.imagen
      FROM pinturas
      WHERE pinturas.nombre LIKE ?
      OR pinturas.autor LIKE ?
      OR pinturas.imagen LIKE ? `,
      ['%' + valor_busqueda + '%', '%' + valor_busqueda + '%','%' + valor_busqueda + '%']
    );
  }

  static fetchAll() {
    return db.execute(`SELECT * FROM pinturas`);
  }
};
