$(document).ready(function() {
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
});