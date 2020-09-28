// // function printHello() {
// //    console.log( "Hello, World!");
// // }
// // var t = setTimeout(printHello, 10000);
// // clearTimeout(t);

// // var os = require("os");

// // // Endianness
// // console.log('endianness : ' + os.endianness());

// // // OS type
// // console.log('type : ' + os.networkInterfaces());

// // // OS platform
// // console.log('platform : ' + os.platform());

// // // Total system memory
// // console.log('total memory : ' + os.totalmem() + " bytes.");

// // // Total free memory
// // console.log('free memory : ' + os.freemem() + " bytes.");

// // var http = require('http');
// // var fs = require('fs');
// // var url = require('url');

// // // Create a server
// // http.createServer( function (request, response) {  
// //    // Parse the request containing file name
// //    var pathname = url.parse(request.url).pathname;
   
// //    // Print the name of the file for which request is made.
// //    console.log("Request for " + pathname + " received.");
   
// //    // Read the requested file content from file system
// //    fs.readFile(pathname.substr(1), function (err, data) {
// //       if (err) {
// //          console.log(err);
         
// //          // HTTP Status: 404 : NOT FOUND
// //          // Content Type: text/plain
// //          response.writeHead(404, {'Content-Type': 'text/html'});
// //       } else {	
// //          //Page found	  
// //          // HTTP Status: 200 : OK
// //          // Content Type: text/plain
// //          response.writeHead(200, {'Content-Type': 'text/html'});	
         
// //          // Write the content of the file to response body
// //          response.write(data.toString());		
// //       }
      
// //       // Send the response body 
// //       response.end();
// //    });   
// // }).listen(8081);

// // // Console will print the message
// // console.log('Server running at http://127.0.0.1:8081/');

// // var express = require('express');
// // var app = express();

// // app.get('/', function (req, res) {
// //    res.send('Hello World');
// // })

// // var server = app.listen(8081, function () {
// //    var host = server.address().address
// //    var port = server.address().port
   
// //    console.log("Example app listening at http://%s:%s", host, port)
// // })


// // var express = require('express');
// // var app = express();

// // //This responds with "Hello World" on the homepage
// // app.get('/', function (req, res) {
// //    console.log("Got a GET request for the homepage");
// //    res.send('Hello GET');
// // })

// // // This responds a POST request for the homepage
// // app.post('/', function (req, res) {
// //    console.log("Got a POST request for the homepage");
// //    res.send('Hello POST');
// // })

// // // This responds a DELETE request for the /del_user page.
// // app.delete('/del_user', function (req, res) {       
// //    console.log("Got a DELETE request for /del_user");
// //    res.send('Hello DELETE');
// // })

// // // This responds a GET request for the /list_user page.
// // app.get('/list_user', function (req, res) {
// //    console.log("Got a GET request for /list_user");
// //    res.send('Page Listing');
// // })

// // // This responds a GET request for abcd, abxcd, ab123cd, and so on
                                       
// // app.get('/ab*cd', function(req, res) {   
// //    console.log("Got a GET request for /ab*cd");
// //    res.send('Page Pattern Match');
// // })

// // var server = app.listen(8081, function () {
// //    var host = server.address().address
// //    var port = server.address().port
   
// //    console.log("Example app listening at http://%s:%s", host, port)
// // })


// // var express = require('express');
// // var app = express();

// // app.use(express.static('public'));

// // app.get('/', function (req, res) {
// //    res.send('Hello World');
// // })

// // var server = app.listen(8081, function () {
// //    var host = server.address().address
// //    var port = server.address().port

// //    console.log("Example app listening at http://%s:%s", host, port)
// // })

// var express = require('express');
// var app = express();

// app.use(express.static('public'));
// app.get('/index.htm', function (req, res) {
//    res.sendFile( __dirname + "/" + "index.htm" );
// })

// app.get('/process_get', function (req, res) {
//    // Prepare output in JSON format
//    response = {
//       first_name:req.query.first_name,
//       last_name:req.query.last_name
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
   
//    console.log("Example app listening at http://%s:%s", host, port)
// })