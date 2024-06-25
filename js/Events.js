$(document).ready(function(){
    $(".head-menu span a").mouseover(function(){
        $(".head-menu span").removeClass("events");
    });

    $(".head-menu span a").mouseleave(function(){
        $(".head-menu span:eq(4)").addClass("events");
    });
});


$(document).ready(function(){

    var banner = $("#banner-car");

    banner.owlCarousel({
            nav : false,
            loop:true,
            autoplay :true,
            autoplayTimeout:4000,
            responsive:{
               0:{
                   items:1
               },
               600:{
                   items:1
               },
               1000:{
                   items:1
               }
           }
    })

});
