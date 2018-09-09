button2.onclick = function () {

    var now = new Date();
    var today = now.getDay();

    switch( today ){
        case 0:
            alert("It's Sunday");
            break;
        case 1:
            alert("It's Monday");
            break;
        case 2:
            alert("It's Tuesday");
            break;
        default:
            alert("It's Some other day");
    }

}