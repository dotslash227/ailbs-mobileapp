import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPageAgenda } from '../agenda-tabs/agenda-tabs';

/**
 * Generated class for the FacultyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
  rootPage:any = TabsPageAgenda;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacultyPage');
  }

}
