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

// Help function to convert object key/value pairs to SQl syntax.
const objToSql = (ob) => {
    const arr = [];

    // loop through the key and push the key/value as a string int arr.
    for (const key in ob) {
        let value = ob[key];
        //check to skip hidden properties
        if(Object.hasOwnProperty.call(ob, key)) {
            // If string with spaces, ad quotations 
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-seperated string
    return arr.toString();
} 