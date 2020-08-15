// Import MySQL connection
const connection = require ("../config/connection.js");

// Helper Function loops through and creates an array of question marks and turns them into a string.  
const printQuestionMarks = (num) => {
    const arr = [];

    for (let i = 0; i  < num; i++) {
        arr.push("?");
    }

    return arr.toString();
};

