//1)Given three numbers a, b (a ≤ b) and step. Create an array of evenly spaced elements
//starting from a to b spaced by step.
let arr1 = [];
let a = 1;
let b = 5;
let c = 0.5;
for(let i = a; i <= b;i=i+c){
    arr1.push(i);
}
 console.log(arr1);
 //2)Given a string and a symbol. Find the number of occurrences of the symbol in the string.
 //1.
let a = "another stringt";
console.log(a.split("t").length - 1);
//2.
let a = "Some text here";
if(a.split("").length = a.length){
  console.log(0)
}
//3)---
//4)Given an array of numbers. Find the maximum element in array.
let arr = [1, 10, 2, 2, 3];
console.log(Math.max(...arr));
//5)Given an array. Create the array which elements are products between two neighbours.
//Դավիթ ջան ըստ ինձ պետք է աշխատի,բայց չի աշխատում,չեմ հասկանում պատճառը
function multiply (array) {
   let arr2 = []
   let sum=1;
    for (let i=0; i<array.length; i++) {
        sum = arr[i] * array[i+1];
        arr2.push(sum)
    }
    return arr2;
}
multiply([3, 7, 12, 5, 20, 0]);

//6)Given a string and symbols. Change first symbol by the second one in the string.
let a ='does the following code';
let b = a.replace(/o/g, '0');
console.log(b);

//7)Print the following number pattern:
//Գիտեմ որ շատ վատ տարբերակ է,ուղղակի ժամանակ չունեի շատ մտածելու:
console.log(1)
console.log("1" + "2")
console.log("1" + "2" +"3")
console.log("1" + "2" + "3"+ "4")
console.log("1" + "2" + "3"+ "4" + "5")
console.log("1" + "2" + "3"+ "4")
console.log("1" + "2" +"3")
console.log("1" + "2")
console.log(1)
