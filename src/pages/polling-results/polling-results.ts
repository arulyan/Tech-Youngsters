import { ServiceProvider } from './../../providers/service/service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from "chart.js";
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
  @ViewChild("barCanvas") barCanvas: ElementRef;
  public barChart: Chart;
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

  ionViewDidEnter() {
    console.log('ionViewDidLoad PollingResultsPage');
    this.generateGraph();
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

  generateGraph(){
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: [`${this.event.OptionA}`, `${this.event.OptionB}`,`${this.event.OptionC}`, `${this.event.OptionD}`],
        datasets: [
          {
            label: "# of Votes",
            data: [this.a, this.b, this.c, this.d],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

}
