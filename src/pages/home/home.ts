import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { RegisterPage } from '../register/register';
import { MenuItem } from '../../utils/MenuItem';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;

  menuItems;

  constructor(public navCtrl: NavController) {
    this.menuItems = new MenuItem().getMenuItems();
  }

  // autoplaySlides(){
  //   this.slides.startAutoplay();
  // }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page.page, {title: page.label});
  }

}
