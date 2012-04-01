
# Node.js Forrst API

A simple wrapper for the Forrst API for use with Node.js.

## Installation

    $ npm install forrst-api

## Quick Start

The quickest way to get started with forrst-api is to simply require the library:

	var Forrst = require("forrst-api");

You can now use any of the methods outlined in the following section through the Forrst object, as such:

	Forrst.users.auth({ email_or_username: username, password: password }, function(error, response) {
		if (error) {
			throw new Error(error);
		}

		console.log("Authenticated successfully! Here's your unique access token " + response.resp.token);
	});

## Methods

This library is quite simply a wrapper for all HTTPS requests made to the Forrst API.  This means that adding support for new API methods would be trivial.  Most importantly, it also means that __all public Forrst API methods are currently supported__. The following methods can be called on the object that is returned from `require("forrst-api")`, or in our example, `Forrst`:

 * [stats](http://forrst.com/api#m-stats)
 * [notifications](http://forrst.com/api#m-notifications)
 * [users.auth](http://forrst.com/api#m-users-auth)
 * [users.info](http://forrst.com/api#m-users-info)
 * [user.posts](http://forrst.com/api#m-user-posts)
 * [posts.show](http://forrst.com/api#m-posts-show)
 * [posts.all](http://forrst.com/api#m-posts-all)
 * [posts.list](http://forrst.com/api#m-posts-list)
 * [post.comments](http://forrst.com/api#m-post-comments)

The first parameter of these methods is an object containing the parameters for the actual Forrst API request. For API methods that don't require any parameters, this parameter can be excluded.  For example:

	Forrst.posts.show({ id: 45114 }, function(error, response) {
		// do something with response
	});

and

	Forrst.posts.all(function(error, response) {
		// do something with response
	});

## License

([The ☺ Licence](http://licence.visualidiot.com/))

By attaching this document to the given files (the “work”), you, the licensee, are hereby granted free usage in both personal and commerical environments, without any obligation of attribution or payment (monetary or otherwise). The licensee is free to use, copy, modify, publish, distribute, sublicence, and/or merchandise the work, subject to the licensee inflecting a positive message unto someone. This includes (but is not limited to): smiling, being nice, saying “thank you”, assisting other persons, or any similar actions percolating the given concept.

The above copyright notice serves as a permissions notice also, and may optionally be included in copies or portions of the work.

The work is provided “as is”, without warranty or support, express or implied. The author(s) are not liable for any damages, misuse, or other claim, whether from or as a consequence of usage of the given work.
