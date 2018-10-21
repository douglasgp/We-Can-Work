import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YourProfilePage } from '../your-profile/your-profile';
import { ProfilePage } from '../profile/profile';
import { QuizPage } from '../quiz/quiz';
import { CongratsPage } from '../congrats/congrats';
import { YourBoundPage } from '../your-bound/your-bound';
import { JobsPage } from '../jobs/jobs';

@Component({
  selector: 'page-jobs',
  templateUrl: 'jobs.html'
})
export class JobsPage {

  constructor(public navCtrl: NavController) {
  }
  goToYourProfile(params){
    if (!params) params = {};
    this.navCtrl.push(YourProfilePage);
  }goToProfile(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
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
