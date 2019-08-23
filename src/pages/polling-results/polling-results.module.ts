import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PollingResultsPage } from './polling-results';

@NgModule({
  declarations: [
    PollingResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(PollingResultsPage),
  ],
})
export class PollingResultsPageModule {}
