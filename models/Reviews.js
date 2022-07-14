"use strict";
class Review {
constructor(reviewId, restaurantId, review, rating, accountId, datePosted) {
this.reviewId = reviewId;
this.restaurantId = restaurantId;
this.review = review;
this.rating = rating;
this.accountId = accountId;
this.datePosted = datePosted;
}
setReviewId(reviewId) {
        this.reviewId = reviewId;
    }
setRestaurantId(restaurantId) {
        this.restaurantId = restaurantId;
    }
setReview(review) {
        this.review = review;
    }
setRating(rating) {
        this.rating = rating;
    }
setAccountId(accountId){
        this.accountId = accountId;
    }
setDatePosted(datePosted) {
        this.datePosted = datePosted;
    }
getReviewId() {
        return this.reviewId;
    }
getRestaurantId() {
        return this.restaurantId;
    }
getReview() {
        return this.review;
    }
getRating() {
        return this.rating;
    }
getAccountId(){
        return this.accountId;
    }
getDatePosted() {
        return this.datePosted;
    }

}
module.exports = Review;