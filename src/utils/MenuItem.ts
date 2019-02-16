import { HomePage } from "../pages/home/home";
import { ConferenceHighlightsPage } from "../pages/conference-highlights/conference-highlights";
import { ListPage } from "../pages/list/list";
import { PolicyPage } from "../pages/policy/policy";
import { TermsPage } from "../pages/terms/terms";
import { ContactPage } from "../pages/contact/contact";
import { VenuePage } from "../pages/venue/venue";
import { AboutPage } from "../pages/about/about";
import { FacultyPage } from "../pages/faculty/faculty";
import { NewsPage } from "../pages/news/news";
import { DownloadPage } from "../pages/download/download";
import { ScientificCommitteePage } from "../pages/scientific-committee/scientific-committee";
import { AgendaPage } from "../pages/agenda/agenda";
import { SocialPage } from "../pages/social/social";
import { AttendeesPage } from "../pages/attendees/attendees";
import { FeedbackPage } from "../pages/feedback/feedback";
import { SponsorsPage } from "../pages/sponsors/sponsors";

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
          page: AgendaPage
        },
        {
          icon: this.parentDir + 'sponsors-icon.png',
          label: 'Sponsors',
          page: SponsorsPage
        },
        {
          icon: this.parentDir + 'conf-highlights.png',
          label: 'Conference Highlights',
          page: ConferenceHighlightsPage
        },
        {
          icon: this.parentDir + 'science.png',
          label: 'Scientific Committee',
          page: ScientificCommitteePage
        },
        {
          icon: this.parentDir + 'news-icon.png',
          label: 'News',
          page: NewsPage
        },
        {
          icon: this.parentDir + 'faculty-icon.png',
          label: 'Faculty',
          page: FacultyPage
        },
        {
          icon: this.parentDir + 'Downloads-icon.png',
          label: 'Downloads',
          page: DownloadPage
        },
        {
          icon: this.parentDir + 'docs-icon.png',
          label: 'Attendees',
          page: AttendeesPage
        },
        {
          icon: this.parentDir + 'map.png',
          label: 'Venue',
          page: VenuePage
        },
        {
          icon: this.parentDir + 'abouts-icon.png',
          label: 'About Us',
          page: AboutPage
        },{
          icon: this.parentDir + 'feedback-icon.png',
          label: 'Feedback',
          page: FeedbackPage
        },
        {
          icon: this.parentDir + 'contact-icon.png',
          label: 'Contact Us',
          page: ContactPage
        },
        {
          icon: this.parentDir + 'Social-wall-icon.png',
          label: 'Social Wall',
          page: SocialPage
        },
        {
          icon: this.parentDir + 'login-icon.png',
          label: 'Registration',
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