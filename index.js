/* import modules */
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

// user input 
var url = process.argv[2] || "http://google.com";
var numberOfLinks = process.argv[3] || 10;

var links = []; /* link container */

// start crawling process

getLinks(url,function(){/* callback function */
    var writeStream = fs.createWriteStream('links.txt'); /* Final Output file */
    writeStream.write(links.join("\n"));
});

function getLinks(url,cb) {

    request({
        uri: url,
    }, function(error, response, body) {

        /* if web page content is blank */
        if (!body || body === null) {
            return cb();
        }
        var $ = cheerio.load(body);

        var aTags = $("a");

        if (!aTags.length) {
            return cb();
        }

        for (var i = 0; i < aTags.length; i++) {
            /* push href of anchor tag */
            links.push(aTags.eq(i).attr('href'));

            if (links.length >= numberOfLinks) {
                return cb();
            }
        }
        /* pick first link and run whole process on that link */
        getLinks(aTags.eq(0).attr('href'),cb);
    });
}