import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PollingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-polling',
  templateUrl: 'polling.html',
})
export class PollingPage {

  event:any;
  choice:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private service:ServiceProvider) {
    this.event = this.navParams.get('goEvent');
    console.log(this.event);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PollingPage');
  }

  run(){
    console.log(this.choice+"\n"+this.service.email+"\n"+this.event.EventName);
    let body = {
      event: this.event.EventName,
      email: this.service.email,
      options: this.choice
    }
    this.service.Vote(body).subscribe(res=>{
      console.log(res.json());//http client directly give a json object, so u dont need to parse the data into json using res.json()
      //but here we r using http module not httpclient module so we need to parse the response into json object!
      if(res.json().status == 409){
        alert("You have already casted your vote");
      }
      else{
        if(res.json().status ==200){
          alert(`Voted for ${this.choice} successfully`);
          this.navCtrl.pop();
        }
      }
    })

  }
  
}
