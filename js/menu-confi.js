/* cuando todos los elementos del documento hayan sido cargados */
$(document).ready(function() {

    /* al cliquear en el icono ... */
    $("#llamamenu").click(function() {

        /* a la etiqueta que tenga el id "menu"
           le agregue la clase "menuvisible" si NO la tiene
           y se la quite si la tiene */
        $("#menu ul").toggleClass("visible");

        /* si el ícono del llamador del menu es la "hamburguesa",
           que lo cambie por el ícono de cerrar y viceversa */
        var icono = $("#llamamenu i").text();

        if (icono == "menu") {
            $("#llamamenu i").text("close");
        } else {
            $("#llamamenu i").text("menu");
        }

    }); /* fin de lo que se hace si se cliquea el icono del menu */

    /*  al cliquear en un vínculo del menu o en main o en footer */
    $("#menu ul li a, main, footer").click(function() {

        /* le quita la clase "visble" a "#menu" */
        $("#menu ul").removeClass("visible");

        /* cambia el ícono de "cerrar" por "hamburguesa" */
        $("#llamamenu i").text("menu");

    }); /* fin de lo que se hace si se cliquea en link del menu */

});