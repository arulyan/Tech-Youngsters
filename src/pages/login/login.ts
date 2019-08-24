import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  Login:string="User";
  UserEmail:string;
  UserPass:string;
  AdminEmail:string;
  AdminPass:String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service:ServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  GoToSignUp(){
    this.navCtrl.push('SignUpPage');
  }

  LoginUser(){
    let body = {
      email:this.UserEmail,
      password:this.UserPass
    }

    this.service.LoginUser(body).subscribe(data=>{
      if(data.json().status == 404){
        alert("Your are not registered!");
      }
      else if(data.json().status == 401){
        alert("Wrong Credentials!");
      }
      else if(data.json().status == 400){
        alert("Server Error!");
      }
      else{
        alert("Success");
        this.navCtrl.push("UserHomePage");
      }
    })
  }

  AdminLogin(){
    if(this.AdminEmail == "1234567890123456"){
      if(this.AdminPass == "admin"){
        this.navCtrl.push("AdminEventsPage");
      }
      else{
        alert("Wrong Password");
      }
    }
    else{
      alert("Wrong Credentials");
    }
  }

}
