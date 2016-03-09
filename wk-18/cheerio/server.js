var bodyParser = require('body-parser');
var cheerio = require('cheerio');
var request = require('request');
request('http://www.reddit.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); // Show the HTML for the Google homepage.
  }
});
