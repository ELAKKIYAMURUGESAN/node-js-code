var http = require('http');
var fs = require('fs');


// http.createServer(function(request, response) {
//     response.writeHead(200, {
//         'Content-Type': 'text/json'  
//     });

    // fs.readFile('profile.json', function(err, content){
    //     response.write(content);   
    // });
    // fs.readFile('mall.json', function(err, content){
    //     response.write(content);
    //     response.end();
    // });
     
    var mall = []; 
    var arr =[];
    
    function calculate_age(dob) { 
    var diff = Date.now() - dob.getTime();
    var age = new Date(diff); 
    return Math.abs(age.getUTCFullYear() - 1970);
  }
      
        fs.readFile('mall.json', (err, data) => {
            if (err) throw err;
            mall = JSON.parse(data);
            //console.log(mall);
            //console.log(profile);
            //console.log(data);

        });
        fs.readFile('profile.json', (err, data) => {
            if (err) throw err;
            //console.log(data);
            let profile = JSON.parse(data);
            for(pro in profile)
{
  var date = profile[pro].DOB.split("/")
  var age = calculate_age(new Date((parseInt(date[0])) , (parseInt(date[1])) , (parseInt(date[2]))));
  var name = profile[pro].Name
  var city = profile[pro].City
  //console.log(city)
  //console.log(Malls[city].AgeLimit)
  
  if (age >= mall[city].AgeLimit)
  {
    console.log(name+" You can visit "+mall[city].MallName.join(","))
  }
  else
  {
    console.log(name +" , You are not eligible to go for any of the malls in our city" )
  }
  
}
            
            //console.log(mall);
            // console.log(profile);
        });
         
        
// }).listen(8081);

// console.log('Server running at http://127.0.0.1:8081/');
// var fs = require('fs');

// fs.readFile('profile.json', (err, data) => {
//     if (err) throw err;
//     let profile = JSON.parse(data);
//     console.log(profile);
// });

// fs.readFile('mall.json', (err, data) => {
//     if (err) throw err;
//     let mall = JSON.parse(data);
//     console.log(mall);
// });
  
