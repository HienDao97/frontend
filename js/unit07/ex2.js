var n = prompt("Nhập số nguyên n(n>1)",'');
var i=1;
var sum = 0;

if(n>1){
	do{
		sum= sum+i;
		i++;
	}while(i<=n);
	document.write("Tổng s = 1+..+"+n+"="+sum);
}else{
	 alert("Bạn nhập số nguyên chưa thỏa mãn điều kiện");
	

}