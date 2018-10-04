var plan1 = {

    name: "Basic",
    price: 3.99,
    pages: 10,
    calcAnnual: function(){
        return this.price * 12;
    }

};

var plan2 = {

    name: "Professional",
    price: 5.99,
    pages: 50,
    calcAnnual: function(){
        return this.price * 12;
    }

};

var plan3 = {

    name: "Ultimate",
    price: 9.99,
    pages: 500,
    calcAnnual: function(){
        return this.price * 12;
    }

};