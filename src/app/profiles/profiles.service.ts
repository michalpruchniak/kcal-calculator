import { Observable } from 'rxjs/Observable';
import { profiles } from './profiles.module';
import { PROFILES } from './profiles';

export class ProfilesService {
  activeProfile;
  getProfiles(): Promise<profiles[]>{
      return Promise.resolve(PROFILES);
  }
  getProfile(){
    return this.activeProfile;
  }
  checkActiveProfile(profile){
      this.activeProfile = profile;
  }
  addNewProfile(element){
    PROFILES.push(element);
  }
}
