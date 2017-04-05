import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-consonantDetails',
  templateUrl: 'consonantDetails.html'
})
export class consonantDetailsPage {

  letter: string;
  type: number;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.letter = this.params.get('letter');
    this.type = this.params.get('type');
  }

}
