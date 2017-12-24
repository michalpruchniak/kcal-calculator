import { Observable } from 'rxjs/Observable';
import { dietEl }  from './diet.module';
import { PRODUCTS } from './diet';

export class DietService{
  getDiet(): Promise<dietEl[]>{
    return Promise.resolve(PRODUCTS);
  }
  newElement(element){
    PRODUCTS.push(element);
  }

  onDelEl(element){
    PRODUCTS.splice(element, 1);
  }
  totalKcal(){
    var hello = {
      kcal: 0,
      protein: 0,
      carbo: 0,
      fat: 0
    }
    for(var product of PRODUCTS){
      hello.kcal += product.kcal * product.weight/100;
      hello.protein += product.protein * product.weight/100;
      hello.carbo += product.carbo * product.weight/100;
      hello.fat += product.fat * product.weight/100;
    }
    return hello;
  }

  }
