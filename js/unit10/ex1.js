// function myFuction(){
// 	var x = ("#menu");
// 	if(x.className==="myMenu"){
// 		x.className+="reponsive";
// 	}else{
// 		x.className="myMenu";
// 	}
// }
$(function(){
	
	$("#bar").click(function(){
		$("#menu").show(1000,function(){
			$("#bar").hide(function(){
				$("#close").show();
			})
		});

	
	})
	$("#close").click(function(){
		$("#menu").hide(200,function(){
			$("#close").hide(function(){
				$("#bar").show();
			})
		})
	})

});

