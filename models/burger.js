const orm = require('../config/orm.js');
class Burgers {
  static get() {
    return orm.selectAll();
  }

  static add(name) {
    return orm.insertOne(name, false);
  }

  static eat(id) {
    return orm.updateOne(id, true);
  }
}

module.exports = Burgers;