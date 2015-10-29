$(document).ready(function(){  // 
// ----------------------------------------------------------------------------
$('.fadeitem').css('opacity', '0.25');

$('.fadeitem').mouseenter(function(){
	$('.fadeitem').fadeTo('fast', 1)
});

$('.fadeitem').mouseleave(function(){
	$('.fadeitem').fadeTo('fast', 0.25)
});
// ----------------------------------------------------------------------------
}); // do not delete
