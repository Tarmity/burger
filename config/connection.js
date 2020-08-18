// Set up MySql connection.
const mysql = require("mysql");
let connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Boston@29",
    database: "burgers_db"
});
};

// Make connection. 
connection.connect((err) => {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connection as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
