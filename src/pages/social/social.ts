import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@IonicPage()
@Component({
    selector: 'page-social',
    templateUrl: 'social.html',
  })

  export class SocialPage {
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