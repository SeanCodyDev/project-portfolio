

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

function handleProjectsClick() {

	$('#js-projects-button').click(function(){
		console.log('projects button clicked');
		$('.js-nav-button').removeClass('active-button');
		$('#nav-projects-button').addClass('active-button');
		$(".content-page").removeClass('active-tab');
		$('.projects').addClass('active-tab');
	});
};

handleNavClick();
handleProjectsClick();

