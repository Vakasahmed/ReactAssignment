function checkPrime(){
   
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}
else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
else {
    console.log("The number is not a prime number.");
}
    }
checkPrime();


function fizzBuzz(){
    for(let i = 1 ; i <= 200 ; i++){
        if(i%15==0){
            console.log("FIZZBUZZ");
        }
        else if(i%5==0){
            console.log("BUZZ");
        }
        else if(i%3==0){
            console.log("FIZZ");
        }
        else{
            console.log(i);
        }
    }
}
fizzBuzz();