var n = prompt("Nhập số nguyên dương n:",'');
var gt=1;
var sum =0;
for(var i = 1;i<=n;i++){
	var gt = gt*i;
	sum +=i/gt;
}
document.write("Tổng S = 1/1!+2/2!+...+n/n! ="+sum+" (n = "+n+")");