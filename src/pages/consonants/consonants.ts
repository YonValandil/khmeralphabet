import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { consonantDetailsPage } from '../consonantDetails/consonantDetails';

@Component({
  selector: 'page-consonants',
  templateUrl: 'consonants.html'
})
export class ConsonantsPage {

  letter: string;
  type: number;

  constructor(public navCtrl: NavController) {

  }

  private showConsonantDetailsPage() {
      this.navCtrl.push(consonantDetailsPage, {
        letter: this.letter,
        type: this.type
      });
  }

}
