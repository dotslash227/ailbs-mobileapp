import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the NewsItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-item',
  templateUrl: 'news-item.html',
})
export class NewsItemPage {
  newsId;
  item:any = {title: 'Loading', content: 'Loading', image: null};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private apiProvider: ApiProvider) {
    this.newsId = this.navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsItemPage', this.newsId);

    this.apiProvider.getNewsItem(this.newsId)
    .subscribe(
      res => {
        this.item = res;
      },
      error => {
        console.log(error)
      },
      () => {
        console.log('complete', this.item);
      }
    )
  }

}
