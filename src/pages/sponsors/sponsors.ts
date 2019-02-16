import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the VenuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sponsors',
  templateUrl: 'sponsors.html',
})
export class SponsorsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, private apiProvider: ApiProvider) {
  }
  items:any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad SponsorPage');

    this.apiProvider.getSponsors()
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
