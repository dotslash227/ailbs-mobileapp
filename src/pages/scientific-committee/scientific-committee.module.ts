import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScientificCommitteePage } from './scientific-committee';

@NgModule({
  declarations: [
    ScientificCommitteePage,
  ],
  imports: [
    IonicPageModule.forChild(ScientificCommitteePage),
  ],
})
export class ScientificCommitteePageModule {}
