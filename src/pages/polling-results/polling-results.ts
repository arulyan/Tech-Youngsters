import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PollingResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-polling-results',
  templateUrl: 'polling-results.html',
})
export class PollingResultsPage {
  event: any;
  data: any;
  a: number = 0;
  b: number = 0;
  c: number = 0;
  d: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private service: ServiceProvider) {
    this.event = this.navParams.get('goEvent');
    console.log(this.event);
    this.getVotingResults();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PollingResultsPage');
  }

  getVotingResults() {
    let body = {
      event: this.event.EventName
    }
    this.service.VoteResults(body).subscribe(res => {
      this.data = res.json();
      this.data.forEach((row) => {
        if (row.Options == 'a') {
          this.a++;
        }
        else if (row.Options == 'b') {
          this.b++;
        }
        else if (row.Options == 'c') {
          this.c++;
        }
        else {
          this.d++;
        }
      })
      console.log(this.a);
      console.log(this.b);
      console.log(this.c);
      console.log(this.d);
      console.log(res.json());
    })
  }

}
