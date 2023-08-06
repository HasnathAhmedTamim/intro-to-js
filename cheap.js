
const phones = [
    {name:'samsung' , camera : '120', storage:'32gp' , price: 2223000,color:'silver'},
    {name:'iphone' , camera : '121', storage:'34gp' , price: 44000,color:'red'},
    {name:'xao-mi' , camera : '122', storage:'36gp' , price: 54000,color:'blue'},
    {name:'walton' , camera : '123', storage:'38gp' , price: 66000,color:'green'},
    {name:'nokia' , camera : '124', storage:'30gp' , price: 76000,color:'white'}

];
//console.log(phones)

//price to price , cam to cam , 
function cheapestPhone (phones){
    var x;
    var y;
    let cheapest = phones[0];
    let highestcam = phones[0];
    
    for(let i=0; i<phones.length;i++){
        let phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
         if(phone.camera > highestcam.camera){
            highestcam = phone;
        }
       // console.log(phone);
    }
    
    return{
       x: cheapest,
       y:highestcam
    } ;
}

const selectedPhone = cheapestPhone(phones);
//console.log(selectedPhone);
console.log('for cheap phone:' ,selectedPhone.x,'\n','for highes camera :',selectedPhone.y);