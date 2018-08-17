function tellTime(){

    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    var theSec = now.getSeconds();

    result.innerHTML += "You clicked the button @ " + theHr + ":" + theMin + ":" + theSec + "<br />";

}

function greetUser( userName ){

    alert( "Good Afternoon " + userName )

}


function calculateTax( price, taxRate ){

    var tax = price * taxRate / 100;
    return tax;

}

function calculateTotal( price ){

    if( price > 1000  ){
        var taxRate = 14;
    }else{
        var taxRate = 8;
    }

    var tax = calculateTax( price, taxRate )

    var total = price + tax;

    return total;

}


button1.onclick = function () {

    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    var theSec = now.getSeconds();

    result.innerHTML += "You clicked the button @ " + theHr + ":" + theMin + ":" + theSec + "<br />";
    
    // tellTime();

}




button2.onclick = function () {

    tellTime();

}




button3.onclick = function () {

    tellTime();

}


button4.onclick = function () {

    var username = prompt( "Enter your username" );

    greetUser( username );

}

button5.onclick = function () {

    var price = +prompt( "Enter price" );
    var taxRate = 16;

    var tax = calculateTax( price, taxRate );

    result.innerHTML = "Tax: " + tax;

}

button6.onclick = function () {

    var price = +prompt( "Enter price" );

    var total = calculateTotal( price );

    result.innerHTML = "Total: " + total;

}

