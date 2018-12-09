import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the DownloadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-download',
  templateUrl: 'download.html',
})
export class DownloadPage {
  downloadItems;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private apiProvider: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloadPage');

    this.apiProvider.getDownloadList()
    .subscribe(
      res => {
        this.downloadItems = res;
      },
      error => console.log(error),
      () => {
        console.log('completed', this.downloadItems);
      }
    )
  }

}
