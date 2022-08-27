// function countWords(str){
// let a = str.split(" ");
// let count = 0;
// for(let i = 0 ; i<a.length;i++){
//     count++;
// }
// console.log(count);
// }
// countWords("Hello World hii");

// mean median mode
function arrayMethod(){
let arr=[1,2,3,4,5,6,7,8,9,10];
let mean ;
let sum = 0;
for(let i = 0 ; i<arr.length;i++){
     sum = sum + arr[i];
}
mean = sum/arr.length;
console.log(mean);
}
arrayMethod();

function median(){
    let arr=[1,2,3,4,5,6,7,8,9,10];
    let median = arr.length/2;
    console.log(median);
}
median();

function mode(){
    let arr = [1,2,3,2,3,3,5,7,4,4];
    let fmap = createFrequencyMap(arr);
    for(let i = 0 ; i<256;i++){
      
}
}
mode();

function createFrequencyMap(){
    let arr = [1,2,1,3,1,2,3,4,4,1];
    let n = arr.length;
     let fmap = new Array(256);
     for(let i = 0 ; i < n; i++){
        let ch = arr[i];
        fmap[ch]++;
     }
     return fmap;
}
createFrequencyMap();

console.warn(3+2.2);


