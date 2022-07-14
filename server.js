var express = require("express");

var restaurantController = require('./controllers/restaurantController');
var reviewController = require('./controllers/reviewController');
var accountController = require('./controllers/accountController');
var app = express();

app.use(express.static("./public"));
app.use(express.json());

app.route('/reviews').get(reviewController.getAllReviews);
app.route('/reviews').post(reviewController.addReviews);
app.route('/reviews/:id').put(reviewController.updateReview)
app.route('/reviews/:id').delete(reviewController.deleteReview);

app.route('/accounts').get(accountController.getAllAccounts);
app.route('/accounts').post(accountController.addAccounts);
app.route('/accounts/:id').put(accountController.updateAccount)
app.route('/accounts/:id').delete(accountController.deleteAccount);
app.route('/login').post(accountController.accountLogIn);
app.route('/restaurants').get(restaurantController.getAllRestaurants);

app.listen(9191, "127.0.0.1");
console.log("web wserver running @ http://127.0.0.1:9191");