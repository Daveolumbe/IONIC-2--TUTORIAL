import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {PlacesServices} from "../../services/places.service";
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {
  location: any;
  constructor(private placesService: PlacesServices, private navCtrl: NavController, private geolocation: Geolocation) { }

  onAddPlace(value: {title: string}){
    this.placesService.addPlace(value);
    this.navCtrl.pop();
  }

  onLocateUser(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.location = resp;
      console.log('location success ')
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
