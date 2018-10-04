function Plan(name, price, pages) {

    this.name = name;
    this.price = price;
    this.pages = pages;

    //Not a good way to define shared methods
    // this.calcAnnual = function(){
    //     return this.price * 12;
    // }

}

//Good way to define shared methods
Plan.prototype.calcAnnual = function () {
    return this.price * 12;
}

var plan1 = new Plan("Basic", 3.99, 10)
var plan2 = new Plan("Professional", 5.99, 50)
var plan3 = new Plan("Ultimate", 9.99, 500)



//List of Properties
// var listOfProperties = [];
// for (var prop in plan1) {
//     listOfProperties.push(prop);
// }

// console.log( listOfProperties )