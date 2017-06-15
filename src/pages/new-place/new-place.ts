import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlacesServices} from "../../services/places.service";

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(private placesService: PlacesServices) { }

  onAddPlace(value: {title: string}){
    this.placesService.addPlace(value);
  }

}
