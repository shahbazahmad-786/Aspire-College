$(document).ready(function(){
    $(".head-menu span a").mouseover(function(){
        $(".head-menu span").removeClass("perfomance");
    });

    $(".head-menu span a").mouseleave(function(){
        $(".head-menu span:eq(2)").addClass("perfomance");
    });
});