/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){

	$("#preloader").fadeOut("slow");

});


$(document).ready(function(){
	var i = 0;
	function rotate() {
		i = i%4;
		if(i === 0)
		{
			$(".rw-words-fourth").fadeOut("slow", function(){
				$(".rw-words-first").fadeIn("slow");
			});

		}
		else if(i === 1)
		{
			$(".rw-words-first").fadeOut("slow", function(){
				$(".rw-words-second").fadeIn("slow");
			});
		}
		else if(i === 2)
		{
			$(".rw-words-second").fadeOut("slow", function(){
				$(".rw-words-third").fadeIn("slow");
			});
		}
		else if(i === 3)
		{
			$(".rw-words-third").fadeOut("slow", function(){
				$(".rw-words-fourth").fadeIn("slow");
			});
		}
		++i;
	}
	setInterval(function(){
		rotate();
	}, 3000);
	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 1200,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#navigation").css("background-color","#0EB493");
        } else {
            $("#navigation").css("background-color","rgba(16, 22, 54, 0.2)");
        }
    });
	
	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */	

	var slideHeight = $(window).height();
	
	$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);
	});
	
	
	/* ========================================================================= */
	/*	Portfolio Filtering
	/* ========================================================================= */	
	
	
    // portfolio filtering

    $(".project-wrapper").mixItUp();
	
	
	$(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,
	});
	
	/* ========================================================================= */
	/*	Parallax
	/* ========================================================================= */	
	
	$('#facts').parallax("50%", 0.3);
	
	/* ========================================================================= */
	/*	Timer count
	/* ========================================================================= */

	"use strict";
    $(".number-counters").appear(function () {
        $(".number-counters [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });
	
	/* ========================================================================= */
	/*	Back to Top
	/* ========================================================================= */
	
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(200)
        } else {
            $("#back-top").fadeOut(200)
        }
    });
    $("#back-top").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });
	
});


// ==========  START GOOGLE MAP ========== //
function initialize() {
    var myLatLng = new google.maps.LatLng(22.402789, 91.822156);

    var mapOptions = {
        zoom: 5,
        center: myLatLng,
        disableDefaultUI: false,
        scrollwheel: true,
        navigationControl: true,
        mapTypeControl: false,
        scaleControl: true,
        draggable: false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
        }
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);


    var marker1 = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: 'img/location-icon.png',
        title: '',
    });

    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(-33.950198, 151.259302),
        map: map,
        icon: 'img/location-icon.png',
        title: '',
    });

}

google.maps.event.addDomListener(window, "load", initialize);
// ========== END GOOGLE MAP ========== //