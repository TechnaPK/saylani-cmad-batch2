var city0 = "Islamabad";
var city1 = "Karachi";
var city2 = "Lahore";
var city3 = "Peshawar";
var city4 = "Queta";


var cities = [ "Islamabad", "Karachi", "Lahore", "Peshawar", "Quetta" ];

// var newCities = cities.slice( 2, 4 );

cities.splice( 2, 2, "Faisalabad", "Multan" ); 



alert(cities);

// console.log( cities )


//-----------------------------------------


// for( var i = 1; i <= 10; i++ ){
//     console.log( "2 * "+ i +" = " +  2 * i )
// }


//-----------------------------------------

for( var i = 0; i < 5; i++ ){

    console.log( "I like: " + cities[i] )

}