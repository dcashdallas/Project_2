var orm = require("../config/orm.js");

var game = {

    selectAll: function (callback) {
        orm.selectAll(function (res) {
            callback(res);
        });
    },

    insertOne: function (game_name, callback) {
        orm.insertOne(game_name, function (res) {
            callback(res);
        });
    },

    updateOne: function (game_id, callback) {
        orm.updateOne(game_id, function (res) {
            callback(res);
        });
    }

};

module.exports = game;