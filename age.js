// function calculate_age(dob) { 
//     var diff_ms = Date.now() - dob.getTime();
//     var age_dt = new Date(diff_ms); 
  
//     return Math.abs(age_dt.getUTCFullYear() - 1970);
// }
exports.myDateTime = function () {
    return Date();
  };

// for(pro in profile )
// {
//   var date = profile[pro].DOB.split("/")
//   var dd = parseInt(date[2]);
//   var mm  = parseInt(date[1]);
//   var yy = parseInt(date[0]);
//   var age = calculate_age(new Date(yy,mm,dd))
//   //console.log(age)
//   var name = profile[pro].Name
//   //console.log(name)
//   var city = profile[pro].City
//   //console.log(city)
//   var arr = []
  

//   for (mall in Malls)
//   {
//     if(city == Malls[mall].City && age >= Malls[mall].AgeLimit)
//     {
//       arr.push(Malls[mall].MallName)
//     }
//   } 
// //console.log(arr)
//  if(arr.length > 0)
// {
//   console.log(name + " can visit "+arr.join(","))
// }
// else
// {
//   console.log(name+" has no malls to visit ")
// } 
// }
