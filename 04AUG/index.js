// function vowels(...arr){
// let count = 0;
// let result = 0;
// for(let i = 0 ; i < arr.length; i++){
//     for(let j = 0 ; j <arr[i].length;j++){
//         if(arr[i].charAt(j) == 'a' || arr[i].charAt(j) == 'i' || arr[i].charAt(j) == 'o' || arr[i].charAt(j) == 'u' || arr[i].charAt(j) == 'e'){
//             count++;
//             if(result<count){
//                 result = count;
                
//             }
//         }
//         else {
//             count = 0;
//         }
//     }
// }
// console.log(result);
// }
// vowels('shaiouio','sdoiuoeuio');

// function add(...others){
//     console.log(others);
// }
// add(12,34,34);
// let a=[[7,8,9],[4,5,6],[1,2,3]]
// console.log(a[1][1])


function vowels(...arr){
    let count = 0;
    let result = 0;
    for(let i = 0 ; i < arr.length; i++){
        for(let j = 0 ; j <arr[i].length;j++){
            let a = arr[i].charAt(j);
            if(a == 'a' || a == 'i' || a == 'o' || a == 'u' || a == 'e'){
                count++;
                if(result<count){
                    result = count;
                    count =0;
                }
            }
        }
    }
    return result;
    }
    let ans = vowels('weruioii','sikhee')
    console.log(ans)