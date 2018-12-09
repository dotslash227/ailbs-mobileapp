import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { NewsItemPage } from '../news-item/news-item';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  items;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private api: ApiProvider) {
  }

  ionViewDidLoad() {
    this.api.getNewsList().subscribe(
      res => {
        console.log(res);
        this.items = res;
      }, 
      error => console.log(error),
      () => {
        console.log('Complete', this.items);
      }
    )
  }

  itemSelected(id) {
    this.navCtrl.push(NewsItemPage, {id: id})
  }

}
