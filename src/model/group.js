const db = require('../../config/db');

class GroupModel  {
    getUserByCnpjf (cnpjf) {
      return new Promise((resolve, reject) => {
        db.query('SELECT * FROM "group" WHERE cnpjf = $1', [cnpjf], (err, results) => {
          if (err) {
            return reject(err);
          }
          resolve(results.rows[0]);
        });
      });
    };
}

module.exports = new GroupModel()