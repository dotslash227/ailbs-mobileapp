import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { ConferenceHighlightsPage } from '../pages/conference-highlights/conference-highlights';
import { AboutPage } from '../pages/about/about';
import { PolicyPage } from '../pages/policy/policy';
import { ContactPage } from '../pages/contact/contact';
import { TermsPage } from '../pages/terms/terms';
import { VenuePage } from '../pages/venue/venue';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ConferenceHighlightsPage,
    AboutPage,
    ContactPage,
    PolicyPage,
    TermsPage,
    VenuePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ConferenceHighlightsPage,
    AboutPage,
    ContactPage,
    PolicyPage,
    TermsPage,
    VenuePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
