
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

	"General methods": {
		"#notifications()": {
			"can fetch a user's notifications": function(done) {
				Forrst.notifications({ access_token: access_token}, function(error, response) {
					should.exist(response.resp.items);
					done();
				});
			}
		}
	}

};
