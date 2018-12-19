
var request = require('request');

request.get('https://images-api.nasa.gov/search?q=moon&media_type=image', function (error, response, body) {
   console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //  console.log(typeof(body))
body= JSON.parse(body)
  console.log(body.collection.items[0].links[0].href); // Print the HTML for the Google homepage.
});
