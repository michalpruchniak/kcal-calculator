import { Component, OnInit } from '@angular/core';
import { DietService } from '../diet.service';
import { dietEl } from '../diet.module';

@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.css']
})
export class DietPlanComponent implements OnInit {

  dietList: dietEl[];

  constructor(
    private dietService: DietService
  ) { }

  ngOnInit() {
    this.dietService.getDiet().then(
      element => this.dietList = element
    );
  }

}
