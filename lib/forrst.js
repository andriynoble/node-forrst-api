
var querystring = require("querystring");

var defaults = {
	protocol: require("https"),
	host: "forrst.com",
	endpoint: "/api/v2"
};

var forrstRequest = function(method, path, data, callback) {

	// We don't necessarily send data or params
	if (data instanceof Function) {
		callback = data;
		data = null;
	}

	var body = null,
	    options = {
	    	"host": defaults.host,
	    	"path": defaults.endpoint + path,
	    	"method": method,
	    	"headers" : {
	    		"User-Agent": "Forrst/0.1.0 (Node.js " + process.version + ")"
	    	}
	    };

	switch(method) {
		case "GET":
			if (data) {
				options.path += "?" + querystring.stringify(data);
			}
			break;
		case "POST": // Set a Content-Type and Content-Length header if we are sending data
		case "PUT":
			body = querystring.stringify(data);
			options.headers["Content-Type"] = "application/x-www-form-urlencoded";
			options.headers["Content-Length"] = body.length;
			break;
		default:
			options.headers["Content-Length"] = 0;
			break;
	}

	var request = defaults.protocol.request(options, function(response) {

		if (!callback) {
			return;
		}

		if (response.statusCode < 200 || response.statusCode >= 300) {
			var error = new Error('HTTP error ' + response.statusCode);
			error.arguments = arguments;
			error.type = response.statusCode;
			error.options = options;
			error.body = data;
			return callback(error);
		}

		var response_data = "";
		response.setEncoding("utf8");

		response.on("data", function(chunk) {
			response_data += chunk;
		});

		response.on("end", function() {
			try {
				callback(null, (/application\/json/.test(response.headers["content-type"])) ? JSON.parse(response_data) : response_data);
			} catch (ex) {
				callback(ex);
			}

		});

		response.on("close", function(error) {
			callback(error);
		});
	});

	body && request.write(body);
	request.end();

	request.on("error", function(error) {
		callback && callback(error);
	});
};

module.exports = {
	stats: forrstRequest.bind(null, "GET", "/stats/"),
	notifications: forrstRequest.bind(null, "GET", "/notifications/"),
	users: {
		auth: forrstRequest.bind(null, "POST", "/users/auth/"),
		info: forrstRequest.bind(null, "GET", "/users/info/")
	},
	user: {
		posts: forrstRequest.bind(null, "GET", "/user/posts/")
	},
	posts: {
		show: forrstRequest.bind(null, "GET", "/posts/show/"),
		all: forrstRequest.bind(null, "GET", "/posts/all/"),
		list: forrstRequest.bind(null, "GET", "/posts/list/")
	},
	post: {
		comments: forrstRequest.bind(null, "GET", "/post/comments/")
	}
};
