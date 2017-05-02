import { Component } from '@angular/core';

import { ModalController, ViewController, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-consonantDetails',
  templateUrl: 'consonantDetails.html'
})
export class consonantDetailsPage {

  name: string;
  trad: string;
  type: number;

  constructor(public navCtrl: NavController, public params: NavParams, public viewCtrl: ViewController) {
    console.log('UserId', params.get('userId')); //tmp test modal

    this.name = this.params.get('name');
    this.trad = this.params.get('trad');
    this.type = this.params.get('type');
  }

}
