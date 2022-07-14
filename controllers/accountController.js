"use strict";
const AccountsDB = require('../models/AccountsDB');
const Account = require('../models/Accounts');
const bcrypt = require('bcrypt');

var secret = "somesecretkey";
var jwt = require('jsonwebtoken');
var accountsDB = new AccountsDB();

function getAllAccounts(request, respond){
    accountsDB.getAllAccounts(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addAccounts(request, respond) {
    var username = request.body.username;
    var password = request.body.password;
    password = bcrypt.hashSync(password,10);
    var account = new Account(request.body.accountId, username, request.body.firstName, request.body.lastName, request.body.emailAddress, request.body.contactNumber, password, request.body.address1, request.body.address2, request.body.gender, request.body.profilePicture);
    accountsDB.addAccounts(account, function (error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function updateAccount(request, respond) {
    var token = request.body.token;
    var account = new Account(parseInt(request.params.id), request.body.username, request.body.firstName, request.body.lastName, request.body.emailAddress, request.body.contactNumber, request.body.password, request.body.address1, request.body.address2, request.body.gender, request.body.profilePicture);
    try {
        var decoded = jwt.verify(token,secret);
        accountsDB.updateAccount(account, function (error, result){
            if(error){
                respond.json(error);
            }
            else{
                respond.json(result);
            }
        });
    }
    catch (error) {
        respond.json({result:"Invalid token"});
    }
}

function deleteAccount(request, respond){
    var account = request.params.id;
    accountsDB.deleteAccount(account, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function accountLogIn(request, respond) {
    var username = request.body.username;
    var password = request.body.password;
    var jwt = require('jsonwebtoken');
    accountsDB.accountLogIn(username, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            const hash = result[0].password;
            var flag = bcrypt.compareSync(password,hash);
            if(flag) {
                var token = jwt.sign(username, secret)
                respond.json({result:token});
            }
            else {
                respond.json({result:"invalid"});
            }
        }
    });
}

module.exports = {getAllAccounts, addAccounts, updateAccount, deleteAccount, accountLogIn};