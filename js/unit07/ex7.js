
for(var i=0;i<7;i++){
	for(var j=0;j<=i;j++){
		document.write("*");
	}
	document.write("<br>");
}

document.write("<br><br>");



for(var i=0; i<7;i++){
	for(var j=0;j<7;j++){
		document.write("*");
	}
	document.write("<br>")
}

document.write("<br>");

 for(var i=1;i<=7;i++){
 	if(i==1||i==7){
 		for(var j=0;j<7;j++){
 			document.write('*');

 		}
 		document.write('<br>');
 	}else{
 		for(var j =1;j<=7;j++){
 			if(j==1||j==7){
 				document.write('*');
 			}else{
 				document.write('&nbsp&nbsp');
 			}
 		}document.write('<br>');
 	}
 }


 // document.write('<table boder="0">');
 // for(var i=1;i<=7;i++){
 // 	document.write("<tr>");
 // 	for(var j=1;j<=7;j++){
 // 		if(j==1||j==7||i==1||i==7){
 // 			document.write("<td>");
 // 			document.write("*");
 // 			document.write("</td>");
 // 		}
 // 		else{
 // 			document.write("<td>");
 // 			document.write(" ");
 // 			document.write("</td>");
 // 		}
 // 	}
 // 	document.write("</tr>");
 // }


document.write("<br>");
document.write("<br>");
for(var i=7;i>0;i--){
	for(var j=1;j<=7;j++){
		if(i>=j){
			document.write("*");
		}
		
		else{
			document.write(" ")
		}
	}
	document.write("<br>");
}

document.write("<br>");
document.write("<br>");
