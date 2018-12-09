import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the AnesthesiaFacultyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anesthesia-faculty',
  templateUrl: 'anesthesia-faculty.html',
})
export class AnesthesiaFacultyPage {
  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private apiProvider: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnesthesiaFacultyPage');

    this.apiProvider.getAnesthesiaFaculty()
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
