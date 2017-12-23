import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

newElementForm: FormGroup;
  newElement = {
    name: '',
    kcal: '',
    protein: '',
    carbo: '',
    fat: ''
  };
  goBack(){
    this.location.back();
  }
  onAddNewProduct(){
    this.productsService.addNewProduct(Object.assign({}, this.newElement));
  }


    ngOnInit(): void {
      this.newElementForm = new FormGroup({
        'name': new FormControl(this.newElement.name, [
          Validators.required,
          Validators.minLength(3)
        ]),
        'kcal' : new FormControl(this.newElement.kcal, [Validators.required]),
        'protein' : new FormControl(this.newElement.protein, [Validators.required]),
        'carbo' : new FormControl(this.newElement.carbo, [Validators.required]),
        'fat' : new FormControl(this.newElement.fat, [Validators.required])
      });
    }
    constructor(
      private productsService: ProductsService,
      private location: Location
    ){ }

}
