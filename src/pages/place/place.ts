import { Component } from '@angular/core';
import {ViewController} from "ionic-angular";


@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {

  constructor(private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  onDismiss(){
    this.viewCtrl.dismiss()
  }

}
