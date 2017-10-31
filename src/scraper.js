import request from "request";
import cheerio from "cheerio";


function scraper(){
    let results = [];
        console.log('cheerio.load', cheerio.load);
        console.log('typeof cheerio', typeof cheerio);
    var options = {
        url: 'https://www.sltrib.com/news/',
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

            results.push(result);


        });
    });
    console.log(results);
    return results;
};


export default scraper;
