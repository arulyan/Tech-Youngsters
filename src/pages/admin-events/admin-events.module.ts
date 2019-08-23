import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminEventsPage } from './admin-events';

@NgModule({
  declarations: [
    AdminEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminEventsPage),
  ],
})
export class AdminEventsPageModule {}
