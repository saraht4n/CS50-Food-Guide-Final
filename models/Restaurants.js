"use strict";
class Restaurant {
constructor(restaurantId) {
this.restaurantId = restaurantId;
}

setRestaurantId(restaurantId) {
    this.restaurantId = restaurantId;
    }
getRestaurantId(){
    return this.restaurantId;
    }
}
module.exports = Restaurant;