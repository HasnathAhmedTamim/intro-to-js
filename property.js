 var shopCart = {
    books: 43,
    sunglass : 33,
    keybd : 23,
    mouse : 13,
    pen : 34

 }
 var penCount = shopCart.pen;

 var penCount2 = shopCart['pen'];
 console.log(shopCart);
 //
var propertiesOfKeys = Object.keys(shopCart);
console.log(propertiesOfKeys);
//
 var propertiesOfValues = Object.values(shopCart);
console.log(propertiesOfValues);

//set property values
shopCart.keybd = 50;

console.log(shopCart);

shopCart['keybd']   = 53;
console.log(shopCart);