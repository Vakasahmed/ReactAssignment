const products = [ 
{ product: 'banana', price: 3 },
{ product: 'mango', price: 6 },
{ product: 'potato', price: ' ' },
{ product: 'avocado', price: 8 }, 
{ product: 'coffee', price: 10 }, 
{ product: 'tea', price: '' }, 
];
// console.log(products);
let totalPrice = 0;
// parse
products.forEach(e=>{
    if(typeof e.price=="number"){
totalPrice+=e.price};
});
console.log(totalPrice);


const price_products = products.filter(e=>{
    if(e.price >= 1 ){
        return true;
    }
    else{
        false;
    }
});

console.log(price_products);

const avocado = products.find(e=>{
if(e.product == "avocado"){
return true;
}
else{
    return false;
}
});

console.log(avocado);