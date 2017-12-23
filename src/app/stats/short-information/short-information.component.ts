import { Component, OnInit, DoCheck, AfterContentInit } from '@angular/core';
import { ProfilesService } from '../../profiles/profiles.service';
import { DietService } from '../../diet-plan/diet.service';

@Component({
  selector: 'app-short-information',
  templateUrl: './short-information.component.html',
  styleUrls: ['./short-information.component.css']
})
export class ShortInformationComponent implements DoCheck {
  public bulletData: any[];
  public bulletValueAxis: any;
  constructor(
    private profilesService: ProfilesService,
    private dietService: DietService
  ) { }

  ngDoCheck() {
    let profile = this.profilesService.getProfile();
    let currentValues = this.dietService.totalKcal();
    console.log(profile);
    if(profile !== undefined) {
  this.bulletData = [this.dietService.totalKcal().kcal, profile.kcal];
  this.bulletValueAxis = {
          min: 0,
          max: profile.kcal * 1.1
      };
    }

}
}
