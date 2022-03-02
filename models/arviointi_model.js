const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;
const arviointi={
  get: function(callback) {
    return db.query('select * from arviointi', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from arviointi where idarviointi=?', [id], callback);
  },
  add: function(arviointi, callback) {
      return db.query('insert into arviointi (paivamaara, arvosana, idOpintojakso, idOpiskelija) values(?,?,?,?)',
      [arviointi.paivamaara, arviointi.arvosana,arviointi.idOpintojakso,arviointi.idOpiskelija], callback);
  },
  delete: function(id, callback) {
    return db.query('delete from arviointi where idarviointi=?', [id], callback);
  },
  update: function(id, arviointi, callback) {
      return db.query('update arviointi set paivamaara=?, arvosana=?, idOpintojakso=?, idOpiskelija=? where idarviointi=?',
      [arviointi.paivamaara, arviointi.arvosana,arviointi.idOpintojakso,arviointi.idOpiskelija, id], callback);
  }

}
          
module.exports = arviointi;