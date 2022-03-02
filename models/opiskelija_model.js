const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;
const opiskelija={
  get: function(callback) {
    return db.query('select * from opiskelija', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from opiskelija where idopiskelija=?', [id], callback);
  },
  add: function(opiskelija, callback) {
      return db.query('insert into opiskelija (Etunimi, sukunimi, Osoite, Luokkatunnus) values(?,?,?,?)',
      [opiskelija.Etunimi, opiskelija.Sukunimi, opiskelija.osoite, opiskelija.Luokkatunnus], callback);
  },
  delete: function(id, callback) {
    return db.query('delete from opiskelija where idopiskelija=?', [id], callback);
  },
  update: function(id, opiskelija, callback) {
      return db.query('update opiskelija set Etunimi=?, sukunimi=?, Osoite=?, Luokkatunnus=? where idopiskelija=?',
      [opiskelija.Etunimi, opiskelija.sukunimi,opiskelija.osoite,opiskelija.luokkatunnus, id], callback);
  }

}
          
module.exports = opiskelija;