function fetchReviews() {
    var request = new XMLHttpRequest();

    request.open('GET', review_url, true);

    request.onload = function() {
    review_array = JSON.parse(request.responseText);
    console.log(review_array);
    };

    request.send();
}

function showRestaurantReviews(element) {
    document.getElementById("emptyReview").innerHTML = "No review yet. Create one now";
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("review").textContent = "Review for " + restaurant_array[item].restaurantName;
    document.getElementById("reviewBody").textContent = "";

    for (var i = 0; i < review_array.length && i < account_array.length; i++) {
        if (review_array[i].restaurantId=== restaurant_array[item].restaurantId) {
            document.getElementById("emptyReview").innerHTML = "";
            selectedRestaurantId = restaurant_array[item].restaurantId;
            star = "";
            var html = '<div class="text-center" style="width:100%;">                                                           \
                            <div class="card">                                                                                  \
                                <div class="card-body">                                                                         \
                                    <p class="card-text" id="rating' + i + '">' + review_array[i].review + "</p>               \
                                    <small>by " + review_array[i].accountId + " @ " + review_array[i].datePosted + "</small>   \
                                </div>                                                                                          \
                            </div>                                                                                              \
                        </div>";
            document.getElementById("reviewBody").insertAdjacentHTML('beforeend', html);

            var star = "";
            for (var j = 0; j < review_array[i].rating; j++) {
                console.log(i);
                star += "<img src='assets/star_full.png' style='width:50px' />";
            }
            star += "<i class='far fa-trash-alt fa-2x edit' data-dismiss='modal' item='" + i + "' onClick='deleteReview(this)' ></i>";
            star += "<i class='far fa-edit fa-2x edit' data-toggle='modal' data-target='#editReviewModal' data-dismiss='modal' item='" + i + "' onClick='editReview(this)' ></i>";
            document.getElementById("rating" + i).insertAdjacentHTML('beforebegin', star + "<br/>");
        }
    }
}


function newReview() {
        rating = 0;
        document.getElementById("userReviews").value = "";
        document.getElementById("nickname").value = "";
}
    
function addReview() {
    var review = new Object();

    review.restaurantId = restaurant_array[currentIndex].restaurantId; 
    review.accountId = document.getElementById("nickname").value; 
    review.review = document.getElementById("userReviews").value; 
    review.datePosted = null; 
    review.rating = rating;

    var postReview = new XMLHttpRequest(); 

    postReview.open("POST", review_url, true); 

    postReview.setRequestHeader("Content-Type", "application/json");
    postReview.onload = function() {
        	console.log("new review sent");
	fetchReviews();
    };
    postReview.send(JSON.stringify(review)); 
}

function rateIt(element) {
    var num = element.getAttribute("value");
    var classname = element.getAttribute("class");
    var stars = document.getElementsByClassName(classname);
    var classTarget = "." + classname;

    for (let star of stars){
        star.setAttribute("src", starEmpty);
    }
    changeStarImage(num, classTarget);
}

function changeStarImage(num, classTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starFull);
            rating = 1;
            break;
        case 2:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starFull);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starFull);
            rating = 2;
            break;
        case 3:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starFull);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starFull);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starFull);
            rating = 3;
            break;
        case 4:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starFull);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starFull);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starFull);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", starFull);
            rating = 4;
            break;
        case 5:
            document.querySelector(classTarget + "[value='1']").setAttribute("src", starFull);
            document.querySelector(classTarget + "[value='2']").setAttribute("src", starFull);
            document.querySelector(classTarget + "[value='3']").setAttribute("src", starFull);
            document.querySelector(classTarget + "[value='4']").setAttribute("src", starFull);
            document.querySelector(classTarget + "[value='5']").setAttribute("src", starFull);
            rating = 5;
            break;
    }
}

function editReview(element) {
    var item = element.getAttribute("item");

    currentIndex = item;

    document.getElementById("edituserReviews").value = review_array[item].review;
    console.log(review_array[item].rating);
    displayStarFull('editpop', review_array[item].rating);
}

function displayStarFull(classname, num) {
    var pop = document.getElementsByClassName(classname);
    var classTarget = "." + classname;
    for (let p of pop) {
    p.setAttribute("src", starEmpty);
    }
    changeStarImage(num, classTarget);
    }

function updateReview() {
    var response = confirm("Are you sure you want to update this review?");
    if (response == true) {
    var edit_review_url = review_url + "/" + review_array[currentIndex].reviewId;
    var updateReview = new XMLHttpRequest(); 
    updateReview.open("PUT", edit_review_url, true); 
    updateReview.setRequestHeader("Content-Type", "application/json");
    review_array[currentIndex].review = document.getElementById("edituserReviews").value;
    review_array[currentIndex].rating = rating;
    updateReview.onload = function() {
    fetchReviews();
    };
    updateReview.send(JSON.stringify(review_array[currentIndex]));
    }
    }
    
function deleteReview(element) {
    var response = confirm("Are you sure you want to delete this review?");

    if (response == true) {
        var item = element.getAttribute("item");
        var delete_review_url = review_url + "/" + review_array[item].reviewId;
        var eraseReview = new XMLHttpRequest();
        eraseReview.open("DELETE", delete_review_url, true);
        eraseReview.onload = function() {
            fetchReviews();
        };
        eraseReview.send();
    }
}
