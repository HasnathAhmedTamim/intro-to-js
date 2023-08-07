function factorial(number){
    let res = 1;
    for( let i =number; i>=1;i-- ){
        
        res = res * i;
    }
    return res
}
var y = 6;
var x = factorial(y);

console.log('factorial of: ',y,'is',x);