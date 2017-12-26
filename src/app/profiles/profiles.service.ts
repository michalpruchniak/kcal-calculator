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
  lastestElement(){
    if(PROFILES.length < 1){
      return 1;
    } else {
      let index = PROFILES[PROFILES.length-1].id;
    }
    return index;
  }
  addNewProfile(element){
    let index = PROFILES.length-1;
    let id = PROFILES[index].id;
    id++;
    element.id = id;
    PROFILES.push(element);
  }
}
