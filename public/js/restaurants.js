function getRestaurantData() {
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true); 
    request.onload = function () {     
        restaurant_array = JSON.parse(request.responseText);
        fetchReviews();
        fetchAccounts();
        console.log(restaurant_array)       	
        displayRestaurants();
    };
 
    request.send();
}

function displayRestaurants() {
    var table = document.getElementById("restaurantsTable");
    var restaurantCount = 0;
    var message = "";

    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
            var thumbnail = restaurant_array[count].thumbnail;
            var name = restaurant_array[count].restaurantName;
            var cell = '<div class="card col-md-3" ><img class="card-img-top" style="height: 250px;" src="' + thumbnail + '" alt="Card image cap">\
                        <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#reviewModal" item="' + count + '" onClick="showRestaurantReviews(this)"></i>\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#restaurantModal" class="card-title" item="' + count + '" onClick="showRestaurantDetails(this)">' + name + '</h5></div>\
</div>'
            table.insertAdjacentHTML('beforeend', cell);
            restaurantCount++;
        
    }

    message = restaurantCount + " Restaurants Shown";
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
}

function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("restaurant-name").textContent = restaurant_array[item].restaurantName;
    document.getElementById("restaurantLogo").src = restaurant_array[item].thumbnail;
    document.getElementById("food-type").textContent = restaurant_array[item].restaurantType;
    document.getElementById("location").textContent = restaurant_array[item].location;
    document.getElementById("opening-closing-times").textContent = restaurant_array[item].openingClosingHours;
    document.getElementById("history-description").textContent = restaurant_array[item].historyDescription;
    document.getElementById("original-website").textContent = restaurant_array[item].originalWebsite;
}
