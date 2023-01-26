$( document ).ready(function() {
    console.log( "ready!" );


    var myCarousel = document.getElementById('medbox-slider')
    var carousel = new bootstrap.Carousel(myCarousel)
    console.log(myCarousel)
    $('#control-text').text("1-3 of 8")
    myCarousel.addEventListener('slide.bs.carousel', function (ev) {
          console.log("current slide", ev.to)
            //var idx = $(ev.relatedTarget).index() + 1;
            let text = ""

            switch(ev.to) {
              case 0:text = "1-3 of 8";  break;
              case 1:text = "4-6 of 8";  break;
              case 2:text = "7-8 of 8";  break;
            }
            $('#control-text').text(text)
                //
                })

    $(".btnleft").on("click", ()=>{


          carousel.prev()
    })

    $(".btnright").on("click", ()=>{

        carousel.next()
    })

});
