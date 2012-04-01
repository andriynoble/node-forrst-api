
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

	"Users methods": {
		"#info()": {
			"can fetch a user's directory status": function(done) {
				Forrst.users.info({ access_token: access_token, id: 1 }, function(error, response) {
					should.exist(response.resp.in_directory);
					done();
				});
			}
		}
	}

};
