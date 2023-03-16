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

  static fetchAll() {
    return db.execute(`SELECT * FROM pinturas`);
  }
};
