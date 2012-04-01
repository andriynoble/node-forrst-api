
var Forrst = require("../lib/forrst"),
    should = require("should");

module.exports = {

	"Posts methods": {
		"#show()": {
			"can fetch a post's public status": function(done) {
				Forrst.posts.show({ id: 45114 }, function(error, response) {
					response.resp.public.should.be.true;
					done();
				});
			}
		},

		"#all()": {
			"can fetch recent public posts": function(done) {
				Forrst.posts.all(function(error, response) {
					response.resp.posts.should.be.an.instanceof(Array);
					done();
				});
			}
		},

		"#list()": {
			"can fetch recent public snaps, sorted by popularity": function(done) {
				Forrst.posts.all({ post_type: "snap", sort: "popular" }, function(error, response) {
					response.resp.posts.should.be.an.instanceof(Array);
					done();
				});
			}
		}
	}

};
