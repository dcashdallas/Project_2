var connection = require("./connection.js");



var orm = {

    // setting up 'selectAll()' method 
    selectAll: function (callback) {


        connection.query('SELECT * FROM games', function (err, result) {
            if (err) throw err;
            callback(result);
        });

    },

    // setting up 'insertOne()' method
    insertOne: function (game_name, callback) {

        connection.query('INSERT INTO games SET ?', {
            game_name: game_name,
            owned: false,
        }, function (err, result) {
            if (err) throw err;
            callback(result);
        });

    },

    updateOne: function (gameID, callback) {

        // Run MySQL Query
        connection.query('UPDATE games SET ? WHERE ?', [{ owned: true }, { id: gameID }], function (err, result) {
            if (err) throw err;
            callback(result);
        });

    }
};

module.exports = orm;