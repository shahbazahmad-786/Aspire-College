$(document).ready(function(){
    $(".head-menu span a").mouseover(function(){
        $(".head-menu span").removeClass("contact");
    });

    $(".head-menu span a").mouseleave(function(){
        $(".head-menu span:eq(7)").addClass("contact");
    });
});