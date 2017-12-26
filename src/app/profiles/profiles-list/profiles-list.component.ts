import { Component, OnInit } from '@angular/core';
import { profiles } from '../profiles.module';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfilesListComponent implements OnInit {

  profiles: profiles[];
  constructor(
    private profilesService: ProfilesService
  ) { }
  onCheckProfile(profile){
    this.profilesService.checkActiveProfile(profile);
  }
  ngOnInit() {
    this.profilesService.getProfiles().then(
      profiles => this.profiles = profiles
    );
  }

}
