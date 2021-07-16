$(document).ready(function() {

    //Deteccion de la posición del scroll

    $(document).on('scroll', function() {
        var sv = $(document).scrollTop();
        // console.log(sv);

        if (sv >= 0 && sv < 499) {
            $(".saludo").addClass("active");
            $(".habilidades").removeClass("active");
            $(".proyectos").removeClass("active");
            $(".contact1").removeClass("active");
        } else if (sv >= 500 && sv < 1349) {
            $(".saludo").removeClass("active");
            $(".habilidades").addClass("active");
            $(".proyectos").removeClass("active");
            $(".contact1").removeClass("active");
        } else if (sv >= 1350 && sv < 2619) {
            $(".saludo").removeClass("active");
            $(".habilidades").removeClass("active");
            $(".proyectos").addClass("active");
            $(".contact1").removeClass("active");
        } else {
            $(".saludo").removeClass("active");
            $(".habilidades").removeClass("active");
            $(".proyectos").removeClass("active");
            $(".contact1").addClass("active");
        }
    })

    // --------- Botones Barra de navecacioón ---------



    $(".saludo").addClass("active");

    $(".saludo").click(function() {
        $(".saludo").addClass("active");
        $(".habilidades").removeClass("active");
        $(".proyectos").removeClass("active");
        $(".contact1").removeClass("active");
    });

    $(".habilidades").click(function() {
        $(".saludo").removeClass("active");
        $(".habilidades").addClass("active");
        $(".proyectos").removeClass("active");
        $(".contact1").removeClass("active");
    });

    $(".proyectos").click(function() {
        $(".saludo").removeClass("active");
        $(".habilidades").removeClass("active");
        $(".proyectos").addClass("active");
        $(".contact1").removeClass("active");
    });

    $(".contact1").click(function() {
        $(".saludo").removeClass("active");
        $(".habilidades").removeClass("active");
        $(".proyectos").removeClass("active");
        $(".contact1").addClass("active");
    });

    // --------- Botones y habilidades ---------

    $(".buttonFront").addClass("active");
    $(".front").css("display", "block");
    $(".back").css("display", "none");
    $(".langs").css("display", "none");


    $(".buttonFront").click(function() {
        $(".buttonFront").addClass("active");
        $(".front").css("display", "block");
        $(".buttonBack").removeClass("active");
        $(".back").css("display", "none");
        $(".buttonLangs").removeClass("active");
        $(".langs").css("display", "none");
    });

    $(".buttonBack").click(function() {
        $(".buttonFront").removeClass("active");
        $(".front").css("display", "none");
        $(".buttonBack").addClass("active");
        $(".back").css("display", "block");
        $(".buttonLangs").removeClass("active");
        $(".langs").css("display", "none");
    });

    $(".buttonLangs").click(function() {
        $(".buttonFront").removeClass("active");
        $(".front").css("display", "none");
        $(".buttonBack").removeClass("active");
        $(".back").css("display", "none");
        $(".buttonLangs").addClass("active");
        $(".langs").css("display", "block");
    });

    // --------- Abrir y Cerrar Popup ---------

    $("#card1").click(function() {
        $(".overlay").addClass("active");
        $(".detail1").addClass("active");
        $(".detail2").removeClass("active");
        $(".detail3").removeClass("active");
        $(".detail4").removeClass("active");
        $(".detail5").removeClass("active");

    });

    $("#card2").click(function() {
        $(".overlay").addClass("active");
        $(".detail1").removeClass("active");
        $(".detail2").addClass("active");
        $(".detail3").removeClass("active");
        $(".detail4").removeClass("active");
        $(".detail5").removeClass("active");

    });

    $("#card3").click(function() {
        $(".overlay").addClass("active");
        $(".detail1").removeClass("active");
        $(".detail2").removeClass("active");
        $(".detail3").addClass("active");
        $(".detail4").removeClass("active");
        $(".detail5").removeClass("active");

    });

    $("#card4").click(function() {
        $(".overlay").addClass("active");
        $(".detail1").removeClass("active");
        $(".detail2").removeClass("active");
        $(".detail3").removeClass("active");
        $(".detail4").addClass("active");
        $(".detail5").removeClass("active");

    });

    $("#card5").click(function() {
        $(".overlay").addClass("active");
        $(".detail1").removeClass("active");
        $(".detail2").removeClass("active");
        $(".detail3").removeClass("active");
        $(".detail4").removeClass("active");
        $(".detail5").addClass("active");

    });

    $(".closeDetail").click(function() {
        $(".overlay").removeClass("active");
        $(".detail1").removeClass("active");
        $(".detail2").removeClass("active");
        $(".detail3").removeClass("active");
        $(".detail4").removeClass("active");
        $(".detail5").removeClass("active");
    });

    //BOTON HAMBURGUESA
    // $(".menu-icon").css("display", "block");
    $(".menu-icon").click(function() {

        if ($(".links").hasClass("show")) {
            $(".links").removeClass("show");
        } else {
            $(".links").addClass("show");
        }

    });

});