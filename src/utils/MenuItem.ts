import { HomePage } from "../pages/home/home";
import { ConferenceHighlightsPage } from "../pages/conference-highlights/conference-highlights";
import { ListPage } from "../pages/list/list";
import { PolicyPage } from "../pages/policy/policy";
import { TermsPage } from "../pages/terms/terms";
import { ContactPage } from "../pages/contact/contact";
import { VenuePage } from "../pages/venue/venue";

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
          icon: this.parentDir + 'map.png',
          label: 'Venue',
          page: VenuePage
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
          page: ContactPage
        },
        {
          icon: this.parentDir + 'Social-wall-icon.png',
          label: 'Social Wall',
          page: ListPage
        },
        {
          icon: this.parentDir + 'login-icon.png',
          label: 'Login/Register',
          page: 'RegisterPage'
        },
        {
          icon: this.parentDir + 'privacy-icon.png',
          label: 'Privacy Policy',
          page: PolicyPage
        },
        {
          icon: this.parentDir + 'tos-icon.png',
          label: 'Terms of Use',
          page: TermsPage
        },
      ];

    constructor() {

    }

    getMenuItems() {
        return this.menuItems;
    }
}