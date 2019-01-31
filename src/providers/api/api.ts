import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  domain = 'https://www.ailbsindiaconference.com/apis/';
  surgeryFaculty = this.domain.concat('surgery-faculty');
  anesthesiaFaculty = this.domain.concat('anes-faculty');
  hepatologyFaculty = this.domain.concat('hepa-faculty');
  internationalFaculty = this.domain.concat('international-faculty');
  downloadList = this.domain.concat('get-downloads');
  newsList = this.domain.concat('get-news-list');
  newsItem = this.domain.concat('news');
  agenda = this.domain.concat("agenda");
  attendees = this.domain.concat("attendees");

  getSurgeryFaculty() {
    return this.http.get(this.surgeryFaculty);
  }

  getAttendeeList(){
    return this.http.get(this.attendees);
  }

  getAnesthesiaFaculty() {
    return this.http.get(this.anesthesiaFaculty);
  }

  getHepatologyFaculty() {
    return this.http.get(this.hepatologyFaculty);
  }

  getInternationalFaculty() {
    return this.http.get(this.internationalFaculty);
  }

  getDownloadList() {
    return this.http.get(this.downloadList);
  }

  getNewsList() {
    return this.http.get(this.newsList)
  }

  getNewsItem(id) {
    return this.http.get(this.newsItem + '/' + id);
  }
  getAgenda(day){
    return this.http.get(this.agenda + "/" + day);
  }

}
