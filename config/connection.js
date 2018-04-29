let mysql = require('mysql');

const TABLE = 'burgers';
const COLUMNS = [
    'id', 
    'burger_name', 
    'devoured', 
];

let conn;

if(process.env.JAWSDB_URL) {
  conn = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'test',
    database: 'burgers_db'
  });
}

conn.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + conn.threadId);
});

function connectPromise() {
  return new Promise((resolve, reject) => {
    conn.connect(function(err) {
      if(err) reject(err);
      resolve();
    });
  });
}

function queryPromise(...args) {
  return new Promise((resolve, reject) => {
    conn.query(...args, function(err, res) {
      if(err) reject(err);
      resolve(res);
    });
  })
}

exports.connect = connectPromise;
exports.query = queryPromise;
exports.end = conn.end.bind(conn);