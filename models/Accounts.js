"use strict";
class Account {
constructor(accountId, username, firstName, lastName, emailAddress, contactNumber, password, address1, address2, gender, profilePicture) {
this.accountId = accountId;
this.username = username;
this.firstName = firstName;
this.emailAddress = emailAddress;
this.lastName = lastName;
this.contactNumber = contactNumber;
this.password = password;
this.address1 = address1;
this.address2 = address2;
this.gender = gender;
this.profilePicture = profilePicture;
}
setAccountId(accountId) {
        this.accountId = accountId;
    }
setUsername(username){
        this.username = username;
    }
setFirstName(firstName) {
        this.firstName = firstName;
    }
setEmailAddress(emailAddress) {
        this.emailAddress = emailAddress;
    }
setContactNumber(contactNumber) {
        this.contactNumber = contactNumber;
    }
setLastName(lastName) {
        this.lastName = lastName;
    }
setPassword(password) {
        this.password = password;
    }
setAddress1(address1) {
        this.address1 = address1;
    }
setAddress2(address2) {
        this.address2 = address2;
    }
setGender(gender) {
        this.gender = gender;
    }
setProfilePicture(profilePicture){
        this.profilePicture = profilePicture;
    }
getAccountId() {
        return this.accountId;
    }
getUsername(){
        return this.username;
    }
getFirstName() {
        return this.firstName;
    }
getEmailAddress() {
        return this.emailAddress;
    }
getContactNumber() {
        return this.contactNumber;
    }
getLastName() {
        return this.lastName;
    }
getPassword() {
        return this.password;
    }
getAddress1() {
        return this.address1;
    }
getAddress2() {
        return this.address2;
    }
getGender() {
        return this.gender;
    }
getProfilePicture(){
        return this.profilePicture;
    }
}
module.exports = Account;