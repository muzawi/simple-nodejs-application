
const products = [
    { id: 1, name: "Laptop", brandId: 1, price: 1200 },
    { id: 2, name: "Smartphone", brandId: 2, price: 800 },
    { id: 3, name: "Tablet", brandId: 3, price: 600 },
    { id: 4, name: "Smartwatch", brandId: 1, price: 300 }
  ];
  
  export function getAllProducts() {
    return products;
  }
  
 export function getProductById(id) {
    return products.find(product => product.id === id);
  }
  
  