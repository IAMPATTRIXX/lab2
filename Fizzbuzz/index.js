// let n = prompt ('Enter n for fizzbuxx program');
// console.log(n + '' +typeof(n));
console.log(fizzbuzz(25));
let n = Number(prompt('Enter Fizzbuzz'));
function fizzbuzz(n){
    let output =[];
    let text_output=[];
    for ( let i=1; i<=n;i++){
        if (i%3 === 0 && i%5 ===0 ){
            output.push('FizzBuzz');
            text_output += "FizzBuzz";
        }else if (i%5 ===0){
            output.push('Buzz');
            text_output += "Buzz";
        }else if (i%3 === 0){
            output.push('Fizz');
            text_output += "Fizz";
        }else {
            output.push(i);
        }
    }
    return output;
}
document.querySelector('#nn').textContent;
console.log(fizzbuzz(n));