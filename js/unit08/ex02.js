
function maxsize() {
 
	var p = document.getElementsByTagName('p');
	for(i=0;i<p.length;i++) {
	 
	if(p[i].style.fontSize) {
	var s = parseInt(p[i].style.fontSize.replace("px",""));


	 } else {
	 
	 var s = 15;
	 }

	 s =s*1.4;
	 
	p[i].style.fontSize = s+"px"
	 
	}
}
function minsize() {
	var p = document.getElementsByTagName('p');
	for(i=0;i<p.length;i++) {
	 
	if(p[i].style.fontSize) {
	var s = parseInt(p[i].style.fontSize.replace("px",""));
	} else {
	 
	var s = 15;
	}
	
	 
	s =s*0.6;
	
	p[i].style.fontSize = s+"px"
	 
	}
}
function macdinh(){
	var p = document.getElementsByTagName('p');
	for(i=0;i<p.length;i++) {
	 
	var s=15;
	
	p[i].style.fontSize = s+"px"
	 
	}
}