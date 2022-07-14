function registerMe(){

    var registerUser = new XMLHttpRequest();

    registerUser.open("POST","/accounts",true);
    registerUser.setRequestHeader("Content-Type","application/json");
    registerUser.onload = function(){

        $('#registerModal').modal('hide');
        $('#successModal').modal('show');
        $('#failModal').modal('show');
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
    registerUser.send(JSON.stringify(payload));

}