
import { getAllProducts, getProductById } from './products.js'
import { getAllBrands, getBrandById } from './brands.js'

getAllProducts()
console.log(getAllProducts(),"All Products:");

getProductById()
console.log("Product with ID 2:", getProductById(2));

getAllBrands()
console.log("All Brands:", getAllBrands());

 getBrandById()
console.log("Brand with ID 1:", getBrandById(1));
