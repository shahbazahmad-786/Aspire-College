$(document).ready(function(){
    $(".head-menu span a").mouseover(function(){
        $(".head-menu span").removeClass("campuses");
    });

    $(".head-menu span a").mouseleave(function(){
        $(".head-menu span:eq(3)").addClass("campuses");
    });
});