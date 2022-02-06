var myObj={
    name:"tufayel",
    age:26,
    msg:{
      name:"tofa",
      value:function(){
        console.log(this);
      }
    }
    
  };
  myObj.msg.value();
  
  var rahim ={
    name:`abdur rahim`,
    dob:2001,
    age:function(currentYear){
      console.log(this.name +` `+`is` +` `+ (currentYear-this.dob) +` ` +`years old`)
    }
  }
  var karim ={
    name:`abdur karim`,
    dob:1995,
    
    }
  
  rahim.age.call(karim,2022);
  
  
  var rahim={
    name:`rahim mulla`,
    dob:1997,
    age:function(currentYear){
      console.log(this.name+` `+`is`+` `+(currentYear-this.dob)+` `+`years old`)
    }
  }
  rahim.age(2022);