 var count=0;

 	for (var i =  1; i <=100 ; i++) {
 		if(i%3==0||i%7==0){
 			count+=1;
			document.write(i+"<br>");
 		}
 	} 	document.write("số lượng các số chia hết cho 3 hoặc 7 là :"+count +"<br>");
 
