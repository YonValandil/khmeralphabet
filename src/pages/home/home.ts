import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ConsonantsPage } from '../consonants/consonants';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  private showConsonantsPage() {
    console.log("It works, Function Called !");
    this.navCtrl.push(ConsonantsPage);
  }

}
