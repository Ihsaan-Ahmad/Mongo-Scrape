var request = require("request");
var cheerio = require("cheerio");

var scrape = function(cb) {
    request("https://www.cnn.com/", function(err, res, body) {
        var $ = cheerio.load(body);

        var articles = [];

        $(".cd__wrapper").each(function(i, element){
            var head = $(this).children(".cd__headline").text().trim();
            var sum = $(this).children(".cd__headline-text").text().trim();

            if(head && sum){
                var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                var dataToAdd = {
                    headline: headNeat,
                    summary: sumNeat
                };
                
                articles.push(dataToAdd);
            }
        });
        cb(articles);
    });
};

module.exports = scrape;