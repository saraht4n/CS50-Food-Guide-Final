"use strict";

var db = require('../db-connections');
class ReviewsDB{
    getAllReviews(callback){
        var sql = "SELECT * FROM restaurant.review";
        db.query(sql, callback);
    }

    addReviews(review, callback){
        var sql = "INSERT INTO review (reviewId, restaurantId, review, rating, accountId, datePosted) VALUES (?, ?, ?, ?, ?, ?)";
        db.query(sql, [review.getReviewId(), review.getRestaurantId(), review.getReview(), review.getRating(), review.getAccountId(), review.getDatePosted()], callback);
    }

    updateReview(review, callback){
        var sql = "UPDATE review SET review = ?, rating = ?, datePosted = ? WHERE reviewId = ?";
        return db.query(sql, [review.getReview(), review.getRating(), review.getDatePosted(), review.getReviewId()], callback);
    }

    deleteReview(review, callback){
        var sql = "DELETE FROM review WHERE reviewId = ?";
        return db.query(sql, [review],callback);
    }

}

module.exports = ReviewsDB;