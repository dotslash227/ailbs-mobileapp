import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

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
import { ApiProvider } from '../providers/api/api';
import { FacultyPage } from '../pages/faculty/faculty';
import { TabsPage } from '../pages/tabs/tabs';
import { NewsPage } from '../pages/news/news';
import { NewsItemPage } from '../pages/news-item/news-item';
import { DownloadPage } from '../pages/download/download';
import { SurgeryFacultyPage } from '../pages/surgery-faculty/surgery-faculty';
import { AnesthesiaFacultyPage } from '../pages/anesthesia-faculty/anesthesia-faculty';
import { HepatologyFacultyPage } from '../pages/hepatology-faculty/hepatology-faculty';
import { InternationalFacultyPage } from '../pages/international-faculty/international-faculty';
import { ScientificCommitteePage } from '../pages/scientific-committee/scientific-committee';

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
    VenuePage,
    FacultyPage,
    TabsPage,
    NewsPage,
    NewsItemPage,
    DownloadPage,
    SurgeryFacultyPage,
    AnesthesiaFacultyPage,
    HepatologyFacultyPage,
    InternationalFacultyPage,
    ScientificCommitteePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule 
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
    VenuePage,
    FacultyPage,
    TabsPage,
    NewsPage,
    NewsItemPage,
    DownloadPage,
    SurgeryFacultyPage,
    AnesthesiaFacultyPage,
    HepatologyFacultyPage,
    InternationalFacultyPage,
    ScientificCommitteePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
