
var Forrst = require("../lib/forrst"),
    should = require("should");

module.exports = {

	"Users methods": {
		"#auth": {
			"fails with incorrect username/password": function(done) {
				Forrst.users.auth({ email_or_username: "", password: "" }, function(error, response){
					should.exist(error);
					done();
				});
			}
		},

		"#info()": {
			"can fetch a user's post count": function(done) {
				Forrst.users.info({ id: 1 }, function(error, response) {
					response.resp.posts.should.be.above(-1);
					done();
				});
			}
		}
	}

};
