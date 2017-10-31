const Article = require("./models/Article.js");
import request from "request";
import cheerio from "cheerio";


function scraper(){
    app.post("/", function (err, res) {
        if(err){
            console.log("Error Code: " + err);
            return;
        }

        let results = [];
        console.log('cheerio.load', cheerio.load);
        console.log('typeof cheerio', typeof cheerio);
        const options = {
            url: 'https://politics.theonion.com/',
            headers: {
                'mode': 'no-cors'
            }
        };
        request(options, function (error, response, html) {

            if (error) {
                console.log('error loading page to scrape', error);
                return;
            }
            // Then, we load that into cheerio and save it to $ for a shorthand selector
            let ch = cheerio.load(html);
            // Now, we grab every h2 within an article tag, and do the following:
            ch("trib-semi").each(function (i, element) {

                // Save an empty result object
                let result = {};

                // Add the text and href of every link, and save them as properties of the result object
                result.title = ch(element).children("a").text();
                result.link = ch(element).children("a").attr("href");
                console.log("i "+ i + result);

                let entry = new Article(result);

                entry.save(function(err, doc) {
                    // Log any errors
                    if (err) {
                        console.log(err);
                    }
                    // Or log the doc
                    else {
                        console.log(doc);
                    }
                });


            });
        });
        console.log(results);
        return results;

    })
}

export default scraper;



