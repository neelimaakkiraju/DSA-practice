// calculate total price

const products = [
  { name: "Laptop", price: 65000 },
  { name: "Smartphone", price: 28000 },
  { name: "Headphones", price: 3500 },
  { name: "Smartwatch", price: 12000 },
  { name: "Keyboard", price: 1800 },
  { name: "Mouse", price: 1200 },
  { name: "Monitor", price: 15000 }
]

let totalPrice = products.reduce((acc,product)=>{
    console.log(acc)
    return acc + product.price
}, 0)

console.log(totalPrice)