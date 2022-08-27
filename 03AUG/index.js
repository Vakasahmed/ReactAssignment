function swap(a,b){
  b = ((a+b)-(a=b));
  console.log(a,b);
}
swap(5,3)

// confirm("Hello");

function returnString(c){
    let b = '';
    let a = 'abcdefghijklmnopqrstuvwxyz';
    for(let i = 0 ; i<c;i++){
     b += a.charAt(Math.random()*c );
    }
    console.log(b);

}
returnString(23);



// function fn(){
//   return prompt("Hello WOrld");
// }

// let ans = fn();
// console.log(ans);
// let a = function(){
//   let c = 4+5;
//   console.log(c)
// }
// a();

// (function(){
//   let c = 3*1*2;
//   console.log(c);
// })();


const grade = "firstclass";
switch(grade){
  case "firstclass":
    console.log("marks between 75 to 85");
    break;
    case "second class":
      console.log("marks between 65 to 75");
      break;
      case "fail":
        console.log("marks less than 40");
        break;
        default :
        console.log("not available");
        break;
}