//1. Given an array․ Compute the length of the array. (without using .length)
//Ուրիշ տարբերակով չկարողացա
let arr = [1, 12, 4];
console.log(arr.length);
//2.Given an array of numbers. Print the sum of the elements in array.
let arr = [1, 12, 4];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
//3.Given two numbers. Print powers of 2 between that numbers. (without using
//Math.pow)
let a = 7;
let b = 45;
for (let i = 8;i <= b;i=i*2){
   console.log(i)
}
// 4.Given a number as input, insert dashes (-) between each two even numbers.
//Օգտվել եմ Youtube-ից,բայց հասկացել եմ
function isEven(num){
return num % 2 === 0;
}
function insert(num){
let outpute = "";
let numStr= num.toString();
for(let i = 0; i< numStr.length;i++){
  const curr = numStr[i];
  const next = numStr[i + 1];
  if(isEven(curr) && isEven(next)){
     outpute+=curr + "-";
  }else{
    outpute+=curr;
  }
}
return outpute
}
console.log(insert(22222))
//5 --------------
