import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { InAppBrowser } from "@ionic-native/in-app-browser";

@IonicPage()
@Component({
    selector: 'page-attendees',
    templateUrl: 'attendees.html',
  })

  export class AttendeesPage {
    items:any;
  
    constructor(public navCtrl: NavController, public navParams: NavParams,
      private apiProvider: ApiProvider, private iab: InAppBrowser) {
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad SurgeryFacultyPage');
  
      this.apiProvider.getAttendeeList()
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

    openWhatsapp(doc){
      const wurl = "whatsapp://send?phone=+91" + doc.mobile;
      const browser = this.iab.create(wurl);
      browser.show();      
    }

  }