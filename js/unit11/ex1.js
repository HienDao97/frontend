
var tabIndex=1;
Show(tabIndex);
var check= false;

function minus(n){
	Show(tabIndex+=n);
}

function plusTab(n){
	var bien = tabIndex;
	var s1 = $('#user').val();
	var s2 = $('#pass').val();
	var s3 = $('#re-pass').val();
	
	
	//console.log(bien);
	//Show(tabIndex+=n);
	if(bien==1){
		check= Check1();
		if(check==true && s1!="" && s2.length>4 &&s2==s3){
			Show(tabIndex+=n);

		}else{
			//Show(1);
			$('.tablinks').eq(0).css("cssText","background-color:red !important");
			//
			//alert('Nhap chua chinh xac');
		}

	}else if(bien==2){
		check= Check2();
		var reg_mail = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
		var m = $('#mail').val();
		
		var tuoi = $('#age').val();
		if(check==true&&tuoi>18 &&reg_mail.test(m) == true){
			Show(tabIndex+=2);
			

		}else if(check==true&&tuoi<18 &&reg_mail.test(m) == true){
			Show(tabIndex+=n);
			
		}else{
			$('.tablinks').eq(1).css("cssText","background-color:red !important");
			//Show(tabIndex);
		}
	}
	else{
		var box = document.getElementById('checkbox').checked;
		if(box==false){
			alert('Do you agree?');
		}
		else{
			alert("Dang ky thanh cong .")

		}
	}
	// bien+=1;
	
}

function Show(n){
	var tab = $('.tabcontent');
	//var tab = document.getElementsByClassName("tabcontent");
	console.log(tab);
	var dot= $('.tablinks');
	if(n>tab.length){
		tabIndex=tab.length;
		
	}
	if(n<1){
		
		tabIndex=1;
	}
	for(var i =0; i<tab.length;i++){
		tab[i].style.display="none";
	}
	for(var i =0;i<dot.length;i++){
	   //	dot[i].className=dot[i].className.replace("active","");
	   if(i==tabIndex-1){
	   	$(dot).eq(i).css('background','blue');
	   }else{
	   	$(dot).eq(i).css('background','#808080');
	   }

	}

	//tab[tabIndex-1].style.display="block";
	$('.tabcontent').eq(tabIndex-1).show('slide',{duration:'right'},700);
	//$('tabcontent').eq(tabIndex-1).show(2000);
	//dot[tabIndex-1].className+="active";

}
function Check1() {

	// body...
	var flag = false;
	var str= new Array();
	str[0] = $('#user').val();
	str[1] = $('#pass').val();
	str[2] = $('#re-pass').val();

	var error= new Array();
	error[0]='Ban chua nhap ten';
	error[1]='Ban chua nhap mat khau';
	error[2]='Ban chua nhap lai mat khau';
	var nearby =  new Array("#user-name","#password","#re-password");
	for (var i =0;i<3;i++) {
		var err = error[i];
		var div = nearby[i];
		if(str[i]==""){
			$(div).find('span').html(err);


			flag= false;
		}else{
			flag= true; 
			// $('#prev').css('disable','false');
			// $('prev').css('background-color','blue');

			//$('#Tab2').show();
		}

	}
	return flag;
	
}

function Check2() {

 	// body...
 	var flag = false;
 	var str= new Array();
 	str[0] = $('#fname').val();
 	str[1] = $('#lname').val();
 	str[2] = $('#mail').val();

 	var error= new Array();
 	error[0]='Ban chua nhap ten';
 	error[1]='Ban chua nhap ho';
 	error[2]='Ban chua nhap email';
 	var nearby =  new Array("#First-name","#Last-name","#Email");
 	for (var i =0;i<3;i++) {
 		var err = error[i];
 		var div = nearby[i];
 		if(str[i]==""){
 			$(div).find('span').html(err);
 			flag= false;
 		}else{
 			flag= true; }
 		}
 		return flag;

 	}

 	$(function(){
 		$('input').focusin(function(){
 			$(this).css('background-color','#ffcce6');
 		})

 		$('#pass').on('keyup',function(){
 			if($('#pass').val().length<5){

 				$("#password").find('span').html("Mat khau nhieu hon 4 ky tu");
 			}else{

 				$("#password").find('span').html("");
 			}
 		})

 		$('#re-pass').on('keyup',function(){
 			if($('#pass').val()==$('#re-pass').val()){
 				$('#re-password').find('span').html("");
 			}else{
 				$('#re-password').find('span').html("Mat khau chua khop");
 			}
 		})
 		$('#mail').on('keyup',function(){
 			var reg_mail = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
 			var m = $('#mail').val();
 			if(reg_mail.test(m) == true){
 				$('#Email').find('span').html("");

 			}else{
 				$('#Email').find('span').html("Email co dang abc@gmail.com");
 			}
 		})

 	});