function askName(){
    var p = prompt(`what is your name?`);
    return p 
}

function temp(a){
  var tempnum = prompt(`welcome back, ${a}, please enter the temperature you want to convert.`)
  return tempnum
}

function ctof(x){ // f
  var fmath = ((x * 9)/5)+32;
  return fmath;
}

function ftoc(y){ // c
  var cmath = (((y - 32) * 5)/9);
  return cmath; 
}

function choice(){
  var n = askName()
  var t = temp(n)
  var u = prompt(`do you want to find a c (f to c)  temp or f (c to f) temp?`)

  if (u == "f"){
    var f = ctof(t);
    alert(`${t} C is ${f} F.`);
    return f;
  }

  else if(u == "c"){
    var c = ftoc(t);
    alert(`${t} F is ${c} C.`);
    return c;
  }
  
  else{
    alert(`please type either "f" or "c"`)
  }

  
}

choice()
var q = prompt("Do you want to do another conversion? If yes, press 1.")
if (q == "1") {
  choice() // recursive function
}




  
  
  
  
  
  // function unit(){
  //   var u = prompt(`Type "c" to convert from f to c and "f" to convert from c to f.`)
  
  //   if (u == `c`){
  //     ftoc();
  
  
  //   }
    
  //   else if(u == `f`){
  //     ctof();
  //   }
  
  //   else{
  //     alert(`Please enter either "c" or "f"`)
  //   }