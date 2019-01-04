/* global $,console,alert,prompt */
$(document).ready(function(){
	
	$('.carousel').carousel({
       interval: 5000
      });
		
 // show color option div when click in the gear
	$(".gear-box").click(function(){
		
		$(".color-option").fadeToggle();
		
	}); 
	
	
	// change theme color 
	
	var colorLi=$(".color-option ul li");
	
    colorLi
	.eq(0).css("backgroundColor","#E41B17").end()/* نتهى الاتشين عشان ادخل ع السليكتلول اللى بعده*/
	.eq(1).css("backgroundColor","#fcbad3").end()
	.eq(2).css("backgroundColor","#1b5a7a").end()
	.eq(3).css("backgroundColor","#ff8364").end()
	.eq(4).css("backgroundColor","#a56cc1").end()
	
	colorLi.click(function(){
		
	   $("link[href *='theme']").attr("href",$(this).attr("data-value"));
		
		
	});
	
	
	// cashing the scroll up 
	
	var scrollButton =$("#scroll-top");
	$(window).scroll(function()
					 
    {
	  	console.log($(this).scrollTop());
		 
		if ($(this).scrollTop()>=700)
			
			{
				
				scrollButton.show();
			}
		else 
		{
			scrollButton.hide();
			
		}
		
		// click on button to scroll top 
		
		scrollButton.click(function(){
			
			$("html,body").animate({scrollTop:0},600);
			
			
		});
		
	});
	
	
	
	// loadding function
	
	$(window).on('load',function(){
		
		$("body").css("overflow","auto");
		
		$(".loading-overlay .spinner").fadeOut(2000,function(){
			
			$(this).parent().fadeOut(1000);
		});
	});
	
	
	
	
	
	
	
	
	// loadding function
	/*
	$(window).load(function(){
		
		$("body").css("overflow","auto");
		
		$(".loading-overlay .spinner").fadeOut(2000,function(){
			
			$(this).parent().fadeOut(1000);
		});
	});
	*/
	
});