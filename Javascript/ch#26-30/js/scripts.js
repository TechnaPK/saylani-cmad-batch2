
var num1 = 25.62158;
var num2 = 65;
var numAsString = "125.69852";


original.innerHTML = num1;







//-----------------------------------------




button1.onclick = function () {

    var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 6) + 1;
    var finalNumber = Math.floor(improvedNum);

    result.innerHTML = finalNumber;

}




button2.onclick = function () {

    var number = prompt("Enter number");
    var number = Number( number );

    if( isNaN( number ) ){
        result.innerHTML = "User didn't enter a number";
    }else{
        result.innerHTML = "User entered a number: " + number;
    }
}




button3.onclick = function () {

    var random = Math.random();
    var converted = random.toString( 36 );
    var randomString = converted.slice( 2 );

    result.innerHTML = randomString;

}

button4.onclick = function () {

    var number = prompt("Enter number");
    var number = Number( number );
    var tax = number * 14.975 / 100;
    var roundedTax = tax.toFixed( 2 );

    console.log( tax )

    result.innerHTML = roundedTax;

}

