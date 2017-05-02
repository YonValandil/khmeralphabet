import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { consonantDetailsPage } from '../consonantDetails/consonantDetails';

@Component({
  selector: 'page-consonants',
  templateUrl: 'consonants.html',
})
export class ConsonantsPage {

  consonantsTab = [
    { "id": 1, "name": 'ក', "trad": "Kor", "type": 2 },
    { "id": 2, "name": 'ខ', "trad": "Khor", "type": 2 },
    { "id": 3, "name": 'គ', "trad": "Ko", "type": 1 },
    { "id": 4, "name": 'ឃ', "trad": "Kho", "type": 1 },
    { "id": 5, "name": 'ង', "trad": "Ngo", "type": 1 },

    { "id": 6, "name": 'ច', "trad": "Tchor", "type": 2 },
    { "id": 7, "name": 'ឆ', "trad": "Chhor", "type": 2 },
    { "id": 8, "name": 'ជ', "trad": "Tcho", "type": 1 },
    { "id": 9, "name": 'ឈ', "trad": "Chho", "type": 1 },
    { "id": 10, "name": 'ញ', "trad": "Nho", "type": 1 },

    { "id": 11, "name": 'ដ', "trad": "Dor", "type": 2 },
    { "id": 12, "name": 'ឋ', "trad": "Thor", "type": 2 },
    { "id": 13, "name": 'ឌ', "trad": "Do", "type": 1 },
    { "id": 14, "name": 'ឍ', "trad": "Thour", "type": 1 },
    { "id": 15, "name": 'ណ', "trad": "Nor", "type": 2 },

    { "id": 16, "name": 'ត', "trad": "Tor", "type": 2 },
    { "id": 17, "name": 'ថ', "trad": "Thor", "type": 2 },
    { "id": 18, "name": 'ទ', "trad": "To", "type": 1 },
    { "id": 19, "name": 'ធ', "trad": "Tho", "type": 1 },
    { "id": 20, "name": 'ន', "trad": "No", "type": 1 },

    { "id": 21, "name": 'ប', "trad": "Bor", "type": 2 },
    { "id": 22, "name": 'ផ', "trad": "Phor", "type": 2 },
    { "id": 23, "name": 'ព', "trad": "Po", "type": 1 },
    { "id": 24, "name": 'ភ', "trad": "Pho", "type": 1 },
    { "id": 25, "name": 'ម', "trad": "Mo", "type": 1 },

    { "id": 26, "name": 'យ', "trad": "Yo", "type": 2 },
    { "id": 27, "name": 'រ', "trad": "Ro", "type": 2 },
    { "id": 28, "name": 'ល', "trad": "Lo", "type": 2 },
    { "id": 29, "name": 'វ', "trad": "Vo", "type": 2 },

    { "id": 30, "name": 'ស', "trad": "Sor", "type": 1 },
    { "id": 31, "name": 'ហ', "trad": "Hor", "type": 1 },
    { "id": 32, "name": 'ឡ', "trad": "Lor", "type": 1 },
    { "id": 33, "name": 'អ', "trad": "Or", "type": 1 }
  ];

  constructor(public navCtrl: NavController) {

  }

  private showConsonantDetailsPage(name: string, type: number) {
    this.navCtrl.push(consonantDetailsPage, {
      name: name,
      type: type
    });
  }
}
