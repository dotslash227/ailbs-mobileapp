import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConferenceHighlightsPage } from './conference-highlights';

@NgModule({
  declarations: [
    ConferenceHighlightsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConferenceHighlightsPage),
  ],
})
export class ConferenceHighlightsPageModule {}
