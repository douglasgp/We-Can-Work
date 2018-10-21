import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { Page6Page } from '../pages/page6/page6';
import { YourProfilePage } from '../pages/your-profile/your-profile';
import { QuizPage } from '../pages/quiz/quiz';
import { HomePage } from '../pages/home/home';
import { YourBoundPage } from '../pages/your-bound/your-bound';
import { CongratsPage } from '../pages/congrats/congrats';
import { JobsPage } from '../pages/jobs/jobs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsControllerPage,
    ProfilePage,
    RegisterPage,
    Page6Page,
    YourProfilePage,
    QuizPage,
    HomePage,
    YourBoundPage,
    CongratsPage,
    JobsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsControllerPage,
    ProfilePage,
    RegisterPage,
    Page6Page,
    YourProfilePage,
    QuizPage,
    HomePage,
    YourBoundPage,
    CongratsPage,
    JobsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}