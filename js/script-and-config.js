/*
 * Eventghost Web Gui
 * http://sebastiannilsson.com/open-source/eventghost-web-gui
 * 
 * Copyright, Sebastian Nilsson
 * 
 */

// send requests to local server
var serverUrl = '';

language = 'sv';

var lastUpdate = 0; // this is used to make sure that sliders do not send ajax requests too often

$(document).ready(function() {   
    // bind actions to buttons
    // when user clicks or touches a button this function will be triggered
    $("*[data-action]").bind('touchend', function() {
        return true;
    });
    $("*[data-action]").bind('click', function() {
        var action = $(this).attr("data-action");
        var href = $(this).attr("href");
        var element = $(this);
        
        // send ajax request. this will trigger an event in eventghost
        $.ajax({
            url: serverUrl+'/ajax.html?'+action,
            cache: false,
            success: function(element) {
                // does the element also have href?
                if (element.attr("href")) {
                    // has href. redirect to link after 500 ms
                    setTimeout(function() {
                        window.location=element.attr("href");
                    }, 500);
                }
                return true;
            }(element)
        });
    });

    // bind actions to sliders. 
    // when the slider changes value this function will be triggered
    $('#doughnut').click({
        lastUpdate: lastUpdate
    }, function(event) {
        var temp = (new Date()).getTime();
        if (event.data.lastUpdate+200 < temp) {
            event.data.lastUpdate = temp;
            console.log(this);
            console.log("this över");

            
            if(!$(this).is("#volController")){
                value =  $("#volController").val();               
            }

            else {
                value =  $("#lightController").val(); 
            }
            
            //value = $(this).val();
            console.log(value);

            $.ajax({
                url: serverUrl+'/ajax.html?'+$(this).attr('data-action')+'.'+value,
                dataType: 'JSONP',
                cache: false
            });
        }
    });
});