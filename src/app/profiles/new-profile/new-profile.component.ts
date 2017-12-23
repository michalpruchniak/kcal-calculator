import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class NewProfileComponent implements OnInit {

newElementForm: FormGroup;
newElement = {
  name: '',
  weight: parseInt(''),
  active: parseFloat("1.1"),
  goal: parseInt("1"),
  amount: parseInt(''),
  kcal: parseInt(''),
  protein: parseInt(''),
  carbo: parseInt(''),
  fat: parseInt('')

}
getNutriants(){
  let currentKcal = 0;
  this.newElement.protein = this.newElement.weight * 2;
    currentKcal += this.newElement.protein * 4;
  this.newElement.fat = this.newElement.weight * 0.5;
    currentKcal += this.newElement.fat * 9;
  this.newElement.carbo = (this.newElement.kcal - currentKcal)/4;
}

onAddNewProfile(){
  let PPM = 24 * this.newElement.weight,
      active = this.newElement.active;
  let kcal = PPM * active;
  if(this.newElement.goal == 1){
    kcal -= this.newElement.amount;
  } else {
    kcal += this.newElement.amount;
  }
  this.newElement.kcal = kcal;
  this.getNutriants();
  this.profilesService.addNewProfile(Object.assign({}, this.newElement));
}
  constructor(
    private profilesService: ProfilesService
  ) { }

  ngOnInit(): void {
    this.newElementForm = new FormGroup({
      'name': new FormControl(this.newElement.name, [
        Validators.required,
        Validators.minLength(3)
      ]),
      'weight' : new FormControl(this.newElement.weight, Validators.required),
      'goal' : new FormControl(this.newElement.goal, Validators.required),
      'amount' : new FormControl(this.newElement.amount, Validators.required)
    });
  }
}
