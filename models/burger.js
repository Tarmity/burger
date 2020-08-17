// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    all: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },
    // The varibles cols and vals are arrays.
    create: (cols, vals, cb) => {
        orm.create("burgers", cols, vals, (res) => {
            cb(res);
        });
    },
    update: (objColVal, condition, cb) => {
        orm.update("burgers", objColVal, condition, (res) => {
            cb(res);
        });
    },
    delete: (condition, cb) => {
        orm.delete("cats", condition, (res) => {
            cb(res);
        });
    }
};

// Export the database function for the controller
module.exports = burger;