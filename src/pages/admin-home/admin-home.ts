import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdminHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-home',
  templateUrl: 'admin-home.html',
})
export class AdminHomePage {

  events:any;
  // colours:{
  //   1:'#ff1aff',
  //   2:'#39e600',
  //   3:'#ff6600',
  //   4:'#0052cc'
  // }
  constructor(public navCtrl: NavController, public navParams: NavParams, private service: ServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminHomePage');
    this.getTheEvents();
  }

  getTheEvents(){
    this.service.getEvents().subscribe(data=>{
      this.events = data.json();
      console.log(data+" now comes The JSON DADDDDDDDYY!!!!!!\n");
      console.log(this.events);
    })
  }

  eventSelected(event){
    this.navCtrl.push('PollingResultsPage',{goEvent:event});
  }

  goBack(){
    this.navCtrl.pop();
  }

}
