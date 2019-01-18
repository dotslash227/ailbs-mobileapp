import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgramGlance } from './program-glance';

@NgModule({
  declarations: [
    ProgramGlance,
  ],
  imports: [
    IonicPageModule.forChild(ProgramGlance),
  ],
})
export class ProgramGlanceModule {}
