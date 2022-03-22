function askName(){
    var p = prompt(`what is your name?`);
    return p
  
  }
  
  function temp(a){
    var tempnum = prompt(`welcome back, ${a}, please enter the temperature you want to convert.`)
    return tempnum
  }

  var fmath = ((x * 9)/5)+32;


  
  function ctof(x){
    fmath;
    return fmath;



  }

  var cmath = (((y - 32) * 5)/9);

  
  function ftoc(y){
    cmath;
    return cmath; 
  }



  function choice(){
    var u = prompt(`do you want to find a c temp or f temp?`)

    if (u = "f"){
      var f = ftoc;
      alert(`${tempnumb} C is ${f} F.`);
      return f;
    }

    else if(u = "c"){
      var c = ctof;
      alert(`${tempnum} F is ${c} C.`);
      return c;
    }
    
    else{
      alert(`please type either "f" or "c"`)
    }
  }
  


  var temperature = temp(askName());

  var choose = choice();


  var c = ftoc();


  
  
  
  
  
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