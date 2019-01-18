import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPageAgenda } from './agenda-tabs';

@NgModule({
  declarations: [
    TabsPageAgenda,
  ],
  imports: [
    IonicPageModule.forChild(TabsPageAgenda),
  ],
})
export class TabsPageModule {}
