var app = angular.module("ProgramInk", []);

$(document).ready(function(){
    $('.menu-home').hover(function(){
    	$('#menu-home').css({left: "85px", opacity: "1" });
	}, function() {
    $('#menu-home').css({left: "70px", opacity: "0" });
	});

	$('.menu-job').hover(function(){
    	$('#menu-job').css({left: "85px", opacity: "1" });
	}, function() {
    $('#menu-job').css({left: "70px", opacity: "0" });
	});

	$('.menu-category').hover(function(){
    	$('#menu-category').css({left: "85px", opacity: "1" });
	}, function() {
    $('#menu-category').css({left: "70px", opacity: "0" });
	});

	$('.menu-forum').hover(function(){
    	$('#menu-forum').css({left: "85px", opacity: "1" });
	}, function() {
    $('#menu-forum').css({left: "70px", opacity: "0" });
	});

	$('.menu-settings').hover(function(){
    	$('#menu-settings').css({left: "85px", opacity: "1" });
	}, function() {
    $('#menu-settings').css({left: "70px", opacity: "0" });
	});
});