$(document).ready(function(){
    $(".Biography-btn").click(function(){
        $(".Biography").toggle()
         $(".Albums").hide()
         $(".SocialMedia").hide()
         $(".Facts").hide()
         $(".Shows").hide()
    });
});

$(document).ready(function(){
    $(".Albums-btn").click(function(){
        $(".Albums").toggle()
        $(".Biography").hide()
         $(".SocialMedia").hide()
         $(".Facts").hide()
         $(".Shows").hide()
    });
});

$(document).ready(function(){
    $(".SocialMedia-btn").click(function(){
        $(".SocialMedia").toggle();
        $(".Biography").hide()
         $(".Albums").hide()
         $(".Facts").hide()
         $(".Shows").hide()
    });
});

$(document).ready(function(){
    $(".Facts-btn").click(function(){
        $(".Facts").toggle();
         $(".Biography").hide()
         $(".Albums").hide()
         $(".SocialMedia").hide()
         $(".Shows").hide()
    });
});

$(document).ready(function(){
    $(".Shows-btn").click(function(){
        $(".Shows").toggle();
         $(".Biography").hide()
         $(".Albums").hide()
         $(".SocialMedia").hide()
        $(".Facts").hide()
    });
});