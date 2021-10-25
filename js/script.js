// event pada saat link di klik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');

	e.preventDefault();

});

// parallax
$(window).on('load', function(){
	$('.kiri').addClass('kiri-go');
	$('.kanan').addClass('kanan-go')
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform': 'translate(0px, '+ wScroll / 4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform': 'translate(0px, '+ wScroll / 2 +'%)'
	});

	$('.jumbotron p').css({
		'transform': 'translate(0px, '+ wScroll / 1.2 +'%)'
	});


	// portfolio
	if( wScroll > $('.portfolio').offset().top - 600 ) {
		
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 180 * (i+1))

		});

	}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
// Create gradient
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);

});










