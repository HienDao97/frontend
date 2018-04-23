$(function(){
	// $('#div')//=document.getElementById('div')
	// // $('.text').css('color','red')
	// $('.text,.h3').css({'color':'red','fontSize':'30px'})

	// $('#click').click(function(){
	// 	$('div').toggle();
	// })

	// $('#show').click(function(){
	// 	$('p').show(1000,function(){
	// 		// window.location.href="https://google.com"
	// 		$('div').show();
	// 	});
	// })
	// $('#hide').click(function(){
	// 	$('p').hide(2000,function(){
	// 		alert('Ahihi');
	// 	});
	// })

	// $('button').click(function(){
	// 	$('div').animate({
	// 		left:'200',
			
	// 	},2000,function(){
	// 		$('div').css('backgroundColor','green');

	// 	}).slideToggle(5000).slideToggle(5000);
	// })
	$('div').click(function(){
		var abc = $(this).attr('abc');
		var name = $(this).data('school');
		alert(abc +name);
	})

});