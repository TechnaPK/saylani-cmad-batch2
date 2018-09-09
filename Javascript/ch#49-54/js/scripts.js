button1.onclick = function () {

    var newName = prompt("What is your name?")

    var names = localStorage.getItem('data');

    if( names == null ){
        names = []
    }else{
        names = JSON.parse( names )
    }

    names.push( newName )

    localStorage.setItem( 'data', JSON.stringify( names ) )

    result.innerHTML = newName + " have been stored in storage"

}


button2.onclick = function () {

    var names = localStorage.getItem('data');
    if( names == null ){
        alert("There is nothing to print")
        return
    }

    names = JSON.parse( names )

    result.innerHTML = names
}

button3.onclick = function () {

    localStorage.removeItem('data')

    result.innerHTML = "All Names Have been deleted from Storage"

}