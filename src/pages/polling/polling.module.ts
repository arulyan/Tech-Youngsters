import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PollingPage } from './polling';

@NgModule({
  declarations: [
    PollingPage,
  ],
  imports: [
    IonicPageModule.forChild(PollingPage),
  ],
})
export class PollingPageModule {}
