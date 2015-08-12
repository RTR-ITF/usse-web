		 $(window).load(function() {
		 $('#loading').hide();
		 document.getElementById("slider").style.display = "block";
		});
		
		$(document).ready(function () {

		$(window).scroll(function () {
				if ($(this).scrollTop() > 200) {
					$('.scrollup').fadeIn();
				} else {
					$('.scrollup').fadeOut();
				}
			});
			

			$('.scrollup').click(function () {
				$("html, body").animate({
					scrollTop: 0
				}, 600);
				return false;
			});

		});
		
		$('#navigation').slimmenu(
		{
			resizeWidth: '1000',
			collapserTitle: '',
			animSpeed: 'medium',
			easingEffect: 'linear',
			indentChildren: false,
			childrenIndenter: '&nbsp;'
		});
		
		
		 $('.carousel').carousel({
        interval: 5000 //changes the speed
    });
	
	
