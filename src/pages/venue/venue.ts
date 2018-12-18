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

/**
 * Generated class for the VenuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-venue',
  templateUrl: 'venue.html',
})
export class VenuePage {

  map: GoogleMap; 
  map2: GoogleMap; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loadMap(){

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyAbTNsEdUbxT_YL0O39KnHzhp4ZHXKHMxA',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyAbTNsEdUbxT_YL0O39KnHzhp4ZHXKHMxA'
    });

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 28.5974182,
           lng: 77.1738331
         },
         zoom: 13,
         tilt: 30
       }
    };
    let mapOptions2: GoogleMapOptions = {
      camera: {
         target: {
           lat: 28.5955877,
           lng: 77.1683188
         },
         zoom: 13,
         tilt: 30
       }
    };

    this.map = GoogleMaps.create("map_canvas", mapOptions);
    this.map2 = GoogleMaps.create("map_canvas2", mapOptions2)

    let marker: Marker = this.map.addMarkerSync({
      title: 'Hotel ITC Maurya',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 28.5974182,
        lng: 77.1738331
      }
    });
    let marker2: Marker = this.map2.addMarkerSync({
      title: 'Hotel Taj Palace',
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: 28.5974182,
        lng: 77.1738331
      }
    });
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });
    marker2.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');
    });

  }

  ionViewDidLoad() {
    this.loadMap();
    console.log('ionViewDidLoad VenuePage');    
  }  
}
