//this
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









//new
var Person=function (name,age,job) {
    this.name=name;
    this.age=age;
    this.job=job;
    this.dateOfBirth=function () {
       return 2022-this.age;

    }
    
}
var samir=new Person('amin',10,'doctor');
console.log(samir)
console.log(samir.dateOfBirth());





//inheritance
var Person=function (name,age,job) {
    this.name=name;
    this.age=age;
    this.job=job;

}
// Person.prototype.dateOfBirth=function () {
//     return 2022-this.age;
// }
// Person.prototype.address=function(){
//     return 'bangladesh'
// }
var Teacher=function(name,age,job,subject){
    Person.call(this,name,age,job);
    this.subject=subject;
}
var samir = new Teacher('samir',36,'teacher','cse');
console.log(samir.name)