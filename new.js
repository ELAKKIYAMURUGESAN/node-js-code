// var http = require("http");
// var express = require('express');
// http.createServer(function (request, response) {
//     response.writeHead(200, {'Content-Type': 'text/plain'});
//     response.end('Hello World\n');
//     //console.log('Server running at http://127.0.0.1:70/');
//  }).listen(70);
 
//  console.log('Server running at http://127.0.0.1:70/');
 

var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listner1 = function listner1() {
   console.log('listner1 executed.');
}

// listener #2
var listner2 = function listner2() {
   console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event 
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event 
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");

// buf = new Buffer(26);
// for (var i = 0 ; i < 26 ; i++) {
//   buf[i] = i + 97;
// }
// console.log( buf.toString('ascii'));       
// console.log( buf.toString('ascii',1,5));   
// //console.log( buf.toString(0,5));    
// console.log( buf.toString('ascii',0,5));      

////buffer

// var nodeBase64 = require('nodejs-base64-converter');
// console.log(nodeBase64.encode("Elakkiya")); 
// console.log(nodeBase64.decode("RWxha2tpeWE=")); 

// var len = Buffer.byteLength('abc')
// console.log(len);

// var buff1 = Buffer.from('a');
// var buff2 = Buffer.from('b');
// var buff3 = Buffer.from('c');
// //var arr = [buff1, buff2, buff3];
// var buf = Buffer.concat([buff1, buff2, buff3]);
// console.log(buf);

// var buf1 = Buffer.from('abc');
// var buf2 = Buffer.from('abcd');
// console.log(Buffer.compare(buf1, buf2));
//console.log(x);


// var buf = new Buffer.alloc(5);
// var json = buf.toJSON(buf);

// console.log(json);
// //////

// var chunk = require('chunk')
// console.log(chunk([1,2,3,4,5,6,7]))

// var fs = require("fs");
// var data = '';

// // Create a readable stream
// var readerStream = fs.createReadStream('input1.txt');

// // Set the encoding to be utf8. 
// readerStream.setEncoding('UTF8');

// // Handle stream events --> data, end, and error
// readerStream.on('data', function(chunk) {
//    data += chunk;
// });

// readerStream.on('end',function() {
//    console.log(data);
// });

// readerStream.on('error', function(err) {
//    console.log(err.stack);
// });

// console.log("Program Ended");


// var fs = require("fs");
// var data = 'Hi, how are you';

// // Create a writable stream
// var writerStream = fs.createWriteStream('input.txt');

// // Write the data to stream with encoding to be utf8
// writerStream.write(data,'UTF8');
// // Mark the end of file
// writerStream.end();
// // Handle stream events --> finish, and error
// writerStream.on('finish', function() {
//    console.log("Write completed.");
// });
// writerStream.on('error', function(err) {
//    console.log(err.stack);
// });
// console.log("Program Ended");

// var fs = require("fs");
// // Create a readable stream
// var readerStream = fs.createReadStream('input.txt');
// // Create a writable stream
// var writerStream = fs.createWriteStream('output1.txt');
// // Pipe the read and write operations
// // read input.txt and write data to output.txt
// readerStream.pipe(writerStream);
// console.log("Program Ended");

// var fs = require("fs");
// var zlib = require('zlib');

// // Compress the file input.txt to input.txt.gz
// fs.createReadStream('input.txt')
//    .pipe(zlib.createGzip())
//    .pipe(fs.createWriteStream('input.txt.gz'));
  
// console.log("File Compressed.");


// var fs = require("fs");
// var zlib = require('zlib');

// // Decompress the file input.txt.gz to input.txt
// fs.createReadStream('input.txt.gz')
//    .pipe(zlib.createGunzip())
//    .pipe(fs.createWriteStream('input.txt'));
  
// console.log("File Decompressed.");


// var fs = require("fs");
// var data = '';

// // Create a readable stream
// var readerStream = fs.createReadStream('input.txt');

// // Set the encoding to be utf8. 
// readerStream.setEncoding('UTF8');

// // Handle stream events --> data, end, and error
// readerStream.on('data', function(chunk) {
//    data += chunk;
// });

// readerStream.on('end',function() {
//    console.log(data);
// });

// readerStream.on('error', function(err) {
//    console.log(err.stack);
// });

// console.log("Program Ended");



// var fs = require("fs");

// //Asynchronous read
// fs.readFile('input.txt', function (err, data) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Asynchronous read: " + data.toString());
// });

// // Synchronous read
// //var data = fs.readFileSync('input.txt');
// fs.readFile('input.txt', function (err, data) {
//     if (err) {
//        return console.error(err);
//     }
// console.log("Synchronous read: " + data.toString());
// });
// console.log("Program Ended");



// var fs = require("fs");

// // Asynchronous - Opening File
// console.log("Going to open file!");
// fs.open('input.txt', 'w+', function(err, fd) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("File opened successfully!");     
// });