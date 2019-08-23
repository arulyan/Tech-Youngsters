import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  name: string;
  email: string;
  pass: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: ServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  SignUp() {
    let body = {
      name: this.name,
      email: this.email,
      password: this.pass
    }

    this.service.SignUpUser(body).subscribe(res => {
      console.log(res.json());//http client directly give a json object, so u dont need to parse the data into json using res.json()
      if(res.json().status == 409){
        alert("You have already Registered!");
      }
      else{
        if(res.json().status ==200){
          alert("Successfully Signed Up");
          this.navCtrl.setRoot('LoginPage');
        }
      }
    })
  }

}
