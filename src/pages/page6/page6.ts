import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YourProfilePage } from '../your-profile/your-profile';
import { ProfilePage } from '../profile/profile';
import { QuizPage } from '../quiz/quiz';
import { CongratsPage } from '../congrats/congrats';
import { YourBoundPage } from '../your-bound/your-bound';
import { JobsPage } from '../jobs/jobs';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-page6',
  templateUrl: 'page6.html'
})
export class Page6Page {

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
  }goToRegister(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }
}
