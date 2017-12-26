import { Component, DoCheck, Input } from '@angular/core';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements DoCheck {

  @Input() profile;
  activeProfile;
  constructor(
    private profilesService: ProfilesService
  ) { }

  ngDoCheck() {
    this.activeProfile = this.profilesService.activeProfile;
  }

}
