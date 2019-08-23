import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  urlSignUp:string = "http://localhost:4999/signUp";
  urlLogIn:string = "http://localhost:4999/login";
  urlEvents:string = "http://localhost:4999/events";
  urlVote:string = "http://localhost:4999/voting";
  urlVoteResults:string = "http://localhost:4999/votingResults";
  public email:string; //LoggedIn Email

  constructor(public http: Http) {
    console.log('Hello ServiceProvider Provider');
  }

  getEvents(){
    return this.http.get(this.urlEvents);
  }

  LoginUser(body){
    this.email = body.email;
    console.log(this.email);
    return this.http.post(this.urlLogIn,body);
  }

  SignUpUser(body){
    return this.http.post(this.urlSignUp,body);
  }

  Vote(body){
    return this.http.post(this.urlVote,body);
  }

  VoteResults(body){
    return this.http.post(this.urlVoteResults,body);
  }

}
