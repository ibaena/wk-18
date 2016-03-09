var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request('https://www.reddit.com/r/webdev', function (error, response, body) {
    var results = [];
  if (!error && response.statusCode == 200) {
      $ = cheerio.load(body);

        $('p.title').each(function(i, elem){
            results.push({
                title: $(this).text(),
                link: "http://www.reddit.com" + $(this).children().attr("href")
            });
        });
    }
    fs.writeFile('output.json', JSON.stringify(results, null, 4), function(err){

    console.log('File successfully written! - Check your project directory for the output.json file');

});

    //console.log(results);
});
