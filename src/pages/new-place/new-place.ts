import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {PlacesServices} from "../../services/places.service";

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(private placesService: PlacesServices, private navCtrl: NavController) { }

  onAddPlace(value: {title: string}){
    this.placesService.addPlace(value);
    this.navCtrl.pop();
  }

}
