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


    // bind actions to volumeControler. 
    // when the slider changes value this function will be triggered
    $('input[class="dial"]').change({
        lastUpdate: lastUpdate
    }, function(event) {
        var ts = (new Date()).getTime();
        if (event.data.lastUpdate+200 < ts) {
            event.data.lastUpdate = ts;
            value = $(this).val();
            $.ajax({
                url: serverUrl+'/ajax.html?'+$(this).attr('id')+'.'+value,
                dataType: 'JSONP',
                cache: false
            });
        }
    });