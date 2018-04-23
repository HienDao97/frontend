var n = prompt("Nhập số nguyên dương n:",'');
var sum =0;

for (var i =1; i <=n;i++){
	sum +=1/i;

}
document.write("Tổng S= 1+1/2+...+1/n ="+sum+"( với n = "+n+")");