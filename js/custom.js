// JavaScript Document



	$(window).load(function() {
	
		"use strict";	
		
		
		/*----------------------------------------------------*/
		/*	Preloader
		/*----------------------------------------------------*/
		
		$(".loader").delay(100).fadeOut();
		$(".animationload").delay(100).fadeOut("fast");
		
		
		$(window).stellar({});
		

	});

	
		
	$(window).scroll(function() {
		
		"use strict";	
		
		
		/*----------------------------------------------------*/
		/*	Navigtion Menu Scroll
		/*----------------------------------------------------*/	
		
		var b = $(window).scrollTop();
		
		if( b > 60 ){		
			$(".navbar").addClass("scroll-fixed-navbar");
			$(".navbar-brand img").attr('src', 'img/dark-logo.png');
		} else {
			$(".navbar").removeClass("scroll-fixed-navbar");
			$(".navbar-brand img").attr('src', 'img/white-logo.png');
		}
		
		
	});
	
	
	
	$(document).ready(function() {
		
		"use strict";	
		
				
		/*----------------------------------------------------*/
		/*	Mobile Menu Toggle
		/*----------------------------------------------------*/
		
		$('.navbar-nav li a').on('click', function() {				
			$('#navigation-menu').css("height", "1px").removeClass("in").addClass("collapse");
			$('#navigation-menu').removeClass("open");				
		});	
		
		
		
		/*----------------------------------------------------*/
		/*	Intro Slider
		/*----------------------------------------------------*/
	
		$("#slides").superslides({
			play: 6000,
			animation: "fade",
			pagination: true
		});
		
		
			
		/*----------------------------------------------------*/
		/*	Animated Scroll To Anchor
		/*----------------------------------------------------*/
		
		$('body a[href^="#"]').on('click', function (e) {
			
			e.preventDefault();

			var target = this.hash,
				$target = jQuery(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - 0 // - 200px (nav-height)
			}, 'slow', 'easeInSine', function () {
				window.location.hash = '1' + target;
			});
			
		});
		
		
		
		/*----------------------------------------------------*/
		/*	ScrollUp
		/*----------------------------------------------------*/
		
		$.scrollUp = function (options) {

			// Defaults
			var defaults = {
				scrollName: 'scrollUp', // Element ID
				topDistance: 600, // Distance from top before showing element (px)
				topSpeed: 800, // Speed back to top (ms)
				animation: 'fade', // Fade, slide, none
				animationInSpeed: 200, // Animation in speed (ms)
				animationOutSpeed: 200, // Animation out speed (ms)
				scrollText: '', // Text for element
				scrollImg: false, // Set true to use image
				activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			};

			var o = $.extend({}, defaults, options),
				scrollId = '#' + o.scrollName;

			// Create element
			$('<a/>', {
				id: o.scrollName,
				href: '#top',
				title: o.scrollText
			}).appendTo('body');
			
			// If not using an image display text
			if (!o.scrollImg) {
				$(scrollId).text(o.scrollText);
			}

			// Minium CSS to make the magic happen
			$(scrollId).css({'display':'none','position': 'fixed','z-index': '2147483647'});

			// Active point overlay
			if (o.activeOverlay) {
				$("body").append("<div id='"+ o.scrollName +"-active'></div>");
				$(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '2147483647' });
			}

			// Scroll function
			$(window).scroll(function(){	
				switch (o.animation) {
					case "fade":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed) );
						break;
					case "slide":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed) );
						break;
					default:
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0) );
				}
			});

			// To the top
			$(scrollId).click( function(event) {
				$('html, body').animate({scrollTop:0}, o.topSpeed);
				event.preventDefault();
			});

		};
		
		$.scrollUp();

		
		
		/*----------------------------------------------------*/
		/*	Filterable Portfolio
		/*----------------------------------------------------*/
	
		$("#portfolio .row").mixitup({
			targetSelector: '.portfolio-item',
		});
		
		
				
		/*----------------------------------------------------*/
		/*	Portfolio Lightbox
		/*----------------------------------------------------*/
		
		$("a[class^='prettyPhoto']").prettyPhoto();
		
		
			
		/*----------------------------------------------------*/
		/*	Testimonials Rotator
		/*----------------------------------------------------*/
		
		$('.flexslider').flexslider({
			animation: "fade",
			controlNav: true,
			directionNav: false,  
			slideshowSpeed: 6000,   
			animationSpeed: 2000,  
			start: function(slider){
				$('body').removeClass('loading');
			}
		});	
		
		
		
		/*----------------------------------------------------*/
		/*	Clients Counter
		/*----------------------------------------------------*/		
		$('#banner-1').each(function() {
			$(this).appear(function() {
				var $endNum = parseInt($(this).find('.clients-counter').text());
				$(this).find('.clients-counter').countTo({
					from: 0,
					to: $endNum,
					speed: 1800,
					refreshInterval: 30,
				});
			},{accX: 0, accY: 0});
		});
		
		
		
		/*----------------------------------------------------*/
		/*	Statistic Counter
		/*----------------------------------------------------*/
	
		$('.statistic-block').each(function() {
			$(this).appear(function() {
				var $endNum = parseInt($(this).find('.statistic-number').text());
				$(this).find('.statistic-number').countTo({
					from: 0,
					to: $endNum,
					speed: 4000,
					refreshInterval: 30,
				});
			},{accX: 0, accY: 0});
		});
		
		
		
		/*----------------------------------------------------*/
		/*	Our Clients Carousel
		/*----------------------------------------------------*/
	
		$("#our-customers").owlCarousel({
					  
			slideSpeed : 600,
			items : 6,
			itemsDesktop : [1199,5],
			itemsDesktopSmall : [960,4],
			itemsTablet: [768,3],
			itemsMobile : [480,3],
			navigation:true,
			pagination:false,
			navigationText : false
					  
		});
		
		
		
		/*----------------------------------------------------*/
		/*	Contact Form Validation
		/*----------------------------------------------------*/
		
		$("#contact-form").validate({
			rules:{ 
					name:{
						required: true,
						minlength: 1,
						maxlength: 16,
					},
					email:{
						required: true,
						email: true,
					},
					subject:{
						required: true,
						minlength: 4,
						maxlength: 24,
					},		
					message:{
						required: true,
						minlength: 2,
						}
					},
					messages:{
							name:{
								required: "Please enter no more than (1) characters"
							}, 
							email:{
								required: "We need your email address to contact you",
								email: "Your email address must be in the format of name@domain.com"
							}, 
							message:{
								required: "Please enter no more than (2) characters"
							}, 
						}
		});			
		

		
		/*----------------------------------------------------*/
		/*	Newsletter Subscribe Form
		/*----------------------------------------------------*/
	
		$('#newsletter_form').ajaxChimp({
        language: 'cm',
        url: 'http://dsathemes.us3.list-manage.com/subscribe/post?u=af1a6c0b23340d7b339c085b4&id=344a494a6e'
            //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
		});


		$.ajaxChimp.translations.cm = {
			'submit': 'Submitting...',
			0: 'We have sent you a confirmation email',
			1: 'Please enter a value',
			2: 'An email address must contain a single @',
			3: 'The domain portion of the email address is invalid (the portion after the @: )',
			4: 'The username portion of the email address is invalid (the portion before the @: )',
			5: 'This email address looks fake or invalid. Please enter a real email address'
		};
		
		
		
	});	
	
	
	