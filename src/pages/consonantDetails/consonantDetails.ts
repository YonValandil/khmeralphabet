import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-consonantDetails',
  templateUrl: 'consonantDetails.html'
})
export class consonantDetailsPage {

  name: string;
  type: number;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.name = this.params.get('name');
    this.type = this.params.get('type');
  }

}
