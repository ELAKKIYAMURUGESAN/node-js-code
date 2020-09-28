var profile =[{"Name":"Kavitha","City":"Chennai","DOB":"1999/09/09","Phone number":"9876567898"},
{"Name":"Kavin","City":"Coimbatore","DOB":"2010/10/10","Phone number":"9856768545"},
{"Name":"Seetha","City":"Coimbatore","DOB":"2002/11/11","Phone number":"9845435267"},
{"Name":"Senu","City":"Erode","DOB":"1987/12/12","Phone number":"9867543456"}]

// var Malls =  [{"MallName": ["RKG mall","Fun Mall","Super Mall"],"City":"Chennai","AgeLimit":20},
//  {"MallName": ["Riveraa Mall","Abacus Mall","Zee Mall"],"City":"Coimbatore","AgeLimit":21},
//  {"MallName": ["ASS Mall","Marina Mall"],"City":"Erode","AgeLimit":18}];

var Malls =  {"Chennai":{"MallName": ["RKG mall","Fun Mall","Super Mall"],"AgeLimit":20},
               "Coimbatore":{"MallName": ["Riveraa Mall","Abacus Mall","Zee Mall"],"AgeLimit":21},
                "Erode":{"MallName": ["ASS Mall","Marina Mall"],"AgeLimit":18}};
console.log(Malls)

function calculate_age(dob) { 
  var diff = Date.now() - dob.getTime();
  var age = new Date(diff); 
  return Math.abs(age.getUTCFullYear() - 1970);
}

for(pro in profile)
{
  var date = profile[pro].DOB.split("/")
  var age = calculate_age(new Date((parseInt(date[0])) , (parseInt(date[1])) , (parseInt(date[2]))));
  var name = profile[pro].Name
  var city = profile[pro].City
  console.log(city)
  console.log(Malls[city].AgeLimit)
  
  if (age >= Malls[city].AgeLimit)
  {
    console.log(name+" You can visit "+Malls[city].MallName.join(","))
  }
  else
  {
    console.log(name +" , You are not eligible to go for any of the malls in our city" )
  }
  
}











// var profile =[{"Name":"Kavitha","City":"Chennai","DOB":"1999/09/09","Phone number":"9876567898"},
// {"Name":"Kavin","City":"Coimbatore","DOB":"2010/10/10","Phone number":"9856768545"},
// {"Name":"Seetha","City":"Coimbatore","DOB":"2002/11/11","Phone number":"9845435267"},
// {"Name":"Senu","City":"Erode","DOB":"1987/12/12","Phone number":"9867543456"}]

// // var Malls =  [{Tamilnadu: {"MallName": ["RKG mall","Fun Mall","Super Mall"],"AgeLimit":29},
// //  Kerala : {"MallName": ["Riveraa Mall","Abacus Mall","Zee Mall"],"AgeLimit":20},
// //  Karnataka : {"MallName": ["ASS Mall","Marina Mall"],"AgeLimit":23}}]

// var Malls =  [{"MallName": ["RKG mall","Fun Mall","Super Mall"],"City":"Chennai","AgeLimit":20},
//  {"MallName": ["Riveraa Mall","Abacus Mall","Zee Mall"],"City":"Coimbatore","AgeLimit":21},
//  {"MallName": ["ASS Mall","Marina Mall"],"City":"Erode","AgeLimit":18}];


// function calculate_age(dob) { 
//   var diff = Date.now() - dob.getTime();
//   var age = new Date(diff); 
//   return Math.abs(age.getUTCFullYear() - 1970);
// }

// for(pro in profile)
// {
//   var date = profile[pro].DOB.split("/")
//   var age = calculate_age(new Date((parseInt(date[0])) , (parseInt(date[1])) , (parseInt(date[2]))));
//   var name = profile[pro].Name
//   var city = profile[pro].City
//   var arr = []
//   {
  
//   // for (mall in Malls)
//   // {
//     if(city == MallsCity && age >= MallsAgeLimit)
//     {
//       arr.push(Malls[MallName])
//     }
//  }  
//   // each(input,function(key,value) {
//   //   newArr.push(value);
//   // if(city == [Malls].City && age >= [Malls].AgeLimit)
//   //   {
//   //     arr.push([Malls].MallName)
//   //   }
//  if(arr.length > 0)
// {
//   console.log(name + " can visit "+arr.join(",")+ " in " +city)
// }

// else
// {
//   console.log(name +" You are not eligible to go for any of the malls in our city")
// } 
// }

// //}