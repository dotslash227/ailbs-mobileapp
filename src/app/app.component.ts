import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ConferenceHighlightsPage } from '../pages/conference-highlights/conference-highlights';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  menuItems;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

    const parentDir = './assets/imgs/'
    this.menuItems = [
      {
        icon: parentDir + 'agenda-icon.png',
        label: 'Agenda',
        page: ListPage
      },
      {
        icon: parentDir + 'conf-highlights.png',
        label: 'Conference Highlights',
        page: ConferenceHighlightsPage
      },
      {
        icon: parentDir + 'news-icon.png',
        label: 'News',
        page: ListPage
      },
      {
        icon: parentDir + 'faculty-icon.png',
        label: 'Faculties',
        page: ListPage
      },
      {
        icon: parentDir + 'Downloads-icon.png',
        label: 'Downloads',
        page: ListPage
      },
      {
        icon: parentDir + 'Social-wall-icon.png',
        label: 'Social Wall',
        page: ListPage
      },
      {
        icon: parentDir + 'login-icon.png',
        label: 'Register',
        page: 'RegisterPage'
      }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.page, {title: page.label});
  }
}
