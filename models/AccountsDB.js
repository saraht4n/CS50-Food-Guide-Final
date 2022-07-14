"use strict";

var db = require('../db-connections');
class AccountsDB{
    getAllAccounts(callback){
        var sql = "SELECT * FROM restaurant.account";
        db.query(sql, callback);
    }

    addAccounts(account, callback){
        var sql = "INSERT INTO account (accountId, username, firstName, lastName, emailAddress, contactNumber, password, address1, address2, gender, profilePicture) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [account.getAccountId(), account.getUsername(), account.getFirstName(), account.getLastName(), account.getEmailAddress(), account.getContactNumber(), account.getPassword(), account.getAddress1(), account.getAddress2(), account.getGender(), account.getProfilePicture()], callback);
    }

    updateAccount(account, callback){
        var sql = "UPDATE account SET username = ?, firstName = ?, lastName = ?, emailAddress = ?, contactNumber = ?, password = ?, address1 = ?, address2 = ?, gender = ?, profilePicture = ? WHERE accountId = ?";
        return db.query(sql, [account.getUsername(), account.getFirstName(), account.getLastName(), account.getEmailAddress(), account.getContactNumber(), account.getPassword(), account.getAddress1(), account.getAddress2(), account.getGender(), account.getProfilePicture(), account.getAccountId()], callback);
    }

    deleteAccount(account, callback){
        var sql = "DELETE FROM account WHERE accountId = ?";
        return db.query(sql, [account],callback);
    }

    accountLogIn(username, callback){
        var sql = "SELECT password FROM account WHERE username = ?";
        return db.query(sql, [username], callback);
    }

}

module.exports = AccountsDB;