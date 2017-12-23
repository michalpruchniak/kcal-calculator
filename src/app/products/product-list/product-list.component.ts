import { Component, OnInit } from '@angular/core';
import { product } from '../product.module';
import { ProductsService } from '../products.service';
import { DietService } from '../../diet-plan/diet.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: product[];
  constructor(
    private productsService: ProductsService,
    private dietService: DietService
  ) { }
  ngOnInit() {
    this.productsService.getProducts().then(
      products => this.products = products
    )
}
}
