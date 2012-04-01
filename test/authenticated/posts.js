
// use environment variables ACCESS_TOKEN to test against
var access_token = process.env.ACCESS_TOKEN;

// require the environment variables, or exit with explanation
if (!access_token) {
  console.log('Set the following environment variables for Forrst APIs that require authentication:');
  console.log('  export ACCESS_TOKEN=...');
  process.exit(1);
}

var Forrst = require("../../lib/forrst"),
    should = require("should");

module.exports = {

	"Posts methods": {
		"#show()": {
			"can fetch a post's private status": function(done) {
				Forrst.posts.show({ access_token: access_token, tiny_id: "N8F" }, function(error, response) {
					response.resp.public.should.be.false;
					done();
				});
			}
		},

		"#all()": {
			"can fetch all recent posts": function(done) {
				Forrst.posts.all(function(error, response) {
					response.resp.posts.should.be.an.instanceof(Array);
					done();
				});
			}
		},

		"#list()": {
			"can fetch all recent snaps, sorted by popularity": function(done) {
				Forrst.posts.all({ access_token: access_token, post_type: "snap", sort: "popular" }, function(error, response) {
					response.resp.posts.should.be.an.instanceof(Array);
					done();
				});
			}
		}
	}

};
