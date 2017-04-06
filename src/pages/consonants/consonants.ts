import { Component, Directive, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { consonantDetailsPage } from '../consonantDetails/consonantDetails';

@Component({
  selector: 'page-consonants',
  templateUrl: 'consonants.html',
  inputs : ['color'],
})
export class ConsonantsPage implements OnInit {

  hideElement: boolean;
  colorElement: string;

  consonantsTab = [
    { "id": 1, "name": 'Kor', "type": 2 },
    { "id": 2, "name": 'Khor', "type": 2 },
    { "id": 3, "name": 'Ko', "type": 1 },
    { "id": 4, "name": 'Kho', "type": 1 },
    { "id": 5, "name": 'Ngo', "type": 1 },

    { "id": 6, "name": 'Tchor', "type": 2 },
    { "id": 7, "name": 'Chhor', "type": 2 },
    { "id": 8, "name": 'Tcho', "type": 1 },
    { "id": 9, "name": 'Chho', "type": 1 },
    { "id": 10, "name": 'Nho', "type": 1 },

    { "id": 11, "name": 'Dor', "type": 2 },
    { "id": 12, "name": 'Thor', "type": 2 },
    { "id": 13, "name": 'Do', "type": 1 },
    { "id": 14, "name": 'Thour', "type": 1 },
    { "id": 15, "name": 'Nor', "type": 2 },

    { "id": 16, "name": 'Tor', "type": 2 },
    { "id": 17, "name": 'Thor', "type": 2 },
    { "id": 18, "name": 'To', "type": 1 },
    { "id": 19, "name": 'Tho', "type": 1 },
    { "id": 20, "name": 'No', "type": 1 },

    { "id": 21, "name": 'Bor', "type": 2 },
    { "id": 22, "name": 'Phor', "type": 2 },
    { "id": 23, "name": 'Po', "type": 1 },
    { "id": 24, "name": 'Pho', "type": 1 },
    { "id": 25, "name": 'Mo', "type": 1 },

    { "id": 26, "name": 'Yo', "type": 2 },
    { "id": 27, "name": 'Ro', "type": 2 },
    { "id": 28, "name": 'Lo', "type": 2 },
    { "id": 29, "name": 'Vo', "type": 2 },

    { "id": 30, "name": 'Sor', "type": 1 },
    { "id": 31, "name": 'Hor', "type": 1 },
    { "id": 32, "name": 'Lor', "type": 1 },
    { "id": 33, "name": 'Or', "type": 1 }
  ];

  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){
    console.log("OMGGGGGGGGGG !");
    /*for (let consonant of this.consonantsTab) {
      if(consonant.type == 2) { //change 2 to 1
       this.colorElement = 'danger';
      } else {
       this.colorElement = 'primary';
      }
    }*/
  }

  private showConsonantDetailsPage(name: string, type: number) {
    this.navCtrl.push(consonantDetailsPage, {
      name: name,
      type: type
    });
  }

}
