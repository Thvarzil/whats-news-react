const request = require("request");
const cheerio = require("cheerio");


function scraper(){
    let results = [];
    request("http://www.sltrib.com/news", function (error, response, html) {
        console.log(html);

        // Then, we load that into cheerio and save it to $ for a shorthand selector
        let ch = cheerio.load(html);
        // Now, we grab every h2 within an article tag, and do the following:
        ch("trib-semi").each(function (i, element) {

            // Save an empty result object
            let result = {};

            // Add the text and href of every link, and save them as properties of the result object
            result.title = ch(this).children("a").text();
            result.link = ch(this).children("a").attr("href");

            results.push(result);


        });
    });

    return results;
};


export default scraper();
