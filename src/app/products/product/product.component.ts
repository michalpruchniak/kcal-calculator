import { Component, Input, OnInit } from '@angular/core';
import { product } from '../product.module';
import { DietService } from '../../diet-plan/diet.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: product[];
  onAddNewElement(element, weight){
    let newElement = {...element, weight: parseInt(weight)};
    this.dietService.newElement(newElement);
  }
  constructor(
    private dietService: DietService
  ) { }

  ngOnInit() {
  }

}
