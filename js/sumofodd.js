function getOddNumberOfAnArray (numbers)
{
    var oddnumArray = [];
    for( var i=0; i < numbers.length; i++){
        var idx = i;
        var elem = numbers[i];

        if( elem %2 !=0){
           console.log(idx,elem);
           oddnumArray.push(elem);
        }
    }
    return oddnumArray;
}
var numbers = [1,2,4,5,6,7,8,9,10,11,12,13];

var oddNum = getOddNumberOfAnArray(numbers);
console.log(oddNum);

function getOddSum(numbers){
    var sum = 0;
    for( var i=0; i < numbers.length; i++){
        var idx = i;
        var elem = numbers[i];

        sum = sum + elem;
    }
    return sum;
}
var sum = getOddSum(oddNum);
console.log(sum);