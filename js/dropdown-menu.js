$(document).ready(function(){
    $("ul ul").css("display", "none"); //LE AGREGO LA ACCIÓN QUE A PENAS CARGA LA PAG LO HAGA CON LA CAJA EN DISPLAY NONE
});

$(document).ready(function(){

    $("nav div").click(function(){
            $("ul").slideToggle();
           // $("ul ul").css("display", "none"); LE VUELO ESTA LÍNEA 
        });

        // $("ul li").click(function(){
        //     $("ul ul").slideUp();
        //     $(this).find('ul').slideToggle();
        // });
        $('ul li').click(function () {
            $(this).siblings().find('ul').slideUp();
            $(this).find('ul').slideToggle();
        });

        $(window).resize(function(){
            if($(window).width() > 768){
                $("ul").removeAttr('style');
            }
        });
 });