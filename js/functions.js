

 //Window Loaded Handler
  $(window).on('load',function() {'use strict';
	$(".loader").fadeOut("slow");
  });
  
jQuery(function($) {'use strict';



  // =============== DropDown handler ============	  
	
	 // Menu Toggle Transition 
		$('.nav-icon').on('click', function () {
			 return $(this).toggleClass('open');
		}.call(this));
	
	  $(".navbar-default .navbar-nav li.dropdown").on('click', function() {
			if ($(window).width() < 979) {
				$(this).next('.dropdown-menu').show();
				$(this).next.toggleClass('open'); 
			}
	  });
			  
	  $(".navbar-default .navbar-nav li.dropdown").hover(function () {
			if ($(window).width() >= 979) {
				  $(this).find('.dropdown-menu').first().stop(true, true).slideToggle(500);
				  $(this).toggleClass('open');
			}
	  }, function () {
			if ($(window).width() >= 979) {
				$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
				  $(this).removeClass('open');
			}
	  });
	  
	  
	  
	  
	  
// =========== 	Back to Top ============== 
  if ($('#back-top').length) {
		var scrollTrigger = 100, // px
		backToTop = function () {
			 var scrollTop = $(window).scrollTop();
			 if (scrollTop > scrollTrigger) {
				  $('#back-top').addClass('show');
			 } else {
				  $('#back-top').removeClass('show');
			 }
		};
		backToTop();
		$(window).on('scroll', function () {
			 backToTop();
		});
		$('#back-top').on('click', function (e) {
			 e.preventDefault();
			 $('html,body').animate({
				  scrollTop: 0
			 }, 700);
		});
  }


// Scroll to  section
  $('a.page-scroll').on('click', function(event){		
		var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-70
        }, 1200);
       event.preventDefault();;
  });

	 
// ================= Sliders OWL ================
	 // cheffs
	 $("#cheffs-slider, #service-slider").owlCarousel({
      autoPlay: false,
      items : 2,
		pagination : false,
		navigationText :["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		navigation : true,
		itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2],
      itemsTablet : [768,2],
 
   });
	
	
	//Our cheffs On About
	$("#our-cheffs , #news-slider").owlCarousel({
      autoPlay:4000,
      items :3,
		pagination : false,
		navigationText :["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		navigation : true,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2],
		itemsMobile : [480,1],
 
   });
	
    //Fading Testinomial content
    $("#testinomial-slider").owlCarousel({
      autoPlay: 3000,
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
		transitionStyle : "fade"
  });
  
  
    
		
// ================== tabbed content On Sidebar =====================
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").on('click', function() {
		  $(".tab_content").hide();
		  var activeTab = $(this).attr("rel"); 
		  $("#"+activeTab).fadeIn();		
		  
		  $("ul.tabs li").removeClass("active");
		  $(this).addClass("active");

		  $(".tab_drawer_heading").removeClass("d_active");
		  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    });
	 
	/* if in drawer mode on Mobile Version*/
	$(".tab_drawer_heading").on('click', function() {
       $(".tab_content").hide();
       var d_activeTab = $(this).attr("rel"); 
       $("#"+d_activeTab).fadeIn(1200);
	  
	    $(".tab_drawer_heading").removeClass("d_active");
       $(this).addClass("d_active");
	  
	    $("ul.tabs li").removeClass("active");
	    $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	 
	 
	 
// ================ Filter Mix gallery =================
	 $(".zerogrid").mixItUp();



// ================= Popup =====================
	  $(".fancybox").fancybox({
		  openEffect : 'elastic',
		  openSpeed  : 650,
		  closeEffect : 'fade',
		  closeClick : true,
	  });
	  
	  // video popoup
	  $(".video").fancybox({
		fitToView	: true,
		autoSize	: true,
		closeClick	: false,
	});
	
   
 
	 
	 //Facts Counters Home Page
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
	 
	 
// ===================== Parallax =====================
	 $('.info_section').parallax("50%", 0.2);
	 $('.paralax').parallax("50%", 0.2);
	 $('#facts').parallax("50%", 0.2);




// ======================================================
	    //Order Form  Submission
	// ======================================================

	$("#btn_order_submit").click(function() {
        //get input field values
        var user_name       = $('input[name=name]').val();
        var user_email      = $('input[name=email]').val();
		var user_telephone      = $('input[name=phone]').val();
		var order_deal      = $('select[name=deal]').val();
        var user_message    = $('textarea[name=message]').val();

        //simple validation at client's end
        var proceed = true;
        if(user_name==""){
            proceed = false;
        }
        if(user_email==""){
            proceed = false;
        }

		 if(user_telephone==""){
            proceed = false;
        }

		if(user_message=="") {
            proceed = false;
        }

        //everything looks good! proceed...
        if(proceed)
        {
            //data to be sent to server
           var post_data = {'userName':user_name, 'userEmail':user_email, 'userTelephone':user_telephone, 'order_deal':order_deal, 'userMessage':user_message};
            //Ajax post data to server
            $.post('onlineorder.php', post_data, function(response){
                var output;
                //load json data from server and output message
				if(response.type == 'error')
				{
					output = '<div class="alert-danger">'+response.text+'</div>';
				}else{
				    output = '<div class="alert-success">'+response.text+'</div>';

					//reset values in all input fields
					$('#order_form input').val('');
					$('#order_form textarea').val('');
                    $('#btn_order_submit').val('Place Order');
				}

				$("#result").hide().html(output).slideDown();
            }, 'json');

        }
    });

    //reset previously set border colors and hide all message on .keyup()
    $("#app_form  input, #app_form textarea").keyup(function() {
        $("#result").slideUp();
    });






	// ======================================================
	    //Contact Form  Submission
	// ======================================================

	$("#btn_contact_submit").click(function() {
        //get input field values
        var user_name       = $('input[name=f_name]').val()+' '+$('input[name=l_name]').val();
        var user_email      = $('input[name=email]').val();
		var user_telephone      = $('input[name=phone]').val();
		var user_message    = $('textarea[name=message]').val();

        //simple validation at client's end
        var proceed = true;
        if(user_name==""){
            proceed = false;
        }
        if(user_email==""){
            proceed = false;
        }

		 if(user_telephone==""){
            proceed = false;
        }

		if(user_message=="") {
            proceed = false;
        }

        //everything looks good! proceed...
        if(proceed)
        {
            //data to be sent to server
           var post_data = {'userName':user_name, 'userEmail':user_email, 'userTelephone':user_telephone, 'userMessage':user_message};
            //Ajax post data to server
            $.post('send-contact.php', post_data, function(response){
                var output;
                //load json data from server and output message
				if(response.type == 'error')
				{
					output = '<div class="alert-danger">'+response.text+'</div>';
				}else{
				    output = '<div class="alert-success">'+response.text+'</div>';

					//reset values in all input fields
					$('#contact_form input').val('');
					$('#contact_form textarea').val('');
					$('#btn_contact_submit').val('Submit Request');
				}

				$("#result").hide().html(output).slideDown();
            }, 'json');

        }
    });

    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form  input, #contact_form textarea").keyup(function() {
        $("#result").slideUp();
    });
  });


function validateEmail() {
  	
  $email = $("#EMAIL").val();
  if ($email==""){
	  $email = 0;
	  }
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}
