
// Require the API wrapper. If you installed through npm this would be:
// var Forrst = require("forrst-api")
var Forrst = require("../lib/forrst");

var username = "myUsername",
    password = "myPassword";

// Make a request using the wrapper and log part of the result
Forrst.users.auth({ email_or_username: username, password: password }, function(error, response) {
	if (error) {
		throw new Error(error);
	}

	console.log("Authenticated successful! Here's your unique access token " + response.resp.token);
});
