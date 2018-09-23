var users = [ 'Umar', 'Ahmad' ];

generateUsersList.onclick = function(){

    leftPane.innerHTML = "We've Following users available in our list: <br>";
    
    for( var i = 0; i < users.length; i++ ){

        leftPane.innerHTML += i + ") " + users[i]  + "<br>";

    }

}

addUser.onclick = function(){

    var user = prompt( "Please enter user name" );

    if( user != null ){

        var userFound = false;
        for( var i = 0; i < users.length; i++ ){

            if( users[i] === user ){

                userFound = true;
                break;
            }                
    
        }

        if( userFound === true ){
            
            leftPane.innerHTML = "<p class='error'>" + user + " is already available in users list" + "</p>";
            
        }else{
            users.push( user );
            leftPane.innerHTML = "<p class='success'>" + user + " is successfully added into users list" + "</p>";

        }


    }else{

        leftPane.innerHTML = "<p class='error'>" + "Enter a username to add into list" + "</p>";

    }

}

deleteUser.onclick = function(){

    var user = prompt( "Please enter user name to be deleted." );

    if( user != null ){

        var userFound = false;
        for( var i = 0; i < users.length; i++ ){

            if( users[i] === user ){

                userFound = true;
                users.splice( i, 1 )
                leftPane.innerHTML = "<p class='success'>" + user + " has been successfully deleted from users list" + "</p>";
                break;
            }                
    
        }

        if( userFound === false ){
            leftPane.innerHTML = "<p class='error'>" + "We couldn't find this user in our list" + "</p>";
        }

    }else{

        leftPane.innerHTML = "<p class='error'>" + "Enter a username for deletion" + "</p>";

    }

}

loginUser.onclick = function(){

    var user = prompt( "Enter your user name." );

    if( user != null ){

        var userFound = false;
        for( var i = 0; i < users.length; i++ ){

            if( users[i] === user ){

                userFound = true;
                currentUser.innerHTML = user;
                leftPane.innerHTML = "<p class='success'>" + "Successfully logged in" + "</p>";
                break;

            }                
    
        }

        if( userFound === false ){
            leftPane.innerHTML = "<p class='error'>" + "We couldn't find this user in our list" + "</p>";
        }

    }else{

        leftPane.innerHTML = "<p class='error'>" + "Invalid user" + "</p>";

    }

}