"use strict";

var db = require('../db-connections');
class RestaurantsDB{
    getAllRestaurants(callback){
        var sql = "SELECT * FROM restaurant.restaurant";
        db.query(sql, callback);
    }
}

module.exports = RestaurantsDB;