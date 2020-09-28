function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}


var profile =[{"Name":"Kavitha","City":"Chennai","DOB":"1990/09/09","Phone number":"9876567898"},
{"Name":"Kavin","City":"Coimbatore","DOB":"2010/10/10","Phone number":"9856768545"},
{"Name":"Seetha","City":"Coimbatore","DOB":"1998/11/11","Phone number":"9845435267"},
{"Name":"Senu","City":"Erode","DOB":"1987/12/12","Phone number":"9867543456"}]

var Malls =  [{"MallName": ["RKG mall","Fun Mall","Super Mall"],"City":"Chennai","AgeLimit":20},
 {"MallName": ["Riveraa Mall","Abacus Mall","Zee Mall"],"City":"Coimbatore","AgeLimit":21},
 {"MallName": ["ASS Mall","Marina Mall"],"City":"Erode","AgeLimit":18}];

// var Malls = [{"MallName":"RKG mall","City":"TamilNadu","AgeLimit":29},
// {"MallName":"Fun Mall","City":"TamilNadu","AgeLimit":18},
// {"MallName":"Riveraa Mall","City":"Kerala","AgeLimit":25},
// {"MallName":"Abacus Mall","City":"Kerala","AgeLimit":24},
// {"MallName":"Super Mall","City":"TamilNadu","AgeLimit":21},
// {"MallName":"Zee Mall","City":"Kerala","AgeLimit":24},
// {"MallName":"ASS Mall","City":"Karnatka","AgeLimit":20},
// {"MallName":"Marina","City":"Karnataka","AgeLimit":20}]
// //console.log(Malls)

for(pro in profile )
{
  var date = profile[pro].DOB.split("/")
  var dd = parseInt(date[2]);
  var mm  = parseInt(date[1]);
  var yy = parseInt(date[0]);
  var age = calculate_age(new Date(yy,mm,dd))
  //console.log(age)
  var name = profile[pro].Name
  //console.log(name)
  var city = profile[pro].City
  //console.log(city)
  var arr = []
  

  for (mall in Malls)
  {
    if(city == Malls[mall].City && age >= Malls[mall].AgeLimit)
    {
      arr.push(Malls[mall].MallName)
    }
  } 
//console.log(arr)
 if(arr.length > 0)
{
  console.log(name + " can visit "+arr.join(","))
}
else
{
  console.log(name+" has no malls to visit ")
} 
}
