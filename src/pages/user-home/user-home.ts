import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-home',
  templateUrl: 'user-home.html',
})
export class UserHomePage {

  events:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: ServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserHomePage');
    this.getTheEvents();
  }

  getTheEvents(){
    this.service.getEvents().subscribe(data=>{
      this.events = data.json();
      console.log(data+" now comes The JSON DADDDDDDDYY!!!!!!\n");
      console.log(this.events);
      this.events.forEach((v)=>{
        console.log(v.OptionA);
      })
    })
  }

  eventSelected(event){
    this.navCtrl.push('PollingPage',{goEvent:event});
  }

}
