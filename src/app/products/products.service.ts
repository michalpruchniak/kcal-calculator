import { Observable } from 'rxjs/Observable';
import { product } from './product.module';
import { PRODUCTS } from './products'


export class ProductsService {
  getProducts(): Promise<product[]>{
    return Promise.resolve(PRODUCTS);
  }
  addNewProduct(element){
    let index = PRODUCTS.length-1;
    let id = PRODUCTS[index].id;
    id++;
    element.id = id;
    PRODUCTS.push(element);
  }
}
