// const text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
// let a = text.split(" ");
// // console.log(a)
// let ans = a.reduce((c,e)=>{
//     c = c+1
//    return c+e
// },0);
// console.log(ans)

const detail = [
  {
    id: 1,
    userId: 1,
    date: "2020-03-02T00:00:02.000Z",
    products: [
      { productId: 1, quantity: 4 },
      { productId: 2, quantity: 1 },
      { productId: 3, quantity: 6 },
    ],
    __v: 0,
  },
  {
    id: 2,
    userId: 1,
    date: "2020-01-02T00:00:02.000Z",
    products: [
      { productId: 2, quantity: 4 },
      { productId: 1, quantity: 10 },
      { productId: 5, quantity: 2 },
    ],
    __v: 0,
  },
  {
    id: 3,
    userId: 2,
    date: "2020-03-01T00:00:02.000Z",
    products: [
      { productId: 1, quantity: 2 },
      { productId: 9, quantity: 1 },
    ],
    __v: 0,
  },
  {
    id: 4,
    userId: 3,
    date: "2020-01-01T00:00:02.000Z",
    products: [{ productId: 1, quantity: 4 }],
    __v: 0,
  },
  {
    id: 5,
    userId: 3,
    date: "2020-03-01T00:00:02.000Z",
    products: [
      { productId: 7, quantity: 1 },
      { productId: 8, quantity: 1 },
    ],
    __v: 0,
  },
  {
    id: 6,
    userId: 4,
    date: "2020-03-01T00:00:02.000Z",
    products: [
      { productId: 10, quantity: 2 },
      { productId: 12, quantity: 3 },
    ],
    __v: 0,
  },
  {
    id: 6,
    userId: 8,
    date: "2020-03-01T00:00:02.000Z",
    products: [{ productId: 18, quantity: 1 }],
    __v: 0,
  },
];

console.log(detail);
 const product = detail.map(e=>e.products);
 console.log(product);
 const flat_detail = product.flat();
 console.log(flat_detail);
//  const ans = flat_detail.filter(e=>e.productId==1);
//  console.log(ans);
//  const total_Quantity = ans.reduce((c,e)=>c+e.quantity,0);
//  console.log(total_Quantity)
// // 2nd Task
//  const total = flat_detail.reduce((c,e)=>c+e.quantity,0);
//  console.log(total);

//  2nd Task
