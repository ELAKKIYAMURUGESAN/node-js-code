var express = require("express"); 
var app = express(); 
var reqAPI = require("request"); 
const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 
const moment = require('moment'); 
const today = moment(); 
app.get("/", function (request, response) { 
    response.send("Date: " + today.format('DD/MM/YYYY')) }); 
    app.post("/testDate", function (request, response) { 
        console.log("request", request.body); 
        let options = { url: "https://jsonplaceholder.typicode.com/posts", 
        method: "GET", 
        headers: { "content-type": "application/json" }, 
        body: null }
        getData(options).then(function (data) { response.send(data); 
        }) 
    }); 
    function getData(options) { 
        return new Promise(function (resolve, reject) { 
            reqAPI(options, function (error, response, body) { 
                console.log(typeof JSON.parse(body)); 
                console.log(JSON.parse(body).splice(0, 9)); 
                var a = JSON.parse(body).splice(0, 9); 
                var b = JSON.parse(body).splice(10, 100); 
                var c = a.concat(b); 
                console.log(c); 
                data = c; 
                resolve(data);
            
                //         JSON.parse(body).forEach(element => {
                    //             if(element.id == 23)//             {
                        //             console.log("the result is", element);
                        //             data= element;
                        //             resolve(data);
                        //             // console.log("element", data);
                        //             }// });});});}
                        //  var date = new Date();
                        // var a=500;// var b=100;
                        // var add = a+b;// var sub = a-b;// var mul = a*b;// var div = a/b;
                        // var date = today.format('DD/MM/YYYY');
                        // var valueFromUser = request.body.d;
                        // console.log("Converted date", new Date(valueFromUser).toUTCString);
                        // var d = new Date(valueFromUser);// var e = d.toDateString();
                        // var c = d.toUTCString();// console.log(c);// console.log(d);
                        // console.log(e);// console.log("The results are",request.body.d);
                        // console.log("date ",request.body.date);// var data={//     
                        //  now_utc : request.body.date.UTC(date.getUTCDate())//     
                        // addResult : add,//     // subResult : sub,//     // mulResult : mul,//     
                        // divResult : div,//     // dateIs: date,//     utcResult:c//     
                        // deptName : request.body.dept,//     // todayDate : request.body.date.tdy// }
                        // })app.listen("8080",function(){console.log("server is listening to port 8080");
            