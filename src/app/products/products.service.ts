import { Observable } from 'rxjs/Observable';
import { product } from './product.module';
import { PRODUCTS } from './products'


export class ProductsService {
  getProducts(): Promise<product[]>{
    return Promise.resolve(PRODUCTS);
  }
  addNewProduct(element){
    PRODUCTS.push(element);
  }
}
