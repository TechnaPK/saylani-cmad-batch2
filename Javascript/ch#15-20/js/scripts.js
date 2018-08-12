var city0 = "Islamabad";
var city1 = "Karachi";
var city2 = "Lahore";
var city3 = "Peshawar";
var city4 = "Queta";

var cities = [ "Islamabad", "Karachi", "Lahore", "Peshawar", "Queta" ];

var index = 1;

console.log( cities )
console.log( cities[ index ] )


// for( var index = 0; index < 5; index++ ){

//     console.log( "I love: " + cities[ index ] )

// }

//-----------------------------------------

button1.onclick = function(){

    alert( "Hello everyone!" );

}

button2.onclick = function(){

    var name = prompt( "what is your name?" );

    alert( name );

}

button3.onclick = function(){

    var city = prompt( "Enter your city?" );

    cities.push( city )

    alert( city + " has been added into cities array." )

}

button4.onclick = function(){

    result.innerHTML = "";

    for( var index = 0; index < cities.length; index++ ){

        result.innerHTML += "I love: " + cities[ index ] + "<br>";

    }

}

button5.onclick = function(){

    var number = +prompt( "Enter a number" );

    for( var index = 1; index <= 10; index++ ){

        console.log( number + " * " + index + " = " +  number * index )

    }

}


//-----------------------------------------


//------------------------------------------


// var names = ["Umar","Irfan","Naveed", "Shahzad"];
// var castes = ["Shehikh", "Jutt", "Malik"];

// for( var i = 0; i < names.length; i++ ){

//     for(var j = 0; j < castes.length; j++ ){

//         console.log( names[i] + ' ' + castes[j ] )

//     }

// }