import { Component, OnInit, Input } from '@angular/core';
import { dietEl } from '../diet.module';
import { DietService } from '../diet.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input() element: dietEl[];
  @Input() ind;

  nutrition(weight, n){
    return weight * n / 100;
  }

onDelElement(index){
  this.dietService.onDelEl(index);
}

  constructor(
    private dietService: DietService
  ) { }

  ngOnInit() {
  }

}
