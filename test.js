$(document).ready(function(){
    var flag = true;
    $('#test').mouseenter(function(){
        $(this).animate({
            height: '+=10px',
            width: '+=10px'
        });
    });
});

