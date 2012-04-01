
var Forrst = require("../lib/forrst"),
    should = require("should");

module.exports = {

	"User methods": {
		"#posts()": {
			"can fetch a user's public posts": function(done) {
				Forrst.user.posts({ id: 1 }, function(error, response) {
					response.resp.posts.should.be.an.instanceof(Array);
					done();
				});
			}
		}
	}

};
