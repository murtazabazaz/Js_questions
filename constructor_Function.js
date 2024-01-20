//this is a constructor function and solves the problem of creating multiple objects..
function Employee(name, age, hasPermit, languages){
    this.name = name;
    this.age = age;
    this.hasPermit = hasPermit;
    this.languages = languages;

    this.startWork = function(){
        console.log(name+" started working now. He knows " + languages+".")
    }
}
var employee1 = new Employee("murtaza", 16, true, ["english", "urdu", "hindi"]); 
var employee2 = new Employee("muied", 16, true, ["english", "urdu"]); 
var employee3 = new Employee("kaleem", 13, false, ["english", "hindi"]); 
employee1.startWork();
employee2.startWork();
employee3.startWork();

