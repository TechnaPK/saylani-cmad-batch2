var popupWindow;

button1.onclick = function () {
    
    result.innerHTML = window.location.href;

}


button2.onclick = function () {

    window.location.href = "http://google.com";

}


button3.onclick = function () {

    window.location.replace("http://google.com");

}

button4.onclick = function () {

    popupWindow = window.open("", 'myWindow', "width=420,height=380,left=200,top=100");

}

button5.onclick = function () {

    popupWindow.document.write("<h1>Hello World</h1>")

}

button6.onclick = function () {

    popupWindow.location.assign("http://www.animals.com/capuchin.html");

}

button7.onclick = function () {

    popupWindow.close();

}

function testPopup() {

    var testPop = window.open("", "", "width=100,height=100");
    if (testPop === null || typeof (testPop) === "undefined" ) {
        alert("Please disable your popup blocker.");
        return;
    }
    testPop.close();
    alert( "Popup is enabled" )

}

// testPopup()