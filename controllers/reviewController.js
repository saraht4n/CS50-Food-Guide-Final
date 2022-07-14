"use strict";
const ReviewsDB = require('../models/ReviewsDB');
const Review = require('../models/Reviews');

var reviewsDB = new ReviewsDB();

function getAllReviews(request, respond){
    reviewsDB.getAllReviews(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addReviews(request, respond) {
    var now = new Date();
    var review = new Review(request.body.reviewId, request.body.restaurantId, request.body.review, request.body.rating, request.body.accountId, now.toString());
    reviewsDB.addReviews(review, function (error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function updateReview(request, respond) {
    var now = new Date();
    var review = new Review(parseInt(request.params.id), request.body.restaurantId, request.body.review, request.body.rating, request.body.accountId, now.toString());
    reviewsDB.updateReview(review, function (error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteReview(request, respond){
    var reviewId = request.params.id;
    reviewsDB.deleteReview(reviewId, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllReviews, addReviews, updateReview, deleteReview};