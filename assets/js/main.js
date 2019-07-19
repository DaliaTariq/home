$(document).ready(function(){

    //href prevent defoult
    $( "a" ).click(function( event ) {
        event.preventDefault();
    });

  /*OWL*/ 

  $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:4
        },
        1024:{
            items:4
        }
    }
});
  });