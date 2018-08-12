var message = "Good day ";
var name = "Guest";
var banger = "!";



// alert( "Good day " + name + "!" );
alert( message + name + banger );





// ----------------------------




// name = prompt( "Your name?" );

// alert( message + name + banger );

// if( name == "Umar" ){
//     alert( "Good day " + name + "!" );
// }




// ----------------------------




// var num1 = 15;
// var num2 = 15;

// if( num1 > num2 ){
//     alert( "1st number is greater than 2nd" )
// }





// ----------------------------



var age = prompt( "Your age?" );
var weight = prompt( "Your Weight?" );


if( age >= 18 && weight < 70 ){

    alert( "You're a smart man." );
    
}else if ( age >= 18 && weight >= 70 ){

    alert( "You're a fat guy." );

}else{

    alert( "You're a baby" );

}