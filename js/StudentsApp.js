$(document).ready(function(){
    $(".head-menu span a").mouseover(function(){
        $(".head-menu span").removeClass("Students-app");
    });

    $(".head-menu span a").mouseleave(function(){
        $(".head-menu span:eq(5)").addClass("Students-app");
    });
});