import { HomePage } from "../pages/home/home";
import { ConferenceHighlightsPage } from "../pages/conference-highlights/conference-highlights";
import { ListPage } from "../pages/list/list";

export class MenuItem {
    parentDir = './assets/imgs/'
    menuItems = [
        {
          icon: this.parentDir + 'home-icon.jpg',
          label: 'Home',
          page: HomePage
        },
        {
          icon: this.parentDir + 'agenda-icon.png',
          label: 'Agenda',
          page: ListPage
        },
        {
          icon: this.parentDir + 'conf-highlights.png',
          label: 'Conference Highlights',
          page: ConferenceHighlightsPage
        },
        {
          icon: this.parentDir + 'news-icon.png',
          label: 'News',
          page: ListPage
        },
        {
          icon: this.parentDir + 'faculty-icon.png',
          label: 'Faculties',
          page: ListPage
        },
        {
          icon: this.parentDir + 'Downloads-icon.png',
          label: 'Downloads',
          page: ListPage
        },
        {
          icon: this.parentDir + 'docs-icon.png',
          label: 'Attendees',
          page: ListPage
        },
        {
          icon: this.parentDir + 'abouts-icon.png',
          label: 'About Us',
          page: ListPage
        },{
          icon: this.parentDir + 'feedback-icon.png',
          label: 'Feedback',
          page: ListPage
        },
        {
          icon: this.parentDir + 'contact-icon.png',
          label: 'Contact Us',
          page: ListPage
        },
        {
          icon: this.parentDir + 'Social-wall-icon.png',
          label: 'Social Wall',
          page: ListPage
        },
        {
          icon: this.parentDir + 'login-icon.png',
          label: 'Register',
          page: 'RegisterPage'
        }
      ];

    constructor() {

    }

    getMenuItems() {
        return this.menuItems;
    }
}