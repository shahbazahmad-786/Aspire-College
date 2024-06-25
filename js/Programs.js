$(document).ready(function(){
    $(".head-menu span a").mouseover(function(){
        $(".head-menu span").removeClass("programs");
    });

    $(".head-menu span a").mouseleave(function(){
        $(".head-menu span:eq(1)").addClass("programs");
    });
});
