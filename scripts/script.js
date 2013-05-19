$(document).ready(function(){
    $('a').click(function(){
		alert("Hello World!");
	});
	$('div').click(function(){
		$('div').fadeOut('slow');
	});
});