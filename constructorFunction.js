//new
// var Person=function (name,age,job) {
//     this.name=name;
//     this.age=age;
//     this.job=job;
//     this.dateOfBirth=function () {
//        return 2022-this.age;

//     }
//     
// }
// var samir=new Person('amin',10,'doctor');
// console.log(samir)
// console.log(samir.dateOfBirth());

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
    Person.call(this,name,age,job)
    this.subject=subject;
}

const samir = new Teacher('samir',35,'teacher',"cse");
console.log(samir.subject);