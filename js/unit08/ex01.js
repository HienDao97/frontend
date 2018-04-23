function hover(x){
	x.style.backgroundColor="#4dff88";
}
function normal(x){
	x.style.backgroundColor="#809fff";
}
function checkall(){
	var t =document.getElementsByName('form');
	for(var i=0;i<t.length;i++){
		t[i].checked= "checked";
	}
}
function uncheckall(){
	var t =document.getElementsByName('form');
	for(var i=0;i<t.length;i++){
		t[i].checked= "";
	}
}