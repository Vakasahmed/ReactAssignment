let array = [1,2,3,6,5,2,1];
let sum = 0;
for(let i = 0 ; i < array.length; i++){
    sum = sum + array[i];
}
console.log(sum);


// let arr = [1,33,4,7,9,7];
// let largestNum = 0;
// for(let i = 0 ; i < arr.length-1 ; i++){
//     if(arr[i]>arr[i+1]){
//         largestNum = arr[i];
//     }
//     else{
//         largestNum = arr[i+1];
//     }
// }
// console.log(largestNum);



let arr1 = [32,45,3,1,2,4,9,9,5];
let largestNumber = Math.max();
for(let i = 0 ; i < arr1.length ; i++){
    if(largestNumber<arr1[i]){
        largestNumber = arr1[i];
    }
    
}
console.log(largestNumber);

console.log(Math.max())
console.log(Math.min())

