import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CongratsPage } from '../congrats/congrats';

@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html'
})
export class QuizPage {

  constructor(public navCtrl: NavController) {
  }
  goToCongrats(params){
    if (!params) params = {};
    this.navCtrl.push(CongratsPage);
  }
}
