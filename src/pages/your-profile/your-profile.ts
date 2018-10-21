import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { YourProfilePage } from '../your-profile/your-profile';
import { QuizPage } from '../quiz/quiz';
import { CongratsPage } from '../congrats/congrats';
import { YourBoundPage } from '../your-bound/your-bound';
import { JobsPage } from '../jobs/jobs';

@Component({
  selector: 'page-your-profile',
  templateUrl: 'your-profile.html'
})
export class YourProfilePage {

  constructor(public navCtrl: NavController) {
  }
  goToProfile(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
  }goToYourProfile(params){
    if (!params) params = {};
    this.navCtrl.push(YourProfilePage);
  }goToQuiz(params){
    if (!params) params = {};
    this.navCtrl.push(QuizPage);
  }goToCongrats(params){
    if (!params) params = {};
    this.navCtrl.push(CongratsPage);
  }goToYourBound(params){
    if (!params) params = {};
    this.navCtrl.push(YourBoundPage);
  }goToJobs(params){
    if (!params) params = {};
    this.navCtrl.push(JobsPage);
  }
}
