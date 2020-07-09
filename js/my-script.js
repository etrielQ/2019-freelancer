		$(window).on('load', function () { // makes sure the whole site is loaded 
			$('.preloader').fadeOut(); // will first fade out the loading animation 
			$('body').delay(350).css({
				'overflow': 'visible'
			});
		})
		// Wrap every letter in a span
		$('.ml2').each(function () {
			$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
		});

		anime.timeline({
				loop: true
			})
			.add({
				targets: '.ml2 .letter',
				scale: [4, 1],
				opacity: [0, 1],
				translateZ: 0,
				easing: "easeOutExpo",
				duration: 950,
				delay: function (el, i) {
					return 70 * i;
				}
			}).add({
				targets: '.ml2',
				opacity: 0,
				duration: 1000,
				easing: "easeOutExpo",
				delay: 1000
			});

		/* owl carousel settings */

		var owl = $('.owl-carousel');
		owl.owlCarousel({
			margin: 60,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			smartSpeed: 700,
			autoplayHoverPause: true,
			responsive: {
				0: {
					items: 2
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});

		/* scroll menu js */

		$(window).scroll(function () {
			if ($(document).scrollTop() > 200) {
				$(".main-menu").addClass("mainmenu-scroll");
				$(".menulogo").addClass("menulogo-scroll");
			} else {
				$(".main-menu").removeClass("mainmenu-scroll");
				$(".menulogo").removeClass("menulogo-scroll");
			}
		});

		/* hamburger menu js - settings */

		var McButton = $("[data=hamburger-menu]");
		var McBar1 = McButton.find("b:nth-child(1)");
		var McBar2 = McButton.find("b:nth-child(2)");
		var McBar3 = McButton.find("b:nth-child(3)");



		McButton.click(function () {
			$(this).toggleClass("active");

			if (McButton.hasClass("active")) {
				McBar1.velocity({
					top: "50%"
				}, {
					duration: 200,
					easing: "swing"
				});
				McBar3.velocity({
						top: "50%"
					}, {
						duration: 200,
						easing: "swing"
					})
					.velocity({
						rotateZ: "90deg"
					}, {
						duration: 800,
						delay: 200,
						easing: [500, 20]
					});
				McButton.velocity({
					rotateZ: "135deg"
				}, {
					duration: 800,
					delay: 200,
					easing: [500, 20]
				});
			} else {
				McButton.velocity("reverse");
				McBar3.velocity({
						rotateZ: "0deg"
					}, {
						duration: 800,
						easing: [500, 20]
					})
					.velocity({
						top: "100%"
					}, {
						duration: 200,
						easing: "swing"
					});
				McBar1.velocity("reverse", {
					delay: 800
				});
			}
		});




		/*$element.velocity({ 
		    width: "500px",
		    property2: value2
		}, {
		    duration: 400,
		    easing: "swing",
		    queue: "",
		    begin: undefined,
		    progress: undefined,
		    complete: undefined,
		    display: undefined,
		    visibility: undefined,
		    loop: false,
		    delay: false,
		    mobileHA: true
		});*/



		/* slider bootstrap carousel js */

		$(".carousel").swipe({

			swipe: function (event, direction, distance, duration, fingerCount, fingerData) {

				if (direction == 'left') $(this).carousel('next');
				if (direction == 'right') $(this).carousel('prev');

			},
			allowPageScroll: "vertical"
		});

		var myCarousels = $(".carousel");
		myCarousels.each(function (index, element) {
			var myCarousel = $("#" + $(element).attr('id'));
			myCarousel.append("<ol class='carousel-indicators'></ol>");
			var indicators = $("#" + $(element).attr('id') + " .carousel-indicators");
			$("#" + $(element).attr('id') + " .carousel-inner").children(".item").each(function (index) {
				console.log(index);
				(index === 0) ?
				indicators.append("<li data-target='#" + $(element).attr('id') + "' data-slide-to='" + index + "' class='active'></li>"):
					indicators.append("<li data-target='#" + $(element).attr('id') + "' data-slide-to='" + index + "'></li>");
			});
		});
		$('.carousel').carousel({
			pause: "false",
			interval: 8000
		});


		/* menu blur js */

		$('.McButton').click(function () {
			$(".menu").toggleClass("menu-active");
			$("#slider").toggleClass("blur");
			$(".main-menu").toggleClass("blur");
			$(".sec-project").toggleClass("blur");
			$(".index-about").toggleClass("blur");
			$(".index-myskills").toggleClass("blur");
			$(".sec-index-arcss").toggleClass("blur");
			$(".sec-paketler").toggleClass("blur");
			$(".index-blog").toggleClass("blur");
			$(".sec-referance").toggleClass("blur");
			$(".sec-testimonial").toggleClass("blur");
			$(".footer").toggleClass("blur");
			$(".other-page-section").toggleClass("blur");
			$(".other-page-blur").toggleClass("blur");
			$(".myskill-min-sec").toggleClass("blur");
		});
