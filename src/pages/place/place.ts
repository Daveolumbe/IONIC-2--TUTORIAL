import {Component} from '@angular/core';
import {NavParams, ViewController} from "ionic-angular";


@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
    this.lat = this.navParams.data.location.lat;
    this.lng = this.navParams.data.location.lng;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }

  onDismiss() {
    this.viewCtrl.dismiss()
  }

}
