//1.For a given number calculate the sum of its digits.
var value = +prompt('Write a number'),
    sum = 0;
while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}
console.log(sum);

//2.Given three sides of a triangle. Check whether the triangle is valid or not. Print “yes” if it is valid
//and “no" otherwise. (Triangle is valid if the sum of its two sides are greater than the third side).
let a = +prompt('Գրեք եռանկյունի էջը:');
let b = +prompt('Գրեք եռանկյունի էջը:');
let c = +prompt('Գրեք եռանկյունի ներքնաձիգը:')

if(a + b > c){
    console.log('yes');
} else{
    console.log('no');
}
//3.Given a number print its digits count.
let  num = +prompt('Write a number');
let  x = Math.floor(Math.log10(Math.abs(num))) + 1;
console.log(x);
//4.Count numbers of digit 9 in a number.
let num = +prompt("Write a number");
let z = 0;
for(;num!==0;num=(num-num%10)/10){
 let c=num%10;
 if(c == 9){
    z = z + 1;
 } else{
   console.log(z);
 }
}
//5.Given a positive number. Print it in reverse order.
let num = +prompt("Write a number");
let a = 0;
while(num != 0){
	let z = num % 10;
  a = a * 10 + z;
  num = Math.floor(num/10);
  }
console.log(a);
