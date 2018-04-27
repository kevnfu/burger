const conn = require('./connection.js');

class ORM {
  static selectAll() {
    return conn.query('SELECT * FROM burgers');
  }

  static insertOne(name, devoured) {
    return conn.query(
      'INSERT INTO burgers (burger_name, devoured) VALUES (?,?)', 
      [name, devoured]);
  }

  static updateOne(id, devoured) {
    return conn.query(
      'UPDATE burgers SET devoured=? WHERE id=?',
      [devoured, id]);
  }
}

module.exports = ORM;
