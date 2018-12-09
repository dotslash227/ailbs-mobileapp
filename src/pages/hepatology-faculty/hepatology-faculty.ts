import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the HepatologyFacultyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hepatology-faculty',
  templateUrl: 'hepatology-faculty.html',
})
export class HepatologyFacultyPage {
  items;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private apiProvider: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HepatologyFacultyPage');

    this.apiProvider.getHepatologyFaculty()
    .subscribe(
      res => {
        this.items = res;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('completed', this.items);
      }
    )
  }

}
