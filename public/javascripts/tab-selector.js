$(document).ready(function(){

$('.tab-btn').on('click', function(){
		$('a.is-selected').removeClass('is-selected');
		$(this).addClass('is-selected');
	});
});