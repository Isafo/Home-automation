// send requests to local server
var serverUrl = '';

var lastUpdate = 0; // this is used to make sure that sliders do not send ajax requests too often

$(function() {
    var $all = $(".dial")
        , $body = $("body");

    $(".dial")
        .dial({
            fgColor:"#19E638"
            , bgColor:"#EEEEEE"
            , thickness : .3
        })
        
        .css({display:'inline',padding:'0px 10px'
    });
});