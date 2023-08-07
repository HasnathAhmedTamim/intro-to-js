 var shopCart = {
    books: 43,
    sunglass : 33,
    keyboard : 23,
    mouse : 13,
    pen : 34,
    bootle : 15,
    shoes : 99

 }

 const keys = Object.keys(shopCart);
 console.log(keys);

const values = Object.values(shopCart);
console.log(values);

for(var i =0; i < keys.length; i++)
{
    var pn = keys[i];
    var pv = shopCart[pn];
    console.log(pn,pv);
}