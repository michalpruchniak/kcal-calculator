import { Component, OnInit, DoCheck, AfterContentInit } from '@angular/core';
import { ProfilesService } from '../../profiles/profiles.service';
import { DietService } from '../../diet-plan/diet.service';

@Component({
  selector: 'app-short-information',
  templateUrl: './short-information.component.html',
  styleUrls: ['./short-information.component.css']
})
export class ShortInformationComponent implements DoCheck {
  public bulletKcal: any[];
  public bulletValueKcal: any;
  public bulletProtein: any[];
  public bulletValueProtein: any;
  public bulletCarbo: any[];
  public bulletValueCarbo: any;
  public bulletFat: any[];
  public bulletValueFat: any;
  
  constructor(
    private profilesService: ProfilesService,
    private dietService: DietService
  ) { }

  ngDoCheck() {
    let profile = this.profilesService.getProfile();
    let currentValues = this.dietService.totalKcal();
    if(profile !== undefined) {
      this.bulletKcal = [this.dietService.totalKcal().kcal, profile.kcal];
      this.bulletValueKcal = {
          min: 0,
          max: profile.kcal * 1.1
      };
      this.bulletProtein = [this.dietService.totalKcal().protein, profile.protein];
      this.bulletValueProtein = {
          min: 0,
          max: profile.protein * 1.1
      };
      this.bulletCarbo = [this.dietService.totalKcal().carbo, profile.carbo];
      this.bulletValueCarbo = {
          min: 0,
          max: profile.carbo * 1.1
      };
      this.bulletFat = [this.dietService.totalKcal().fat, profile.fat];
      this.bulletValueFat = {
          min: 0,
          max: profile.fat * 1.1
      };
      };

    }

}
