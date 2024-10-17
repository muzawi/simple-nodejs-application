
const brands = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Samsung" },
    { id: 3, name: "Microsoft" }
  ];
  
   export function getAllBrands() {
    return brands;
  }
  
 export function getBrandById(id) {
    return brands.find(brand => brand.id === id);
  }
  
  
  