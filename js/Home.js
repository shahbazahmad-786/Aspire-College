$(document).ready(function () {
  var main = $("#main-car");
  var work = $("#work-car");
  var staff = $("#staff-car");

  main.owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  work.owlCarousel({
    stagePadding: 100,
    autoplay: true,
    autoplayTimeout: 2000,
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1300: {
        items: 4,
      },
    },
  });

  staff.owlCarousel({
    margin: 30,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
});

$(document).ready(function () {
  $(".head-menu span a").mouseover(function () {
    $(".head-menu span").removeClass("home");
  });

  $(".head-menu span a").mouseleave(function () {
    $(".head-menu span:eq(0)").addClass("home");
  });
});

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     autoplay :true,
//     autoplayTimeout:4000,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })

// $('.owl-carousel').owlCarousel({
//     stagePadding: 50,
//     autoHeight:true,
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:5
//         },
//         1000:{
//             items:10
//         }
//     }
// })
