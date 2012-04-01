
var Forrst = require("../lib/forrst"),
    should = require("should");

module.exports = {

	"General methods": {
		"#stats()": {
			"can fetch the number of calls made": function(done) {
				Forrst.stats(function(error, response) {
					response.resp.calls_made.should.be.above(-1);
					done();
				});
			}
		}
	}

};
