import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { SurgeryFacultyPage } from '../surgery-faculty/surgery-faculty';
import { AnesthesiaFacultyPage } from '../anesthesia-faculty/anesthesia-faculty';
import { HepatologyFacultyPage } from '../hepatology-faculty/hepatology-faculty';
import { InternationalFacultyPage } from '../international-faculty/international-faculty';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root = SurgeryFacultyPage;
  tab2Root = AnesthesiaFacultyPage;
  tab3Root = HepatologyFacultyPage;
  tab4root = InternationalFacultyPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
