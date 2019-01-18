import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the SurgeryFacultyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-program-glance',
  templateUrl: 'program-glance.html',
})
export class ProgramGlance {
  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private apiProvider: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurgeryFacultyPage');

    this.apiProvider.getSurgeryFaculty()
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
