import { Component, OnInit, DoCheck } from '@angular/core';
import { DietService } from '../../diet-plan/diet.service';
import { ProfilesService } from '../../profiles/profiles.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements DoCheck {
  public data: any[];
  public currently: any[];
  public needs: any[];
  public activeProfile = true;

    public labelContent(e: any): string {
      return e.category;
    }
  constructor(
    private dietService: DietService,
    private profilesService: ProfilesService
  ) { }

  ngDoCheck() {
    const kcal = this.dietService.totalKcal().kcal;
    const protein = this.dietService.totalKcal().protein;
    const carbo = this.dietService.totalKcal().carbo;
    const fat = this.dietService.totalKcal().fat;

    //Needs
    const needs = this.profilesService.getProfile();
    if(needs !== undefined){
        const kcalNeeds = needs.kcal;
        const proteinNeeds = needs.protein;
        const carboNeeds = needs.carbo;
        const fatNeeds = needs.fat;
        this.needs = [kcalNeeds, proteinNeeds, carboNeeds, fatNeeds];
    } else {
      this.activeProfile = false;
    }
    this.data = [{
        kind: 'Protein', share: protein, color: '#FAA84D'
      }, {
        kind: 'Carbo', share: carbo, color: '#239371'
      }, {
        kind: 'Fat', share: fat, color: '#BF4D28'
      }];
      this.currently = [kcal, protein, carbo, fat];

  }

}
