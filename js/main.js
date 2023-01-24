$( document ).ready( function() {
    
    // Logos Slider
    if ( $( '.logos' ).length ) {
        $( '.logos' ).slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }
            ]
        });
    } 

    // Timeline
    if ( $( '.timeline .events' ).length ) {
        $( '.timeline .events' ).slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        infinite: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }

    // Range Slider
    if ( $( '[data-slider]' ).length ) {
        $( '[data-slider]' ).slider({});

        $( '#price_slider' ).on( 'slide', function( evt ) {
            $( '#price_slider_value span' ).html( '$' + evt.value[0] + ' - ' + '$' + evt.value[1] );
        });
    }

    // QTY
    $('.quantity  #plus-btn').click(function(evt) {
        evt.preventDefault();
    	$('.qty').val(parseInt($('.qty').val()) + 1 );
    });
    $('.quantity #minus-btn').click(function(evt) {
        evt.preventDefault();
    	$('.qty').val(parseInt($('.qty').val()) - 1 );
    	if ($('.qty').val() == 0) {
			$('.qty').val(1);
		}
    });
    
} );