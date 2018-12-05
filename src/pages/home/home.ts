import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  menuItems = [
    {
      icon: 'archive',
      label: 'Agenda',
      page: ListPage
    },
    {
      icon: 'md-barcode',
      label: 'Conference Highlights',
      page: ListPage
    },
    {
      icon: 'microphone',
      label: 'Speaker',
      page: ListPage
    },
    {
      icon: 'people',
      label: 'Faculties',
      page: ListPage
    },
    {
      icon: 'paper',
      label: 'Paper',
      page: ListPage
    },
    {
      icon: 'log-in',
      label: 'Register',
      page: 'RegisterPage'
    }
  ];

  menuItemsCopy;

  constructor(public navCtrl: NavController) {
    this.menuItemsCopy = this.menuItems.splice(0, 3);
  }

  openPage(item) {
    this.navCtrl.push(item.page, {item: item});
  }

}
