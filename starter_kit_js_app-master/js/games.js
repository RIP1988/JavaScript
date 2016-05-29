'use strict';
var showData = (function() {
    var xmlhttp = new XMLHttpRequest(),
        url = "games.json";

    return {
      gamesData: function() {
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var myArr = JSON.parse(xmlhttp.responseText);
                showGames(myArr);
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
      }
    };
    })();

    function showGames(arr) {
        var out = "";
        var i;
        for(i = 0; i < arr.length; i++) {
            out += '<p>Title: ' + arr[i].title + '</p>' + '<p>Producer: ' + arr[i].producer + '</p>' + '<p>Release date: ' + arr[i].release + '</p>' + '<p>Genre: ' + arr[i].genre + '</p>';
        }
        document.getElementById("games-data").innerHTML = out;
      }
