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
  selector: 'page-international-faculty',
  templateUrl: 'international-faculty.html',
})
export class InternationalFacultyPage {
  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private apiProvider: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternationalFacultyPage');

    this.apiProvider.getInternationalFaculty()
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
