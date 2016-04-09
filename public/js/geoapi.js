$(document).ready(function () {
        $.ajax({
        type: 'GET',
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&name=cruise&key=AIzaSyBQoCIp6XOER9v7s2QNqc6_ETxsThRsOc8',
        async: false,
        jsonpCallback: 'jsonCallback',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function (data) {
             for (i = 0; i < data.results.length; i++) {
            myAddress[i] = data.results[i].formatted_address;
            document.getElementById("message").innerHTML += myAddress[i] + "<br>";
            console.log(myAddress[i]);
        };
        },
        error: function (e) {
            console.log(e.message);
        }
    });
});  