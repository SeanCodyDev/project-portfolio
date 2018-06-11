

function handleNavClick() {
	$('.js-nav-button').click(function(){
		console.log('handleNavClick ran');
		let tab_id = $(this).attr('data-tab');


		$('.js-nav-button').removeClass('active-button');
		$(this).addClass('active-button');
		$(".content-page").removeClass('active-tab');
		$("."+tab_id).addClass('active-tab');
	});
};

handleNavClick();

