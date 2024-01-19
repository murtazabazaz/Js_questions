//this is a constructor function and solves the problem of creating multiple objects..
function Employee(name, age, hasPermit, languages){
    this.name = name;
    this.age = age;
    this.hasPermit = hasPermit;
    this.languages = languages;

    this.startWork = function(){
        console.log(name+" started working now.")
    }
}
var employee1 = new Employee("murtaza", 16, true, ["english", "urdu", "hindi"]);
employee1.startWork();
