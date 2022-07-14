function fetchAccounts() {
    var request = new XMLHttpRequest();

    request.open('GET', account_url, true);

    request.onload = function() {
    account_array = JSON.parse(request.responseText);
    console.log(account_array);
    };

    request.send();
}


function updateMe(){

    var updateUser = new XMLHttpRequest();

    updateUser.open("PUT","/accounts/:id",true);
    updateUser.setRequestHeader("Content-Type","application/json");
    updateUser.onload = function(){

    }

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var contactNumber = document.getElementById("contactNumber").value;
    var address1 = document.getElementById("address1").value;
    var address2 = document.getElementById("address2").value;
    var gender = document.getElementById("gender").value;
    var payload = {username:username, password:password, firstName:firstName, lastName:lastName, emailAddress:emailAddress, contactNumber:contactNumber, address1:address1, address2:address2, gender:gender}
    updateUser.send(JSON.stringify(payload));

}