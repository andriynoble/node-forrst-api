
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

	"Post methods": {
		"#comments()": {
			"can fetch a post's comments": function(done) {
				Forrst.post.comments({ access_token: access_token, id: 45114 }, function(error, response) {
					response.resp.comments.should.be.an.instanceof(Array);
					done();
				});
			}
		}
	}

};
