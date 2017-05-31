import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NewRouteDurationsPage } from '../new-route-durations/new-route-durations'
import { NewPlacePage } from '../new-place/new-place'

import { getPlaces } from '../../providers/places'

@Component({
    selector: 'page-new-route',
    templateUrl: 'new-route.html',
})
export class NewRoutePage {

    name = '';
    places = [];
    transport: any;

    transportTypes = [ 'car', 'public transport', 'on foot', 'bike' ]

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.places = getPlaces(9);
    }

    placeCheckboxToggle(place) {
        place.selected = !place.selected;
    }

    addNewPlace() {
        this.navCtrl.push(NewPlacePage);
    }

    nextStep(place) {
        this.navCtrl.push(NewRouteDurationsPage, {
            name: this.name,
            transport: this.transport,
            places: this.places.filter(p => p.selected)
        });
    }

}
